import React from 'react';

export const SystemOverview: React.FC = () => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">System Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h4 className="font-medium text-gray-900 mb-2">Server Status</h4>
                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">API Server</span>
                            <span className="text-sm text-green-600">Online</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Database</span>
                            <span className="text-sm text-green-600">Online</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Payment Gateway</span>
                            <span className="text-sm text-green-600">Online</span>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className="font-medium text-gray-900 mb-2">Recent Activity</h4>
                    <div className="space-y-2">
                        <div className="text-sm text-gray-600">User registration: +23 today</div>
                        <div className="text-sm text-gray-600">Transactions: +456 today</div>
                        <div className="text-sm text-gray-600">Support tickets: 2 open</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
