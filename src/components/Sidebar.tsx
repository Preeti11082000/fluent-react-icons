
import React from 'react';
import { 
  LayoutDashboard, 
  Book, 
  Users, 
  Bell, 
  BookOpen, 
  Activity 
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard', active: false },
    { icon: Book, label: 'Content Management', path: '/content', active: false },
    { icon: Users, label: 'Roles & Permissions', path: '/roles', active: true },
    { icon: Bell, label: 'Notification Management', path: '/notifications', active: false },
    { icon: BookOpen, label: 'Banner Management', path: '/banners', active: false },
    { icon: Activity, label: 'Reports and Analytics', path: '/reports', active: false },
    { icon: Activity, label: 'Activity Log', path: '/activity', active: false },
  ];

  return (
    <div className="bg-white w-64 min-h-screen border-r border-gray-200">
      {/* Header */}
      <div className="bg-black text-white p-4">
        <div className="flex items-center space-x-2">
          <div className="bg-white rounded p-1">
            <div className="w-6 h-6 bg-red-500 rounded"></div>
          </div>
          <span className="font-bold text-lg">ESC- Admin</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="mt-4">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.path}
            className={`flex items-center space-x-3 px-4 py-3 text-sm font-medium transition-colors duration-200 ${
              item.active 
                ? 'bg-black text-white' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center justify-center w-6 h-6">
              <item.icon size={20} />
            </div>
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
