
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft } from 'lucide-react';
import Logo from '@/components/Logo';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reset password:', { newPassword, confirmPassword });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Sidebar */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-gray-400 to-gray-500 items-center justify-center p-12">
        <Logo />
      </div>
      
      {/* Right Content Area */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <Button variant="outline" size="icon" className="mb-4">
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Reset Password</h1>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Enter New Password
              </label>
              <Input
                type="password"
                placeholder="Enter New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="h-12 text-base border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                required
              />
            </div>
            
            <div>
              <Input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="h-12 text-base border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                required
              />
            </div>
            
            <Button
              type="submit"
              className="w-full h-12 bg-gray-400 hover:bg-gray-500 text-white font-medium text-base transition-colors duration-200"
            >
              Submit
            </Button>
            
            <div className="text-center">
              <button
                type="button"
                className="text-sm text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
              >
                Back to the Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
