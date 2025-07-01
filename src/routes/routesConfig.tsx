import type { RouteObject } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Dashboard } from '../pages/Dashboard';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { PublicRoute } from '../components/PublicRoute';

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


// Protected routes that require authentication
// These routes will be wrapped in the ProtectedRoute component to ensure the user is authenticated before accessing
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
        path: '/profile',
        element: (
            <ProtectedRoute>
                <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-lg shadow-md text-center">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Profile Page</h2>
                        <p className="text-gray-600">Coming Soon</p>
                    </div>
                </div>
            </ProtectedRoute>
        ),
    },
    {
        path: '/transactions',
        element: (
            <ProtectedRoute>
                <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-lg shadow-md text-center">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Transactions Page</h2>
                        <p className="text-gray-600">Coming Soon</p>
                    </div>
                </div>
            </ProtectedRoute>
        ),
    },
];

export const allRoutes: RouteObject[] = [
    ...publicRoutes,
    ...protectedRoutes,
];
