import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { DemandForm } from '../../components/forms/DemandForm';

export const CreateDemand: React.FC = () => {
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate('/dashboard');
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center text-orange-600 hover:text-orange-700 mb-4"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Dashboard
          </button>
          <h1 className="text-3xl font-bold text-gray-900">Create New Demand</h1>
          <p className="text-gray-600 mt-2">Fill out the form below to create a new demand request.</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <DemandForm onSuccess={handleSuccess} />
        </div>
      </div>
    </DashboardLayout>
  );
};
