
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  Bell, 
  Image, 
  BarChart3,
  Activity,
  Menu,
  X
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: FileText, label: 'Pocket Guideline Management', path: '/content' },
    { icon: Users, label: 'Roles & Permissions', path: '/roles' },
    { icon: Bell, label: 'Notification Management', path: '/notifications' },
    { icon: Image, label: 'Banner Management', path: '/banners' },
    { icon: BarChart3, label: 'Congress Sessions', path: '/reports' },
    { icon: Activity, label: 'Activity Log', path: '/activity' },
  ];

  const isActiveRoute = (path: string) => {
    return location.pathname === path || 
           (path === '/roles' && location.pathname.startsWith('/roles'));
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full bg-white border-r border-gray-200 transition-all duration-300 z-30 ${
        isOpen ? 'w-64' : 'w-0 overflow-hidden'
      } lg:relative lg:z-auto font-mulish`}>
        
        {/* Sidebar Header */}
        <div className="bg-black text-white p-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-white rounded p-1">
              <div className="w-6 h-6 bg-red-500 rounded"></div>
            </div>
            <span className="font-bold text-lg">ESC- Admin</span>
          </div>
          <button
            onClick={toggleSidebar}
            className="text-white hover:text-gray-300 lg:hidden"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center space-x-3 px-4 py-4 text-sm font-medium transition-colors duration-200 border-b border-gray-100 ${
                isActiveRoute(item.path)
                  ? 'bg-black text-white' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
              onClick={() => {
                if (window.innerWidth < 1024) {
                  setIsOpen(false);
                }
              }}
            >
              <div className="flex items-center justify-center w-6 h-6">
                <item.icon size={20} />
              </div>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Toggle button for desktop */}
      {!isOpen && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-40 bg-black text-white p-2 rounded-md shadow-lg lg:block hidden"
        >
          <Menu className="w-6 h-6" />
        </button>
      )}
    </>
  );
};

export default Sidebar;
