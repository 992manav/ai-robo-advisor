import { type ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { TrendingUp, LogOut, LayoutDashboard, Home } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold text-blue-600">
              <TrendingUp className="w-6 h-6" />
              AI Robo Advisor
            </Link>

            {user ? (
              <div className="flex items-center gap-4">
                <Link
                  to="/"
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <Home className="w-4 h-4" />
                  Home
                </Link>
                <Link
                  to="/dashboard"
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <LayoutDashboard className="w-4 h-4" />
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 text-red-600 hover:text-red-700 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link
                  to="/login"
                  className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      <main>{children}</main>

      <footer className="bg-white border-t mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-600 text-sm">
            Disclaimer: This project is for educational purposes only. Not financial advice.
          </p>
        </div>
      </footer>
    </div>
  );
}
