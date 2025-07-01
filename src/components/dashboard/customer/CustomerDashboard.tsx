import React from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { AccountSummary } from './AccountSummary';
import { RecentTransactions } from './RecentTransactions';
import { QuickActions } from './QuickActions';

export const CustomerDashboard: React.FC = () => {
    const { user } = useAuth();

    return (
        <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Welcome back, {user?.name}
                </h2>
                <p className="text-gray-600">Here's your account overview.</p>
            </div>

            <AccountSummary />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <RecentTransactions />
                <QuickActions />
            </div>
        </div>
    );
};
