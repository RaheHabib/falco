import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../firebase";

const DropDown = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true); // 🔹 loading state
  const db = getFirestore(app);

  // Fetch services from Firebase
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "services"));
        const servicesList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setServices(servicesList);
      } catch (error) {
        console.error("Error fetching services: ", error);
      } finally {
        setLoading(false); // 🔹 stop loading when done
      }
    };
    fetchServices();
  }, [db]);

  return (
    <div className="fixed left-0 top-15 w-screen bg-white shadow-2xl z-50 flex overflow-hidden">
      {/* Left: Laptop Image + Heading + Text */}
      <div className="w-1/2 bg-gray-50 flex flex-col justify-center items-center p-10 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">Partner to Scale</h3>
        <p className="text-gray-600 text-sm mb-6 max-w-md">
          We collaborate with businesses to accelerate their digital journey.
          From tailored solutions to long-term support, our mission is to help
          you scale effectively.
        </p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/870/870169.png" // laptop illustration
          alt="Laptop"
          className="w-48 h-48 object-contain"
        />
      </div>

      {/* Right: Services List */}
      <div className="w-1/2 py-6 px-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Services</h2>
        <p className="text-gray-500 text-sm mb-6">
          Explore how we can support your business.
        </p>

        {loading ? (
          // 🔹 Loading UI
          <div className="flex justify-center items-center h-40">
            <svg
              className="animate-spin h-8 w-8 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
            <span className="ml-3 text-gray-600">Loading services...</span>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {services.map((service) => (
              <Link
                key={service.id}
                to="/contact"
                className="flex items-center justify-between px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition transform hover:translate-x-1"
              >
                <span className="font-medium">{service.name}</span>
                <svg
                  className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDown;
