import React from 'react';

export const TeamManagement: React.FC = () => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Team Management</h3>
            <div className="space-y-4">
                {[
                    { name: 'Alice Johnson', role: 'Senior Teller', status: 'Online', performance: '95%' },
                    { name: 'Bob Smith', role: 'Customer Service', status: 'Break', performance: '88%' },
                    { name: 'Carol Davis', role: 'Loan Officer', status: 'Online', performance: '92%' },
                ].map((member, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                            <p className="font-medium text-gray-900">{member.name}</p>
                            <p className="text-sm text-gray-600">{member.role}</p>
                        </div>
                        <div className="text-right">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${member.status === 'Online' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                }`}>
                                {member.status}
                            </span>
                            <p className="text-sm text-gray-600 mt-1">Performance: {member.performance}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
