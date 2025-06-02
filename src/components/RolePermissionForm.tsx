
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

const RolePermissionForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

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
    <div className="bg-white p-6">
      <div className="mb-6">
        <nav className="text-sm text-gray-600">
          <span>Roles & Permissions</span>
          <span className="mx-2">/</span>
          <span>Add New Role</span>
        </nav>
        <h1 className="text-2xl font-bold mt-2">Roles & Permissions</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
          <Input
            placeholder="Add Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email ID</label>
          <Input
            placeholder="Add Email Id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full"
          />
        </div>
      </div>

      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
        <Select value={role} onValueChange={setRole}>
          <SelectTrigger className="w-full md:w-64">
            <SelectValue placeholder="Sub Admin" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sub-admin">Sub Admin</SelectItem>
            <SelectItem value="content-manager">Content Manager</SelectItem>
            <SelectItem value="executive">Executive</SelectItem>
            <SelectItem value="marketing">Marketing</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Access Permissions:</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-300">
                <th className="border border-gray-400 px-4 py-3 text-left font-medium">Modules</th>
                {permissions.map((permission) => (
                  <th key={permission} className="border border-gray-400 px-4 py-3 text-center font-medium">
                    {permission}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {modules.map((module, moduleIndex) => (
                <tr key={moduleIndex} className="border-b">
                  <td className="border border-gray-400 px-4 py-3 font-medium">
                    <div className="flex items-center space-x-2">
                      <Checkbox />
                      <span>{module}</span>
                    </div>
                  </td>
                  {permissions.map((permission, permIndex) => (
                    <td key={permIndex} className="border border-gray-400 px-4 py-3 text-center">
                      <Checkbox />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <Button variant="outline" className="px-8 py-2">
          Cancel
        </Button>
        <Button className="bg-gray-600 hover:bg-gray-700 px-8 py-2">
          Save
        </Button>
      </div>
    </div>
  );
};

export default RolePermissionForm;
