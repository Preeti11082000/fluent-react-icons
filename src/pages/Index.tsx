
import React from 'react';
import Logo from '@/components/Logo';
import LoginForm from '@/components/LoginForm';

const Index = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Sidebar */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-gray-400 to-gray-500 items-center justify-center p-12">
        <Logo />
      </div>
      
      {/* Right Content Area */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden mb-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-gray-100 rounded-lg p-2 mr-3">
                <div className="w-8 h-8 bg-red-500 rounded"></div>
              </div>
              <h1 className="text-3xl font-bold text-gray-900">ESC ADMIN</h1>
            </div>
          </div>
          
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Index;
