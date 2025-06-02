
import React from 'react';
import { Heart } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex flex-col items-center text-white">
      <div className="flex items-center mb-4">
        <div className="bg-white rounded-lg p-3 mr-4">
          <Heart className="w-12 h-12 text-red-500 fill-red-500" />
        </div>
        <div>
          <h1 className="text-6xl font-bold tracking-wider">ESC</h1>
        </div>
      </div>
      <div className="text-2xl font-light tracking-widest">
        ADMIN
      </div>
    </div>
  );
};

export default Logo;
