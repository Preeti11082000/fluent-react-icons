
import React from 'react';
import { Heart } from 'lucide-react';

const ESCLogo = () => {
  return (
    <div className="flex items-center justify-center mb-8">
      <div className="flex items-center space-x-3">
        <div className="relative">
          <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
            <Heart className="w-6 h-6 text-white fill-white" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900">ESC</h1>
      </div>
    </div>
  );
};

export default ESCLogo;
