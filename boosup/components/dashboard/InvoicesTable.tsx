import React from 'react';
import { cn } from '@/lib/utils';
import {
    Pencil,
    Printer,
    MoreHorizontal,
    CheckCircle2,
    Clock,
    AlertTriangle
} from 'lucide-react';

const invoices = [
    {
        id: 'INV-2023-001',
        customer: 'Apex Corp',
        amount: '$12,400.00',
        date: 'Oct 24, 2023',
        status: 'PAID',
        initials: 'AC',
        initialsBg: 'bg-blue-100',
        initialsColor: 'text-blue-700'
    },
    {
        id: 'INV-2023-002',
        customer: 'ByteSize Ltd',
        amount: '$8,200.00',
        date: 'Oct 22, 2023',
        status: 'PENDING',
        initials: 'BL',
        initialsBg: 'bg-purple-100',
        initialsColor: 'text-purple-700'
    },
    {
        id: 'INV-2023-003',
        customer: 'Cloud Nine',
        amount: '$4,400.00',
        date: 'Oct 20, 2023',
        status: 'OVERDUE',
        initials: 'CN',
        initialsBg: 'bg-zinc-100',
        initialsColor: 'text-zinc-700'
    },
    {
        id: 'INV-2023-004',
        customer: 'Data Drift',
        amount: '$9,800.00',
        date: 'Oct 18, 2023',
        status: 'PAID',
        initials: 'DD',
        initialsBg: 'bg-orange-100',
        initialsColor: 'text-orange-700'
    },
    {
        id: 'INV-2023-005',
        customer: 'Echo Wave',
        amount: '$7,200.00',
        date: 'Oct 15, 2023',
        status: 'PENDING',
        initials: 'EW',
        initialsBg: 'bg-teal-100',
        initialsColor: 'text-teal-700'
    },
];

const StatusBadge = ({ status }: { status: string }) => {
    switch (status) {
        case 'PAID':
            return (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider bg-green-50 text-green-700 border border-green-100">
                    <CheckCircle2 className="w-3 h-3" />
                    PAID
                </span>
            );
        case 'PENDING':
            return (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider bg-amber-50 text-amber-700 border border-amber-100">
                    <Clock className="w-3 h-3" />
                    PENDING
                </span>
            );
        case 'OVERDUE':
            return (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider bg-red-50 text-red-700 border border-red-100">
                    <AlertTriangle className="w-3 h-3" />
                    OVERDUE
                </span>
            );
        default:
            return (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-wider bg-slate-50 text-slate-600 border border-slate-100">
                    {status}
                </span>
            );
    }
};

export function InvoicesTable() {
    return (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-50 flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-bold text-slate-900">Recent Invoices</h3>
                    <p className="text-xs text-slate-500 mt-1">Manage and track your sales transactions</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search invoices..."
                            className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 w-64 transition-all"
                        />
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-100 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
                        Filter
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-[10px] uppercase tracking-wider text-slate-400 font-bold bg-slate-50/50">
                            <th className="px-6 py-4">Invoice ID</th>
                            <th className="px-6 py-4">Customer</th>
                            <th className="px-6 py-4">Amount</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Date</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {invoices.map((invoice) => (
                            <tr key={invoice.id} className="hover:bg-slate-50/50 transition-colors group">
                                <td className="px-6 py-4">
                                    <span className="text-sm font-bold text-slate-900">{invoice.id}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-bold", invoice.initialsBg, invoice.initialsColor)}>
                                            {invoice.initials}
                                        </div>
                                        <span className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">{invoice.customer}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm font-bold text-slate-900">{invoice.amount}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <StatusBadge status={invoice.status} />
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-slate-500 font-medium">{invoice.date}</span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="Edit">
                                            <Pencil className="w-4 h-4" />
                                        </button>
                                        <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all" title="Print">
                                            <Printer className="w-4 h-4" />
                                        </button>
                                        <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all">
                                            <MoreHorizontal className="w-4 h-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="p-6 border-t border-slate-50 flex items-center justify-between">
                <p className="text-sm text-slate-500 font-medium">Showing 5 of 24 invoices</p>
                <div className="flex items-center gap-2">
                    <button className="px-4 py-2 text-sm font-semibold text-slate-400 cursor-not-allowed">Previous</button>
                    <button className="px-4 py-2 text-sm font-semibold text-blue-600 hover:text-blue-700">Next</button>
                </div>
            </div>
        </div>
    );
}
