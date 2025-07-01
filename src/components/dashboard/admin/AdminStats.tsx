import React from 'react';

export const AdminStats: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                <h3 className="font-medium text-orange-900 mb-2">Total Users</h3>
                <p className="text-3xl font-bold text-orange-600">1,234</p>
                <p className="text-sm text-orange-700 mt-1">+12% from last month</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="font-medium text-green-900 mb-2">Total Transactions</h3>
                <p className="text-3xl font-bold text-green-600">45,678</p>
                <p className="text-sm text-green-700 mt-1">+8% from last month</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                <h3 className="font-medium text-amber-900 mb-2">System Health</h3>
                <p className="text-3xl font-bold text-amber-600">99.9%</p>
                <p className="text-sm text-amber-700 mt-1">Uptime this month</p>
            </div>
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <h3 className="font-medium text-red-900 mb-2">Pending Issues</h3>
                <p className="text-3xl font-bold text-red-600">3</p>
                <p className="text-sm text-red-700 mt-1">Require attention</p>
            </div>
        </div>
    );
};
