import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

export default function ProfileDashboard() {
  const { currentUser } = useAuth();

  return (
    <div className="flex-1 flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Welcome, {currentUser ? currentUser.email : 'User'}!
        </h2>
        <div className="mt-4 text-center text-sm text-gray-600">
          <p>Your profile information:</p>
          <p>Email: {currentUser ? currentUser.email : 'N/A'}</p>
          {/* Additional user details can be displayed here */}
        </div>
        <div className="mt-6">
          <button className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}