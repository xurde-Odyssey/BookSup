import React from 'react';
import { cn } from '@/lib/utils';

const customers = [
    {
        name: 'Apex Corp',
        category: 'Enterprise',
        revenue: '$24,400.00',
        lastTransaction: 'Oct 24, 2023',
        status: 'ACTIVE',
        initials: 'AC',
        initialsBg: 'bg-blue-100',
        initialsColor: 'text-blue-700'
    },
    {
        name: 'ByteSize Ltd',
        category: 'Small Business',
        revenue: '$18,200.00',
        lastTransaction: 'Oct 22, 2023',
        status: 'ACTIVE',
        initials: 'BL',
        initialsBg: 'bg-purple-100',
        initialsColor: 'text-purple-700'
    },
    {
        name: 'Cloud Nine',
        category: 'Startup',
        revenue: '$12,400.00',
        lastTransaction: 'Oct 20, 2023',
        status: 'INACTIVE',
        initials: 'CN',
        initialsBg: 'bg-zinc-100',
        initialsColor: 'text-zinc-700'
    },
    {
        name: 'Data Drift',
        category: 'Enterprise',
        revenue: '$9,800.00',
        lastTransaction: 'Oct 18, 2023',
        status: 'ACTIVE',
        initials: 'DD',
        initialsBg: 'bg-orange-100',
        initialsColor: 'text-orange-700'
    },
    {
        name: 'Echo Wave',
        category: 'Small Business',
        revenue: '$7,200.00',
        lastTransaction: 'Oct 15, 2023',
        status: 'ACTIVE',
        initials: 'EW',
        initialsBg: 'bg-teal-100',
        initialsColor: 'text-teal-700'
    },
];

export function TopCustomersTable() {
    return (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-50 flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900">Top 5 Customers</h3>
                <button className="text-sm font-semibold text-blue-600 hover:text-blue-700">View All Customers</button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-[10px] uppercase tracking-wider text-slate-400 font-bold bg-slate-50/50">
                            <th className="px-6 py-4">Customer Name</th>
                            <th className="px-6 py-4">Category</th>
                            <th className="px-6 py-4">Total Revenue</th>
                            <th className="px-6 py-4">Last Transaction</th>
                            <th className="px-6 py-4">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {customers.map((customer) => (
                            <tr key={customer.name} className="hover:bg-slate-50/50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-bold", customer.initialsBg, customer.initialsColor)}>
                                            {customer.initials}
                                        </div>
                                        <span className="text-sm font-semibold text-slate-900">{customer.name}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-slate-500">{customer.category}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm font-bold text-slate-900">{customer.revenue}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-slate-500">{customer.lastTransaction}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={cn(
                                        "inline-flex items-center px-2 py-1 rounded-md text-[10px] font-bold tracking-wider",
                                        customer.status === 'ACTIVE' ? "bg-green-50 text-green-700" : "bg-slate-100 text-slate-500"
                                    )}>
                                        {customer.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
