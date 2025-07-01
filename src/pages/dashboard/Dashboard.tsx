import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { AdminDashboard } from '../../components/dashboard/admin/AdminDashboard';
import { CustomerDashboard } from '../../components/dashboard/customer/CustomerDashboard';
import { ManagerDashboard } from '../../components/dashboard/manager/ManagerDashboard';
import { DashboardLayout } from '../../components/layout/DashboardLayout';

export const Dashboard: React.FC = () => {
    const { user } = useAuth();

    const renderDashboardContent = () => {
        switch (user?.role) {
            case 'admin':
                return <AdminDashboard />;
            case 'manager':
                return <ManagerDashboard />;
            case 'customer':
                return <CustomerDashboard />;
            default:
                return <CustomerDashboard />;
        }
    };

    return (
        <DashboardLayout>
            {renderDashboardContent()}
        </DashboardLayout>
    );
};
