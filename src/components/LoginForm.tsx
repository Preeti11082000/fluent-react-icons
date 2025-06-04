
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [touched, setTouched] = useState<{ email?: boolean; password?: boolean }>({});

  const validateField = async (field: string, value: string) => {
    try {
      await validationSchema.validateAt(field, { [field]: value });
      setErrors(prev => ({ ...prev, [field]: undefined }));
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        setErrors(prev => ({ ...prev, [field]: error.message }));
      }
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (touched.email) {
      validateField('email', value);
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    if (touched.password) {
      validateField('password', value);
    }
  };

  const handleEmailBlur = () => {
    setTouched(prev => ({ ...prev, email: true }));
    validateField('email', email);
  };

  const handlePasswordBlur = () => {
    setTouched(prev => ({ ...prev, password: true }));
    validateField('password', password);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await validationSchema.validate({ email, password }, { abortEarly: false });
      console.log('Login attempt:', { email, password, keepSignedIn });
      // Handle login logic here
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const validationErrors: { [key: string]: string } = {};
        error.inner.forEach((err) => {
          if (err.path) {
            validationErrors[err.path] = err.message;
          }
        });
        setErrors(validationErrors);
        setTouched({ email: true, password: true });
      }
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Welcome Back !</h1>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            className={`h-14 text-base bg-gray-50 border-0 focus:border-0 focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-500 ${
              errors.email && touched.email ? 'bg-red-50' : ''
            }`}
            required
          />
          {errors.email && touched.email && (
            <p className="text-sm text-red-600 mt-1">{errors.email}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <div className="relative">
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              onBlur={handlePasswordBlur}
              className={`h-14 text-base bg-gray-50 border-0 focus:border-0 focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-500 pr-12 ${
                errors.password && touched.password ? 'bg-red-50' : ''
              }`}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {errors.password && touched.password && (
            <p className="text-sm text-red-600 mt-1">{errors.password}</p>
          )}
        </div>
        
        <div className="flex items-center space-x-3 pt-2">
          <Checkbox
            id="keep-signed-in"
            checked={keepSignedIn}
            onCheckedChange={(checked) => setKeepSignedIn(checked === true)}
            className="border-gray-400 data-[state=checked]:bg-red-600 data-[state=checked]:border-red-600"
          />
          <label htmlFor="keep-signed-in" className="text-sm text-gray-700 cursor-pointer font-medium">
            Keep me signed in
          </label>
        </div>
        
        <div className="pt-4">
          <Button
            type="submit"
            className="w-full h-14 bg-red-600 hover:bg-red-700 text-white font-medium text-base transition-colors duration-200 rounded-lg"
          >
            Sign in
          </Button>
        </div>
        
        <div className="text-center pt-4">
          <Link
            to="/forgot-password"
            className="text-sm text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
          >
            Forgot Password?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
