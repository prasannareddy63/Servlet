import { Routes, Route, Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Navbar from './components/layout/Navbar';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import ProtectedRoute from './components/common/ProtectedRoute';
import CitizenDashboard from './components/dashboard/CitizenDashboard';
import CollectorDashboard from './components/dashboard/CollectorDashboard';
import NewCollectionRequest from './components/collection/NewCollectionRequest';
import CollectionRequestList from './components/collection/CollectionRequestList';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Toaster position="top-right" />
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            
            {/* Protected Routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                {/* Role-based dashboard rendering */}
                {/* 
                 */}
                 <CitizenDashboard />
              </ProtectedRoute>
            } />
            
            <Route path="/collection-requests" element={
              <ProtectedRoute>
                <CollectionRequestList />
              </ProtectedRoute>
            } />
            
            <Route path="/collection-requests/new" element={
              <ProtectedRoute roles={['CITIZEN']}>
                <NewCollectionRequest />
              </ProtectedRoute>
            } />
            
            {/* Home Page */}
            <Route path="/" element={
              <div className="relative bg-green-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                  <div className="text-center">
                    <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                      Smart Waste Management
                    </h1>
                    <p className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl">
                      Schedule waste collection, track pickups, and contribute to a cleaner environment.
                    </p>
                    <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                      <div className="rounded-md shadow">
                        <Link
                          to="/register"
                          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                        >
                          Get Started
                        </Link>
                      </div>
                      <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                        <Link
                          to="/about"
                          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-700 hover:bg-green-800 md:py-4 md:text-lg md:px-10"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            } />
          </Routes>
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;