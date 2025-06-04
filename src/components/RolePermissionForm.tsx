
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

const RolePermissionForm = () => {
  const [roleName, setRoleName] = useState('Sub Admin');
  const [permissions, setPermissions] = useState<Record<string, Record<string, boolean>>>({});

  const modules = [
    'Pocket Guideline Management',
    'Banner Management', 
    'Notification Management',
    'Roles and Permissions',
    'Congress Sessions',
    'Activity Log'
  ];

  const permissionTypes = ['View', 'Edit', 'Add', 'Delete'];

  const handlePermissionChange = (module: string, permission: string, checked: boolean) => {
    setPermissions(prev => ({
      ...prev,
      [module]: {
        ...prev[module],
        [permission]: checked
      }
    }));
  };

  const handleModuleSelectAll = (module: string, checked: boolean) => {
    const modulePermissions: Record<string, boolean> = {};
    permissionTypes.forEach(permission => {
      modulePermissions[permission] = checked;
    });
    
    setPermissions(prev => ({
      ...prev,
      [module]: modulePermissions
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm font-mulish">
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Roles & Permissions</h1>
        </div>

        <div className="mb-8">
          <label className="block text-lg font-medium text-gray-900 mb-4">Role Name</label>
          <Input
            value={roleName}
            onChange={(e) => setRoleName(e.target.value)}
            className="w-full max-w-md h-12 text-base border border-gray-300 rounded-md px-4 bg-white focus:border-gray-400 focus:ring-0"
            placeholder="Enter role name"
          />
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-6">Access Permissions:</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-400">
                  <th className="border border-gray-500 px-6 py-3 text-left font-medium text-gray-900 w-64">
                    Modules
                  </th>
                  {permissionTypes.map((permission) => (
                    <th key={permission} className="border border-gray-500 px-6 py-3 text-center font-medium text-gray-900 w-32">
                      {permission}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {modules.map((module, moduleIndex) => (
                  <tr key={moduleIndex} className="border-b border-gray-400 hover:bg-gray-50">
                    <td className="border border-gray-500 px-6 py-4 font-medium text-gray-900">
                      <div className="flex items-center space-x-3">
                        <Checkbox 
                          className="w-5 h-5"
                          checked={permissionTypes.every(permission => 
                            permissions[module]?.[permission] === true
                          )}
                          onCheckedChange={(checked) => 
                            handleModuleSelectAll(module, checked as boolean)
                          }
                        />
                        <span>{module}</span>
                      </div>
                    </td>
                    {permissionTypes.map((permission, permIndex) => (
                      <td key={permIndex} className="border border-gray-500 px-6 py-4 text-center">
                        <div className="flex justify-center">
                          <Checkbox 
                            className="w-5 h-5"
                            checked={permissions[module]?.[permission] === true}
                            onCheckedChange={(checked) => 
                              handlePermissionChange(module, permission, checked as boolean)
                            }
                          />
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
          <Button 
            variant="outline" 
            className="px-8 py-3 text-base border-gray-300 text-gray-700 hover:bg-gray-50 rounded-md min-w-[120px]"
          >
            Cancel
          </Button>
          <Button 
            className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 text-base rounded-md min-w-[120px]"
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RolePermissionForm;
