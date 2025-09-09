// src/pages/AdminServices.jsx
import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs, deleteDoc, updateDoc, doc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { app } from "../firebase";

const db = getFirestore(app);

const AdminServices = () => {
  const [formData, setFormData] = useState({ name: "", description: "" });
  const [services, setServices] = useState([]);
  const [editId, setEditId] = useState(null);

  // Fetch services
  const fetchServices = async () => {
    const querySnapshot = await getDocs(collection(db, "services"));
    const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setServices(data);
  };

  // Add or Update service
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.description) return;

    if (editId) {
      // Update service
      await updateDoc(doc(db, "services", editId), formData);
      setEditId(null);
    } else {
      // Add service
      await addDoc(collection(db, "services"), formData);
    }

    setFormData({ name: "", description: "" });
    fetchServices();
  };

  // Delete service
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "services", id));
    fetchServices();
  };

  // Load services on page load
  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Admin - Manage Services</h1>

      {/* Add/Edit Form */}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-4 mb-6">
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Service Name</label>
          <input
            type="text"
            placeholder="Service Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Description</label>
          <textarea
            placeholder="Service Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-400"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700"
        >
          {editId ? "Update Service" : "Add Service"}
        </button>
      </form>

      {/* Services List */}
      <div>
        <h2 className="text-xl font-bold mb-3">Services List</h2>
        <div className="space-y-3">
          {services.length > 0 ? (
            services.map((service) => (
              <div
                key={service.id}
                className="p-4 border rounded-lg shadow-sm bg-gray-50 flex justify-between items-center"
              >
                <div>
                  <h3 className="font-semibold text-lg">{service.name}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
                <div className="space-x-2">
                  <button
                    onClick={() => {
                      setFormData({ name: service.name, description: service.description });
                      setEditId(service.id);
                    }}
                    className="px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(service.id)}
                    className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No services found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminServices;
