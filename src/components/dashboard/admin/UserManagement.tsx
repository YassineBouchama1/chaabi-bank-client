import React from 'react';

export const UserManagement: React.FC = () => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">User Management</h3>
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto">
                    <thead>
                        <tr className="bg-gray-50">
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">Name</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">Email</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">Role</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">Status</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        <tr>
                            <td className="px-4 py-2 text-sm text-gray-900">John Doe</td>
                            <td className="px-4 py-2 text-sm text-gray-600">john@example.com</td>
                            <td className="px-4 py-2 text-sm text-gray-600">Customer</td>
                            <td className="px-4 py-2">
                                <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                                    Active
                                </span>
                            </td>
                            <td className="px-4 py-2">
                                <button className="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
