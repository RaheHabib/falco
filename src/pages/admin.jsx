import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase'; // path may vary

const AdminServices = () => {
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const servicesCollection = collection(db, 'services');

  const fetchServices = async () => {
    try {
      setLoading(true);
      console.log('Fetching services...');
      
      const snapshot = await getDocs(servicesCollection);
      console.log('Snapshot received:', snapshot.size, 'documents');
      
      const list = snapshot.docs.map((doc) => {
        console.log('Document:', doc.id, doc.data());
        return { id: doc.id, ...doc.data() };
      });
      
      console.log('Services list:', list);
      setServices(list);
      setError('');
    } catch (err) {
      console.error('Error fetching services:', err);
      setError(`Failed to fetch services: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleAddService = async (e) => {
    e.preventDefault();
    
    if (!newService.trim()) {
      setError('Service name required');
      return;
    }

    try {
      setIsSubmitting(true);
      setError('');
      
      console.log('Adding service:', newService.trim());
      
      // Add the document
      const docRef = await addDoc(servicesCollection, { 
        name: newService.trim(),
        createdAt: new Date().toISOString()
      });
      
      console.log('Service added with ID:', docRef.id);
      
      // Clear the input
      setNewService('');
      
      // Refresh the list
      await fetchServices();
      
    } catch (err) {
      console.error('Add error:', err);
      setError(`Failed to add service: ${err.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRemoveService = async (id) => {
    try {
      console.log('Removing service with ID:', id);
      await deleteDoc(doc(db, 'services', id));
      console.log('Service removed successfully');
      await fetchServices();
      setError('');
    } catch (err) {
      console.error('Remove error:', err);
      setError(`Failed to remove service: ${err.message}`);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Manage Services</h2>
      
      <form onSubmit={handleAddService} className="flex gap-2 mb-4">
        <input
          type="text"
          value={newService}
          onChange={(e) => setNewService(e.target.value)}
          placeholder="New Service"
          className="border border-gray-300 p-2 rounded flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isSubmitting}
        />
        <button 
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Adding...' : 'Add'}
        </button>
      </form>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {loading ? (
        <div className="text-center py-4">
          <p className="text-gray-600">Loading services...</p>
        </div>
      ) : (
        <>
          <div className="mb-4">
            <p className="text-sm text-gray-600">
              Total services: {services.length}
            </p>
          </div>
          
          <ul className="space-y-2">
            {services.length === 0 ? (
              <li className="text-gray-500 text-center py-4">
                No services found. Add your first service above.
              </li>
            ) : (
              services.map((s) => (
                <li key={s.id} className="flex justify-between items-center bg-gray-100 p-3 rounded">
                  <span className="flex-1">{s.name}</span>
                  <button
                    onClick={() => handleRemoveService(s.id)}
                    className="text-red-500 text-sm hover:text-red-700 px-2 py-1 rounded hover:bg-red-100"
                  >
                    Remove
                  </button>
                </li>
              ))
            )}
          </ul>
        </>
      )}

      {/* Debug info - remove in production */}
      <div className="mt-8 p-4 bg-gray-50 rounded text-xs">
        <h3 className="font-semibold mb-2">Debug Info:</h3>
        <p>Services count: {services.length}</p>
        <p>Loading: {loading.toString()}</p>
        <p>Submitting: {isSubmitting.toString()}</p>
        <p>Current input: "{newService}"</p>
      </div>
    </div>
  );
};

export default AdminServices;