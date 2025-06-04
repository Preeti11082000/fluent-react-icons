
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import RolePermissionForm from '@/components/RolePermissionForm';

const AddNewRole = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const breadcrumbItems = [
    { label: 'Roles & Permissions', path: '/roles' },
    { label: 'Add New Role' }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 font-mulish">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <div className="p-6">
            <Breadcrumb items={breadcrumbItems} />
            <RolePermissionForm />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AddNewRole;
