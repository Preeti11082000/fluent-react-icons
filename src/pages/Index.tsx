
import React from 'react';
import ESCLogo from '@/components/ESCLogo';
import LoginForm from '@/components/LoginForm';

const Index = () => {
  return (
    <div className="min-h-screen font-mulish" style={{ background: '#EFCFD3' }}>
      <div className="flex items-center justify-center min-h-screen p-8">
        <div 
          className="bg-white rounded-2xl shadow-lg p-10"
          style={{
            width: '669px',
            height: '672px',
            position: 'absolute',
            top: '106px',
            left: '295px'
          }}
        >
          <ESCLogo />
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Index;
