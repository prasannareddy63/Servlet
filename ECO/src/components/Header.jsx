import { Menu, X, RecycleIcon } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-green-600 text-white">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <RecycleIcon className="h-8 w-8" />
            <span className="text-2xl font-bold">EcoCollect</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-green-200">Home</Link>
            <a href="#services" className="hover:text-green-200">Services</a>
            <a href="#about" className="hover:text-green-200">About</a>
            <a href="#contact" className="hover:text-green-200">Contact</a>
          </div>

          <div className="hidden md:flex space-x-4">
            {location.pathname !== '/login' && (
              <Link
                to="/login"
                className="px-4 py-2 rounded-lg bg-white text-green-600 hover:bg-green-100"
              >
                Login
              </Link>
            )}
            {location.pathname !== '/register' && (
              <Link
                to="/register"
                className="px-4 py-2 rounded-lg bg-green-700 text-white hover:bg-green-800"
              >
                Register
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link to="/" className="block hover:text-green-200">Home</Link>
            <a href="#services" className="block hover:text-green-200">Services</a>
            <a href="#about" className="block hover:text-green-200">About</a>
            <a href="#contact" className="block hover:text-green-200">Contact</a>
            <div className="space-y-2 pt-4">
              {location.pathname !== '/login' && (
                <Link
                  to="/login"
                  className="block w-full px-4 py-2 rounded-lg bg-white text-green-600 text-center"
                >
                  Login
                </Link>
              )}
              {location.pathname !== '/register' && (
                <Link
                  to="/register"
                  className="block w-full px-4 py-2 rounded-lg bg-green-700 text-white text-center"
                >
                  Register
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}