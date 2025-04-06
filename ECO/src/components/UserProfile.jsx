import React from 'react';

export default function UserProfile() {
  return (
    <div className="flex-1 flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          User Profile
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Welcome to your dashboard!
        </p>
      </div>
    </div>
  );
}