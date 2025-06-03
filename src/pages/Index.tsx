
import React from 'react';
import ESCLogo from '@/components/ESCLogo';
import LoginForm from '@/components/LoginForm';

const Index = () => {
  return (
    <div className="min-h-screen font-mulish" style={{ background: '#EFCFD3' }}>
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
          <ESCLogo />
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Index;
