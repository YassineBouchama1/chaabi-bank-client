import React from 'react';

export const AdminStats: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-medium text-blue-900 mb-2">Total Users</h3>
                <p className="text-3xl font-bold text-blue-600">1,234</p>
                <p className="text-sm text-blue-700 mt-1">+12% from last month</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-medium text-green-900 mb-2">Total Transactions</h3>
                <p className="text-3xl font-bold text-green-600">45,678</p>
                <p className="text-sm text-green-700 mt-1">+8% from last month</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-medium text-purple-900 mb-2">System Health</h3>
                <p className="text-3xl font-bold text-purple-600">99.9%</p>
                <p className="text-sm text-purple-700 mt-1">Uptime this month</p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="font-medium text-yellow-900 mb-2">Pending Issues</h3>
                <p className="text-3xl font-bold text-yellow-600">3</p>
                <p className="text-sm text-yellow-700 mt-1">Require attention</p>
            </div>
        </div>
    );
};
