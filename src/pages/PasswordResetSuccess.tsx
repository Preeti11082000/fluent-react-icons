
import React from 'react';
import { ArrowLeft, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const PasswordResetSuccess = () => {
  return (
    <div className="min-h-screen font-mulish" style={{ background: '#EFCFD3' }}>
      {/* Left side with logo */}
      <div className="fixed left-0 top-0 w-1/2 h-full flex items-center justify-center">
        <div className="text-center">
          <div className="flex items-center justify-center mb-8">
            <img 
              src="/lovable-uploads/176f353d-5693-4bcd-ba2e-96594b1d5527.png" 
              alt="ESC Logo" 
              className="w-80 h-auto"
            />
          </div>
          <div className="text-white text-6xl font-bold tracking-wider">
            ADMIN
          </div>
        </div>
      </div>

      {/* Right side with success message */}
      <div className="ml-[50%] min-h-screen bg-white flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Header with back arrow */}
          <div className="flex items-center mb-12">
            <Link to="/" className="mr-4">
              <ArrowLeft className="w-6 h-6 text-gray-600" />
            </Link>
            <h1 className="text-2xl font-semibold text-gray-900">Password Reset Successful</h1>
          </div>

          {/* Success content */}
          <div className="text-center">
            {/* Success icon */}
            <div className="flex items-center justify-center mb-8">
              <div className="w-24 h-24 rounded-full border-4 border-green-500 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
                  <Check className="w-8 h-8 text-white" strokeWidth={3} />
                </div>
              </div>
            </div>

            {/* Success message */}
            <p className="text-lg text-gray-700 mb-16">
              Your password has been updated successfully
            </p>

            {/* Back to Login link */}
            <Link 
              to="/" 
              className="text-lg text-gray-900 font-medium hover:text-gray-700 transition-colors duration-200"
            >
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordResetSuccess;
