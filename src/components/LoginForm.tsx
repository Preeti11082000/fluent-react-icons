
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password, keepSignedIn });
    // Handle login logic here
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back !</h1>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 text-base border-gray-300 focus:border-gray-500 focus:ring-gray-500"
            required
          />
        </div>
        
        <div className="relative">
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-12 text-base border-gray-300 focus:border-gray-500 focus:ring-gray-500 pr-12"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox
            id="keep-signed-in"
            checked={keepSignedIn}
            onCheckedChange={(checked) => setKeepSignedIn(checked === true)}
            className="border-gray-300"
          />
          <label htmlFor="keep-signed-in" className="text-sm text-gray-700 cursor-pointer">
            Keep me signed in
          </label>
        </div>
        
        <Button
          type="submit"
          className="w-full h-12 bg-gray-400 hover:bg-gray-500 text-white font-medium text-base transition-colors duration-200"
        >
          Sign In
        </Button>
        
        <div className="text-center">
          <button
            type="button"
            className="text-sm text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
          >
            Forgot Password?
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
