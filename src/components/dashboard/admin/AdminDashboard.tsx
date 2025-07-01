import React from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { AdminStats } from './AdminStats';
import { UserManagement } from './UserManagement';
import { SystemOverview } from './SystemOverview';

export const AdminDashboard: React.FC = () => {
    const { user } = useAuth();

    return (
        <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Admin Dashboard - Welcome {user?.name}
                </h2>
                <p className="text-gray-600">Manage the entire banking system from here.</p>
            </div>

            <AdminStats />
            <UserManagement />
            <SystemOverview />
        </div>
    );
};
