
import React from 'react';
import { User, LogOut } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-black text-white px-6 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">ESC- Admin</h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <User className="w-5 h-5" />
            <span className="text-sm">LOGOUT</span>
            <LogOut className="w-5 h-5" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
