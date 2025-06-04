
import React from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import RolePermissionForm from '@/components/RolePermissionForm';

const AddNewRole = () => {
  return (
    <div className="flex h-screen bg-gray-50 font-mulish">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <RolePermissionForm />
        </main>
      </div>
    </div>
  );
};

export default AddNewRole;
