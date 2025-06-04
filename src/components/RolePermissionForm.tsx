
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

const RolePermissionForm = () => {
  const [roleName, setRoleName] = useState('Sub Admin');

  const modules = [
    'Dashboard',
    'Content Management', 
    'Banner Management',
    'Notification Management',
    'Roles and Permissions',
    'Reports & Analytics'
  ];

  const permissions = ['View List', 'Edit', 'Add', 'Delete', 'Active/Blocked'];

  return (
    <div className="bg-white p-8 m-6 rounded-lg font-mulish">
      <div className="mb-8">
        <nav className="text-sm text-gray-600 mb-4">
          <span>Roles & Permissions</span>
          <span className="mx-2">/</span>
          <span>Add New Role</span>
        </nav>
        <h1 className="text-2xl font-bold text-gray-800">Roles & Permissions</h1>
      </div>

      <div className="mb-8">
        <label className="block text-lg font-medium text-gray-800 mb-4">Role Name</label>
        <Input
          value={roleName}
          onChange={(e) => setRoleName(e.target.value)}
          className="w-96 h-12 text-base border border-gray-300 rounded-md px-4 bg-white focus:border-gray-400 focus:ring-0"
        />
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-medium text-gray-800 mb-6">Access Permissions:</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-300">
                <th className="border border-gray-400 px-6 py-4 text-left font-medium text-gray-800 w-64">
                  Modules
                </th>
                {permissions.map((permission) => (
                  <th key={permission} className="border border-gray-400 px-6 py-4 text-center font-medium text-gray-800 w-32">
                    {permission}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {modules.map((module, moduleIndex) => (
                <tr key={moduleIndex} className="border-b border-gray-400">
                  <td className="border border-gray-400 px-6 py-4 font-medium text-gray-800">
                    <div className="flex items-center space-x-3">
                      <Checkbox className="w-5 h-5" />
                      <span>{module}</span>
                    </div>
                  </td>
                  {permissions.map((permission, permIndex) => (
                    <td key={permIndex} className="border border-gray-400 px-6 py-4 text-center">
                      <div className="flex justify-center">
                        <Checkbox className="w-5 h-5" />
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-end space-x-4 mt-8">
        <Button 
          variant="outline" 
          className="px-8 py-3 text-base border-gray-300 text-gray-700 hover:bg-gray-50 rounded-md"
        >
          Cancel
        </Button>
        <Button 
          className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 text-base rounded-md"
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default RolePermissionForm;
