
import React from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Edit, User, Trash2 } from 'lucide-react';

const RolesList = () => {
  const roles = [
    { id: 1, role: 'SubAdmin', creationDate: '12 Jan 2024', status: 'Active' },
    { id: 2, role: 'Content Manager', creationDate: '12 Jan 2024', status: 'Active' },
    { id: 3, role: 'Executive', creationDate: '12 Jan 2024', status: 'Active' },
    { id: 4, role: 'Marketing', creationDate: '12 Jan 2024', status: 'Active' },
  ];

  return (
    <div className="flex h-screen bg-gray-50 font-mulish">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Roles & Permissions</h1>
          </div>

          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <Button className="bg-gray-600 hover:bg-gray-700">
                  Add New Role
                </Button>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="Search"
                    className="pl-10 w-64"
                  />
                </div>
              </div>
            </div>

            <div className="border-b border-gray-200">
              <div className="flex">
                <button className="px-6 py-3 text-sm font-medium border-b-2 border-gray-900 text-gray-900">
                  Roles
                </button>
                <button className="px-6 py-3 text-sm font-medium text-gray-500 hover:text-gray-700">
                  Sub Admin
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      S.No.
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Role ↕
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Creation Date ↕
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {roles.map((role) => (
                    <tr key={role.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {role.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 underline">
                        {role.role}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {role.creationDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {role.status}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <div className="flex space-x-2">
                          <button className="text-gray-600 hover:text-gray-900">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="text-gray-600 hover:text-gray-900">
                            <User className="w-4 h-4" />
                          </button>
                          <button className="text-red-600 hover:text-red-900">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default RolesList;
