
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import ESCLogo from '@/components/ESCLogo';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reset password:', { newPassword, confirmPassword });
    // Navigate to success page after form submission
    navigate('/password-reset-success');
  };

  return (
    <div className="min-h-screen font-mulish" style={{ background: '#EFCFD3' }}>
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
          <ESCLogo />
          
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span className="text-lg font-medium">Reset Password</span>
            </Link>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                New Password
              </label>
              <Input
                type="password"
                placeholder="Enter New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="h-12 text-base border-gray-200 bg-gray-50 focus:border-red-500 focus:ring-red-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <Input
                type="password"
                placeholder="Enter Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="h-12 text-base border-gray-200 bg-gray-50 focus:border-red-500 focus:ring-red-500"
                required
              />
            </div>
            
            <Button
              type="submit"
              className="w-full h-12 bg-red-600 hover:bg-red-700 text-white font-medium text-base transition-colors duration-200 rounded-lg"
            >
              Reset Password
            </Button>
            
            <div className="text-center">
              <Link
                to="/"
                className="text-sm text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
              >
                Back to the Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
