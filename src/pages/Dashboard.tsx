import React from 'react';
import { useAuth } from '../contexts/AuthContext';

export const Dashboard: React.FC = () => {
    const { user, logout } = useAuth();

    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-slate-800 text-white shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <h1 className="text-2xl font-bold">Chaabi Bank Dashboard</h1>
                        <div className="flex items-center space-x-4">
                            <span className="text-sm text-gray-300">Welcome, {user?.name}</span>
                            <button
                                onClick={logout}
                                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-sm font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Account Overview</h2>
                    <p className="text-gray-600">Your banking dashboard content goes here.</p>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <h3 className="font-medium text-blue-900">Account Balance</h3>
                            <p className="text-2xl font-bold text-blue-600">$12,345.67</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                            <h3 className="font-medium text-green-900">Recent Transactions</h3>
                            <p className="text-2xl font-bold text-green-600">15</p>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg">
                            <h3 className="font-medium text-purple-900">Savings Goal</h3>
                            <p className="text-2xl font-bold text-purple-600">85%</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
