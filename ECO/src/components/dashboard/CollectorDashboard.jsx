import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CollectorDashboard() {
  const [stats, setStats] = useState({
    assignedRequests: 0,
    completedToday: 0,
    totalCollected: 0,
    rating: 0
  });

  const [upcomingCollections, setUpcomingCollections] = useState([]);

  useEffect(() => {
    // TODO: Fetch collector stats from backend
    // Mock data for now
    setStats({
      assignedRequests: 8,
      completedToday: 5,
      totalCollected: 156,
      rating: 4.8
    });

    setUpcomingCollections([
      {
        id: 1,
        address: "123 Green Street",
        type: "Recyclable",
        time: "10:00 AM"
      },
      {
        id: 2,
        address: "456 Eco Avenue",
        type: "Organic",
        time: "11:30 AM"
      }
    ]);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Collector Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900">Assigned Requests</h3>
          <p className="text-3xl font-bold text-green-600">{stats.assignedRequests}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900">Completed Today</h3>
          <p className="text-3xl font-bold text-blue-600">{stats.completedToday}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900">Total Collections</h3>
          <p className="text-3xl font-bold text-purple-600">{stats.totalCollected}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900">Rating</h3>
          <p className="text-3xl font-bold text-yellow-600">{stats.rating}/5.0</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Upcoming Collections</h2>
          <div className="space-y-4">
            {upcomingCollections.map(collection => (
              <div key={collection.id} className="border-b pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-gray-900">{collection.address}</p>
                    <p className="text-sm text-gray-600">{collection.type} Waste</p>
                    <p className="text-sm text-gray-600">Scheduled: {collection.time}</p>
                  </div>
                  <button className="bg-green-600 text-white px-4 py-1 rounded text-sm hover:bg-green-700">
                    Start
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Route Map</h2>
          <div className="bg-gray-100 h-64 rounded flex items-center justify-center">
            {/* TODO: Implement Google Maps integration */}
            <p className="text-gray-600">Map view coming soon</p>
          </div>
        </div>
      </div>
    </div>
  );
}
