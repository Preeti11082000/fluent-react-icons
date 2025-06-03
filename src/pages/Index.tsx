
import React from 'react';
import ESCLogo from '@/components/ESCLogo';
import LoginForm from '@/components/LoginForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 to-pink-300 flex items-center justify-center p-8">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <ESCLogo />
        <LoginForm />
      </div>
    </div>
  );
};

export default Index;
