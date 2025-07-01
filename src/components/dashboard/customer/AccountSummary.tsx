import React from 'react';

export const AccountSummary: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-medium text-blue-900 mb-2">Checking Account</h3>
                <p className="text-3xl font-bold text-blue-600">$12,345.67</p>
                <p className="text-sm text-blue-700 mt-1">Available Balance</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-medium text-green-900 mb-2">Savings Account</h3>
                <p className="text-3xl font-bold text-green-600">$25,890.12</p>
                <p className="text-sm text-green-700 mt-1">+2.1% APY</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-medium text-purple-900 mb-2">Credit Card</h3>
                <p className="text-3xl font-bold text-purple-600">$1,234.56</p>
                <p className="text-sm text-purple-700 mt-1">Available Credit: $8,765.44</p>
            </div>
        </div>
    );
};
