import React from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { BranchOverview } from './BranchOverview';
import { TeamManagement } from './TeamManagement';
import { PerformanceMetrics } from './PerformanceMetrics';

export const ManagerDashboard: React.FC = () => {
    const { user } = useAuth();

    return (
        <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Manager Dashboard - {user?.name}
                </h2>
                <p className="text-gray-600">Manage your branch operations and team performance.</p>
            </div>

            <BranchOverview />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <TeamManagement />
                <PerformanceMetrics />
            </div>
        </div>
    );
};
