import React from 'react';

export const QuickActions: React.FC = () => {
    const actions = [
        { title: 'Transfer Money', icon: '💸', description: 'Send money to another account' },
        { title: 'Pay Bills', icon: '💳', description: 'Pay your monthly bills' },
        { title: 'Deposit Check', icon: '📄', description: 'Deposit a check via mobile' },
        { title: 'ATM Locator', icon: '🏧', description: 'Find nearby ATMs' },
    ];

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
                {actions.map((action, index) => (
                    <button
                        key={index}
                        className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left"
                    >
                        <div className="text-2xl mb-2">{action.icon}</div>
                        <h4 className="font-medium text-gray-900 mb-1">{action.title}</h4>
                        <p className="text-sm text-gray-600">{action.description}</p>
                    </button>
                ))}
            </div>
        </div>
    );
};
