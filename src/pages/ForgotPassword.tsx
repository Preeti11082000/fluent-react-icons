
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ESCLogo from '@/components/ESCLogo';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Password reset requested for:', email);
  };

  return (
    <div className="min-h-screen font-mulish" style={{ background: '#EFCFD3' }}>
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
          <ESCLogo />
          
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span className="text-lg font-medium">Forgot Password?</span>
            </Link>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <Input
                type="email"
                placeholder=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 text-base border-gray-200 bg-gray-50 focus:border-red-500 focus:ring-red-500"
                required
              />
            </div>
            
            <Button
              type="submit"
              className="w-full h-12 bg-red-600 hover:bg-red-700 text-white font-medium text-base transition-colors duration-200 rounded-lg"
            >
              Send Password Reset Link
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
