"use client";

import React from 'react';
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
    Legend
} from 'recharts';

const data = [
    { name: 'Payroll', value: 45, color: '#3b82f6' },
    { name: 'Inventory', value: 25, color: '#0ea5e9' },
    { name: 'Rent', value: 15, color: '#64748b' },
    { name: 'Marketing', value: 15, color: '#94a3b8' },
];

export function ExpenseBreakdownChart() {
    return (
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm h-[400px] flex flex-col">
            <div className="mb-6">
                <h3 className="text-lg font-bold text-slate-900">Expense Breakdown</h3>
                <p className="text-sm text-slate-500">Category allocation</p>
            </div>
            <div className="flex-1 relative">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                        />
                    </PieChart>
                </ResponsiveContainer>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <div className="text-xl font-bold text-slate-900">$82k</div>
                    <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Total</div>
                </div>
            </div>
            <div className="mt-4 space-y-2">
                {data.map((item) => (
                    <div key={item.name} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                            <span className="text-slate-600 font-medium">{item.name}</span>
                        </div>
                        <span className="text-slate-900 font-bold">{item.value}%</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
