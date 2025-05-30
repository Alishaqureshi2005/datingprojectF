import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import LoginPage from './Components/LoginPage';
import AdminDashboard from './Components/AdminDashboard';
import SignUpPage from './Components/SignUpPage';
import { useState } from 'react';
import { ContextApiProvider } from './helper/ContextApi';
import EmailVerification from './pages/EmailVerification';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ForgotPassword from './Components/ForgetPassword';
import { ErrorBoundary } from './components/ErrorBoundary';

// Enhanced Error Fallback Component
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Oops! Something went wrong</h2>
        <div className="bg-red-50 p-4 rounded-lg mb-4">
          <p className="text-gray-800 font-medium mb-2">Error Details:</p>
          <p className="text-gray-600 text-sm">{error.message}</p>
        </div>
        <div className="flex flex-col space-y-3">
          <button
            onClick={resetErrorBoundary}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Try again
          </button>
          <button
            onClick={() => window.location.href = '/'}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
}

// Error boundary handler
const errorHandler = (error, errorInfo) => {
  console.error('Error caught by boundary:', error);
  console.error('Error info:', errorInfo);
};

function App() {
  // State to control the visibility of Login and Sign Up links
  const [showAuthLinks, setShowAuthLinks] = useState(true);

  // Toggle visibility function
  const toggleAuthLinks = () => {
    setShowAuthLinks(!showAuthLinks);
  };

  return (
    <ErrorBoundary 
      FallbackComponent={ErrorFallback}
      onError={errorHandler}
      onReset={() => {
        // Reset the state here
        window.location.reload();
      }}
    >
      <Router>
        <div className="App">
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          {/* Main Content */}
          <main className="container max-w-full mx-auto">
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/forgetpasword" element={<ForgotPassword />} />
              <Route 
                path="/verify-email" 
                element={
                  <ContextApiProvider>
                    <EmailVerification />
                  </ContextApiProvider>
                } 
              />

              {/* Protected routes wrapped with ContextApiProvider */}
              <Route
                path="/dashboard/*"
                element={
                  <ContextApiProvider>
                    <Dashboard />
                  </ContextApiProvider>
                }
              />
              <Route
                path="/admin-dashboard/*"
                element={
                  <ContextApiProvider>
                    <AdminDashboard />
                  </ContextApiProvider>
                }
              />
            </Routes>
          </main>

          {/* Footer */}
          <footer className="fixed-footer ">
            <nav className="footer-nav ">
              {/* Dashboard Link */}
              <div className="flex gap-4 ">
                {showAuthLinks && (
                  <>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? 'active-link' : 'inactive-link'
                      }
                    >
                      Login
                    </NavLink>
                    <NavLink
                      to="/signup"
                      className={({ isActive }) =>
                        isActive ? 'active-link' : 'inactive-link'
                      }
                    >
                      Sign Up
                    </NavLink>
                    <NavLink
                      to="/dashboard"
                      className={({ isActive }) =>
                        isActive ? 'active-link' : 'inactive-link'
                      }
                    >
                      Dashboard
                    </NavLink>
                    <NavLink
                      to="/admin-dashboard"
                      className={({ isActive }) =>
                        isActive ? 'active-link' : 'inactive-link'
                      }
                    >
                      Admin Dashboard
                    </NavLink>
                  </>
                )}
              </div>

              {/* Toggle Button */}
              <button onClick={toggleAuthLinks} className="button text-white mt-4">
                {showAuthLinks ? 'Hide Auth Links' : 'Show Auth Links'}
              </button>
            </nav>
          </footer>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
