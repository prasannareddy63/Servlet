import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';

export default function CollectionRequestList() {
  const { user } = useAuth();
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchRequests();
  }, [user]);

  const fetchRequests = async () => {
    try {
      const endpoint = user.role === 'COLLECTOR'
        ? `/api/collection-requests/collector/${user.id}`
        : `/api/collection-requests/user/${user.id}`;

      const response = await fetch(`http://localhost:8080${endpoint}`, {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch requests');
      }

      const data = await response.json();
      setRequests(data);
    } catch (error) {
      setError('Failed to load collection requests');
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (requestId, newStatus) => {
    try {
      const response = await fetch(`http://localhost:8080/api/collection-requests/${requestId}/status`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${user.token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: newStatus })
      });

      if (!response.ok) {
        throw new Error('Failed to update status');
      }

      fetchRequests();
    } catch (error) {
      setError('Failed to update request status');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Collection Requests</h2>
      
      <div className="space-y-6">
        {requests.map(request => (
          <div key={request.id} className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  {request.wasteType} Waste Collection
                </h3>
                <p className="text-gray-600">{request.pickupAddress}</p>
                <p className="text-sm text-gray-500">
                  Scheduled for: {new Date(request.preferredTime).toLocaleString()}
                </p>
                <p className="text-sm text-gray-500">
                  Status: <span className="font-medium">{request.status}</span>
                </p>
                {request.specialInstructions && (
                  <p className="mt-2 text-sm text-gray-600">
                    Note: {request.specialInstructions}
                  </p>
                )}
              </div>
              
              {user.role === 'COLLECTOR' && request.status === 'SCHEDULED' && (
                <div className="space-x-4">
                  <button
                    onClick={() => updateStatus(request.id, 'IN_PROGRESS')}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Start Collection
                  </button>
                  <button
                    onClick={() => updateStatus(request.id, 'COMPLETED')}
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                  >
                    Mark Complete
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}

        {requests.length === 0 && (
          <div className="text-center text-gray-500">
            No collection requests found.
          </div>
        )}
      </div>
    </div>
  );
}
