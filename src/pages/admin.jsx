// src/pages/AdminServices.jsx
import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs, deleteDoc, updateDoc, doc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { app } from "../firebase";
import Navigation from "../utils/Navigation";
import Footer from "../components/Home/Footer";
import { FaBolt, FaCheck, FaClock, FaEdit, FaTrash, FaFrown } from "react-icons/fa";

const db = getFirestore(app);

const AdminServices = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginKey, setLoginKey] = useState("");
  const [formData, setFormData] = useState({ name: "", description: "" });
  const [services, setServices] = useState([]);
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [serviceToDelete, setServiceToDelete] = useState(null);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  // admin key
  const ADMIN_KEY = "falcoadminonly";

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();
    if (loginKey === ADMIN_KEY) {
      setIsLoggedIn(true);
      // Store login state in localStorage
      localStorage.setItem("adminLoggedIn", "true");
      showToast("Login successful");
    } else {
      showToast("Invalid admin key", "error");
    }
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("adminLoggedIn");
    setLoginKey("");
    showToast("Logged out successfully");
  };

  // Check if user is already logged in
  useEffect(() => {
    const loggedIn = localStorage.getItem("adminLoggedIn") === "true";
    if (loggedIn) {
      setIsLoggedIn(true);
    }
  }, []);

  // Show toast notification
  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "" }), 3000);
  };

  // Fetch services
  const fetchServices = async () => {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, "services"));
      const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setServices(data);
    } catch (error) {
      console.error("Error fetching services: ", error);
      showToast("Failed to fetch services", "error");
    } finally {
      setLoading(false);
    }
  };

  // Add or Update service
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.description) {
      showToast("Please fill all fields", "error");
      return;
    }

    try {
      if (editId) {
        // Update service
        await updateDoc(doc(db, "services", editId), formData);
        showToast("Service updated successfully");
        setEditId(null);
      } else {
        // Add service
        await addDoc(collection(db, "services"), formData);
        showToast("Service added successfully");
      }

      setFormData({ name: "", description: "" });
      fetchServices();
    } catch (error) {
      console.error("Error saving service: ", error);
      showToast("Failed to save service", "error");
    }
  };

  // Delete service
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "services", id));
      showToast("Service deleted successfully");
      fetchServices();
    } catch (error) {
      console.error("Error deleting service: ", error);
      showToast("Failed to delete service", "error");
    } finally {
      setShowDeleteModal(false);
    }
  };

  // Confirm delete
  const confirmDelete = (service) => {
    setServiceToDelete(service);
    setShowDeleteModal(true);
  };

  // Cancel delete
  const cancelDelete = () => {
    setShowDeleteModal(false);
    setServiceToDelete(null);
  };

  // Load services on page load if logged in
  useEffect(() => {
    if (isLoggedIn) {
      fetchServices();
    }
  }, [isLoggedIn]);

  // Login form if not authenticated
  if (!isLoggedIn) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Login</h1>
              <p className="text-gray-600">Enter admin key to access service management</p>
            </div>
            
            <form onSubmit={handleLogin}>
              <div className="mb-5">
                <div className="relative">
                  <input
                    type="password"
                    id="adminKey"
                    placeholder=" "
                    value={loginKey}
                    onChange={(e) => setLoginKey(e.target.value)}
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  />
                  <label
                    htmlFor="adminKey"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                  >
                    Admin Key
                  </label>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg"
              >
                Login
              </button>
            </form>
            
            {/* Toast Notification */}
            {toast.show && (
              <div className={`fixed top-4 right-4 z-50 px-4 py-2 rounded-lg shadow-lg text-white font-medium transition-all duration-300 ${toast.type === "error" ? "bg-red-600" : "bg-green-600"}`}>
                {toast.message}
              </div>
            )}
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Main admin panel
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Service Management</h1>
                <p className="text-gray-600">Add, edit, and manage your services</p>
              </div>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors text-sm font-medium"
              >
                Logout
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-lg p-6 text-white">
              <div className="flex items-center">
                <div className="mr-4 bg-white bg-opacity-20 p-3 rounded-full">
                  <FaBolt className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm opacity-80">Total Services</p>
                  <p className="text-3xl font-bold">{services.length}</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg shadow-lg p-6 text-white">
              <div className="flex items-center">
                <div className="mr-4 bg-white bg-opacity-20 p-3 rounded-full">
                  <FaCheck className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm opacity-80">Active Services</p>
                  <p className="text-3xl font-bold">{services.length}</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg shadow-lg p-6 text-white">
              <div className="flex items-center">
                <div className="mr-4 bg-white bg-opacity-20 p-3 rounded-full">
                  <FaClock className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm opacity-80">Last Updated</p>
                  <p className="text-lg font-bold">{new Date().toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Add/Edit Form */}
            <div className="w-full lg:w-2/5">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
                <h2 className="text-xl font-bold mb-6 text-gray-800 border-b pb-2">
                  {editId ? "Edit Service" : "Add New Service"}
                </h2>

                <form onSubmit={handleSubmit}>
                  <div className="mb-5">
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        placeholder=" "
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      />
                      <label
                        htmlFor="name"
                        className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                      >
                        Service Name
                      </label>
                    </div>
                  </div>

                  <div className="mb-5">
                    <div className="relative">
                      <textarea
                        id="description"
                        placeholder=" "
                        rows="4"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      ></textarea>
                      <label
                        htmlFor="description"
                        className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                      >
                        Description
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg"
                  >
                    {editId ? "Update Service" : "Add Service"}
                  </button>

                  {editId && (
                    <button
                      type="button"
                      onClick={() => {
                        setEditId(null);
                        setFormData({ name: "", description: "" });
                      }}
                      className="w-full mt-3 bg-gray-200 text-gray-800 font-semibold py-3 rounded-lg hover:bg-gray-300 transition-all"
                    >
                      Cancel Edit
                    </button>
                  )}
                </form>
              </div>
            </div>

            {/* Services List */}
            <div className="w-full lg:w-3/5">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-800">Services List</h2>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {services.length} services
                  </span>
                </div>

                {loading ? (
                  <div className="flex justify-center items-center py-10">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                  </div>
                ) : services.length > 0 ? (
                  <div className="space-y-4">
                    {services.map((service) => (
                      <div
                        key={service.id}
                        className="p-5 border rounded-xl bg-white hover:shadow-md transition-all duration-300 group"
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg text-gray-800 group-hover:text-blue-600 transition-colors">
                              {service.name}
                            </h3>
                            <p className="text-gray-600 mt-2">{service.description}</p>
                          </div>
                          <div className="flex space-x-2 ml-4">
                            <button
                              onClick={() => {
                                setFormData({ name: service.name, description: service.description });
                                setEditId(service.id);
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                              }}
                              className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm font-medium flex items-center"
                              title="Edit service"
                            >
                              <FaEdit className="mr-1" /> Edit
                            </button>
                            <button
                              onClick={() => confirmDelete(service)}
                              className="px-3 py-1.5 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors text-sm font-medium flex items-center"
                              title="Delete service"
                            >
                              <FaTrash className="mr-1" /> Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-10">
                    <FaFrown className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-2 text-sm font-medium text-gray-900">No services</h3>
                    <p className="mt-1 text-sm text-gray-500">Get started by creating a new service.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Delete Confirmation Modal */}
        {showDeleteModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Confirm Delete</h3>
              <p className="text-gray-600 mb-6">
                Are you sure you want to delete the service "{serviceToDelete?.name}"? This action cannot be undone.
              </p>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={cancelDelete}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDelete(serviceToDelete.id)}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center"
                >
                  <FaTrash className="mr-1" /> Delete
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Toast Notification */}
        {toast.show && (
          <div className={`fixed top-4 right-4 z-50 px-4 py-2 rounded-lg shadow-lg text-white font-medium transition-all duration-300 ${toast.type === "error" ? "bg-red-600" : "bg-green-600"}`}>
            {toast.message}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default AdminServices;