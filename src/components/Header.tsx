
import React from 'react';
import { User, LogOut, Menu } from 'lucide-react';

interface HeaderProps {
  onMenuClick?: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <header className="bg-black text-white px-6 py-4 flex-shrink-0">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden text-white hover:text-gray-300"
          >
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold">ESC- Admin</h1>
        </div>
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
