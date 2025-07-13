import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import {
  Network,
  Code,
  Link,
  Monitor,
  Settings,
  Lightbulb
} from 'lucide-react';

const ServicesSection = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });

    const container = mountRef.current;
    const size = Math.min(container.clientWidth, container.clientHeight);
    renderer.setSize(size, size);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Create network globe
    const createNetworkGlobe = () => {
      const group = new THREE.Group();

      // Create nodes (spheres)
      const nodeGeometry = new THREE.SphereGeometry(0.05, 8, 8);
      const nodeMaterial = new THREE.MeshBasicMaterial({
        color: 0x9333ea,
        transparent: true,
        opacity: 0.8
      });

      const nodes = [];
      const nodeCount = 50;

      for (let i = 0; i < nodeCount; i++) {
        const node = new THREE.Mesh(nodeGeometry, nodeMaterial.clone());
        // Position nodes on sphere surface
        const phi = Math.acos(-1 + (2 * i) / nodeCount);
        const theta = Math.sqrt(nodeCount * Math.PI) * phi;
        const radius = 3;
        node.position.setFromSphericalCoords(radius, phi, theta);
        nodes.push(node);
        group.add(node);
      }

      // Create connections (lines)
      const connections = [];
      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x9333ea,
        transparent: true,
        opacity: 1
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const distance = nodes[i].position.distanceTo(nodes[j].position);
          // Only connect nearby nodes
          if (distance < 3) {
            const geometry = new THREE.BufferGeometry().setFromPoints([
              nodes[i].position,
              nodes[j].position
            ]);
            const line = new THREE.Line(geometry, lineMaterial.clone());
            connections.push(line);
            group.add(line);
          }
        }
      }

      return { group, nodes, connections };
    };

    const { group: networkGlobe, nodes, connections } = createNetworkGlobe();
    scene.add(networkGlobe);

    // Position camera
    camera.position.z = 5;

    // Animation
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);

      // Rotate the entire network
      networkGlobe.rotation.x += 0.002;
      networkGlobe.rotation.y += 0.001;

      // Animate node opacity
      const time = Date.now() * 0.001;
      nodes.forEach((node, index) => {
        const material = node.material;
        material.opacity = 0.5 + 0.3 * Math.sin(time + index * 0.5);
      });

      // Animate connection opacity
      connections.forEach((connection, index) => {
        const material = connection.material;
        material.opacity = 0.2 + 0.2 * Math.sin(time * 0.5 + index * 0.3);
      });

      renderer.render(scene, camera);
    };

    animate();

    // Store refs
    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Handle resize
    const handleResize = () => {
      if (!container || !renderer) return;
      const newSize = Math.min(container.clientWidth, container.clientHeight);
      renderer.setSize(newSize, newSize);
      camera.aspect = 1;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      if (renderer) {
        renderer.dispose();
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const services = [
    {
      icon: <Network className="w-8 h-8" />,
      title: "Information Systems Strategy",
      description: "Strategic planning for your IT infrastructure"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Software",
      description: "Tailored software solutions for your business"
    },
    {
      icon: <Link className="w-8 h-8" />,
      title: "Integration Services",
      description: "Seamless system integration and connectivity"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Web, Ecommerce & Mobile Apps",
      description: "Complete digital solutions and applications"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Business Automation",
      description: "Streamline your business processes"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Creativity",
      description: "Innovative creative solutions and design"
    }
  ];

  return (
    <section className="relative bg-white py-16 lg:py-24 overflow-hidden">
      {/* Bottom right glow */}
      <div className="absolute bottom-30 -right-20 w-80 h-80 bg-gradient-to-tr from-purple-700/40 via-purple-600/30 to-purple-500/40 rounded-full blur-3xl opacity-80 pointer-events-none z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Header */}
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our services
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                We don't just help with your IT needs. We focus on the entire ecosystem surrounding it. Bringing together people, process, and technology, we pride ourselves on delivering solutions that work in reality. Not theory.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group cursor-pointer transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-3">
                    <div className="text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-sm lg:text-base font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - 3D Globe */}
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-full h-96 lg:h-[500px] flex items-center justify-center">
              <div
                ref={mountRef}
                className="w-full h-full max-w-md max-h-md"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20 rounded-full blur-3xl opacity-50" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;