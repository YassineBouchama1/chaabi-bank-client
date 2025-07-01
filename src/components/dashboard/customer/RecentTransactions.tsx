import React from 'react';

export const RecentTransactions: React.FC = () => {
    const transactions = [
        { id: 1, description: 'Grocery Store', amount: -85.32, date: '2024-01-15' },
        { id: 2, description: 'Salary Deposit', amount: 3500.00, date: '2024-01-14' },
        { id: 3, description: 'Electric Bill', amount: -120.45, date: '2024-01-13' },
        { id: 4, description: 'Online Transfer', amount: -500.00, date: '2024-01-12' },
    ];

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Transactions</h3>
            <div className="space-y-3">
                {transactions.map((transaction) => (
                    <div key={transaction.id} className="flex justify-between items-center py-2 border-b border-gray-100">
                        <div>
                            <p className="font-medium text-gray-900">{transaction.description}</p>
                            <p className="text-sm text-gray-600">{transaction.date}</p>
                        </div>
                        <span className={`font-semibold ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                            }`}>
                            {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                        </span>
                    </div>
                ))}
            </div>
            <button className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium">
                View All Transactions
            </button>
        </div>
    );
};
