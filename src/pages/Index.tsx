
import React from 'react';
import Logo from '@/components/Logo';
import LoginForm from '@/components/LoginForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 to-pink-300 flex items-center justify-center p-8">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-red-600 rounded-full p-3 mr-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-5 h-5 bg-red-600 rounded-full"></div>
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">ESC</h1>
          </div>
        </div>
        
        <LoginForm />
      </div>
    </div>
  );
};

export default Index;
