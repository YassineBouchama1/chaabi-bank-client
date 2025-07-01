import type { RouteObject } from 'react-router-dom';
import { Home } from '../pages/public/Home';
import { Login } from '../pages/auth/Login';
import { Dashboard } from '../pages/dashboard/Dashboard';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { PublicRoute } from '../components/PublicRoute';
import { RoleGuard } from '../components/common/RoleGuard';

export const publicRoutes: RouteObject[] = [
    {
        path: '/',
        element: (
            <PublicRoute>
                <Home />
            </PublicRoute>
        ),
    },
    {
        path: '/login',
        element: (
            <PublicRoute restricted>
                <Login />
            </PublicRoute>
        ),
    },
];

export const protectedRoutes: RouteObject[] = [
    {
        path: '/dashboard',
        element: (
            <ProtectedRoute>
                <Dashboard />
            </ProtectedRoute>
        ),
    },
    {
        path: '/admin',
        element: (
            <ProtectedRoute>
                <RoleGuard allowedRoles={['admin']}>
                    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                        <div className="bg-white p-8 rounded-lg shadow-md text-center">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Admin Panel</h2>
                            <p className="text-gray-600">Advanced admin features coming soon</p>
                        </div>
                    </div>
                </RoleGuard>
            </ProtectedRoute>
        ),
    },
    {
        path: '/manager',
        element: (
            <ProtectedRoute>
                <RoleGuard allowedRoles={['admin', 'manager']}>
                    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                        <div className="bg-white p-8 rounded-lg shadow-md text-center">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Manager Tools</h2>
                            <p className="text-gray-600">Manager-specific tools coming soon</p>
                        </div>
                    </div>
                </RoleGuard>
            </ProtectedRoute>
        ),
    },
];

export const allRoutes: RouteObject[] = [
    ...publicRoutes,
    ...protectedRoutes,
];
