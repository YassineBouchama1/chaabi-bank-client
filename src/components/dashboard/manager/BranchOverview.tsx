import React from 'react';

export const BranchOverview: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-medium text-blue-900 mb-2">Branch Customers</h3>
                <p className="text-3xl font-bold text-blue-600">245</p>
                <p className="text-sm text-blue-700 mt-1">Active accounts</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-medium text-green-900 mb-2">Daily Transactions</h3>
                <p className="text-3xl font-bold text-green-600">89</p>
                <p className="text-sm text-green-700 mt-1">Today's volume</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-medium text-purple-900 mb-2">Team Members</h3>
                <p className="text-3xl font-bold text-purple-600">8</p>
                <p className="text-sm text-purple-700 mt-1">Active staff</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="font-medium text-orange-900 mb-2">Customer Satisfaction</h3>
                <p className="text-3xl font-bold text-orange-600">4.8</p>
                <p className="text-sm text-orange-700 mt-1">Average rating</p>
            </div>
        </div>
    );
};
