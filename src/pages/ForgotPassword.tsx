
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Password reset requested for:', email);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 to-pink-300 flex items-center justify-center p-8">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <div className="mb-8">
          <Link to="/">
            <Button variant="outline" size="icon" className="mb-4">
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">FORGOT PASSWORD?</h1>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 text-base border-gray-300 focus:border-red-500 focus:ring-red-500"
              required
            />
          </div>
          
          <Button
            type="submit"
            className="w-full h-12 bg-red-600 hover:bg-red-700 text-white font-medium text-base transition-colors duration-200"
          >
            Send Password Reset Link
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
