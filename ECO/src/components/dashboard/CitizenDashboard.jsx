import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CitizenDashboard() {
  const [stats, setStats] = useState({
    totalRequests: 0,
    pendingRequests: 0,
    completedRequests: 0,
    points: 0
  });

  useEffect(() => {
    // TODO: Fetch citizen stats from backend
    // This is mock data for now
    setStats({
      totalRequests: 15,
      pendingRequests: 2,
      completedRequests: 13,
      points: 130
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Citizen Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900">Total Requests</h3>
          <p className="text-3xl font-bold text-green-600">{stats.totalRequests}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900">Pending</h3>
          <p className="text-3xl font-bold text-yellow-600">{stats.pendingRequests}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900">Completed</h3>
          <p className="text-3xl font-bold text-blue-600">{stats.completedRequests}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900">Eco Points</h3>
          <p className="text-3xl font-bold text-green-600">{stats.points}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="space-y-4">
            <Link
              to="/collection-requests/new"
              className="block w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-center"
            >
              Schedule New Collection
            </Link>
            <Link
              to="/awareness"
              className="block w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-center"
            >
              View Waste Guidelines
            </Link>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {/* Mock data - replace with real data */}
            <div className="border-b pb-2">
              <p className="text-sm text-gray-600">Yesterday</p>
              <p className="text-gray-900">Recyclable waste collection completed</p>
            </div>
            <div className="border-b pb-2">
              <p className="text-sm text-gray-600">3 days ago</p>
              <p className="text-gray-900">Earned 20 eco points</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
