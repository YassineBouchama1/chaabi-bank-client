import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export const Home: React.FC = () => {
    const { isAuthenticated } = useAuth();

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="max-w-4xl mx-auto px-4 py-16 text-center">
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                    Welcome to Chaabi Bank
                </h1>
                <p className="text-xl text-gray-600 mb-12">
                    Your trusted banking partner for all your financial needs
                </p>
                <div className="space-y-4">
                    {isAuthenticated ? (
                        <Link
                            to="/dashboard"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-200 transform hover:scale-105"
                        >
                            Go to Dashboard
                        </Link>
                    ) : (
                        <Link
                            to="/login"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-200 transform hover:scale-105"
                        >
                            Login to Your Account
                        </Link>
                    )}
                </div>
     
            </div>
        </div>
    );
};
