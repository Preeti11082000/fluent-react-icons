
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  Bell, 
  Image, 
  BarChart3,
  Activity,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: FileText, label: 'Content Management', path: '/content' },
    { icon: Users, label: 'Roles & Permissions', path: '/roles' },
    { icon: Bell, label: 'Notification Management', path: '/notifications' },
    { icon: Image, label: 'Banner Management', path: '/banners' },
    { icon: BarChart3, label: 'Reports and Analytics', path: '/reports' },
    { icon: Activity, label: 'Activity Log', path: '/activity' },
  ];

  const isActiveRoute = (path: string) => {
    return location.pathname === path || 
           (path === '/roles' && location.pathname.startsWith('/roles'));
  };

  return (
    <div className={`bg-white ${isCollapsed ? 'w-16' : 'w-64'} min-h-screen border-r border-gray-200 transition-all duration-300 font-mulish`}>
      {/* Header */}
      <div className="bg-red-600 text-white p-4 relative">
        {!isCollapsed && (
          <div className="flex items-center space-x-2">
            <div className="bg-white rounded p-1">
              <div className="w-6 h-6 bg-red-500 rounded"></div>
            </div>
            <span className="font-bold text-lg">ESC- Admin</span>
          </div>
        )}
        {isCollapsed && (
          <div className="flex justify-center">
            <div className="bg-white rounded p-1">
              <div className="w-6 h-6 bg-red-500 rounded"></div>
            </div>
          </div>
        )}
        
        {/* Toggle Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-1/2 transform -translate-y-1/2 bg-white border border-gray-200 rounded-full p-1 shadow-md hover:shadow-lg transition-shadow"
        >
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4 text-gray-600" />
          ) : (
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="mt-4">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`flex items-center space-x-3 px-4 py-3 text-sm font-medium transition-colors duration-200 group ${
              isActiveRoute(item.path)
                ? 'bg-red-600 text-white' 
                : 'text-gray-700 hover:bg-gray-100'
            } ${isCollapsed ? 'justify-center' : ''}`}
            title={isCollapsed ? item.label : ''}
          >
            <div className="flex items-center justify-center w-6 h-6">
              <item.icon size={20} />
            </div>
            {!isCollapsed && <span>{item.label}</span>}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
