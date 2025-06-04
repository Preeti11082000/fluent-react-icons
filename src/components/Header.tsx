
import React from 'react';
import { User, LogOut, Menu } from 'lucide-react';

interface HeaderProps {
  onMenuClick?: () => void;
  sidebarOpen?: boolean;
  setSidebarOpen?: (open: boolean) => void;
}

const Header = ({ onMenuClick, sidebarOpen, setSidebarOpen }: HeaderProps) => {
  const handleMenuClick = () => {
    if (setSidebarOpen) {
      setSidebarOpen(!sidebarOpen);
    }
    if (onMenuClick) {
      onMenuClick();
    }
  };

  return (
    <header className="bg-[#DC2626] text-white px-6 py-4 flex-shrink-0 font-mulish">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <button
            onClick={handleMenuClick}
            className="lg:hidden text-white hover:text-gray-300 transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold">ESC- Admin</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-300 transition-colors">
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
