"use client";

import React from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend
} from 'recharts';

const data = [
    { name: 'JAN', sales: 4000, purchases: 2400 },
    { name: 'FEB', sales: 3000, purchases: 1398 },
    { name: 'MAR', sales: 2000, purchases: 9800 },
    { name: 'APR', sales: 2780, purchases: 3908 },
    { name: 'MAY', sales: 1890, purchases: 4800 },
    { name: 'JUN', sales: 2390, purchases: 3800 },
];

export function SalesPurchasesChart() {
    return (
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm h-[400px]">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-lg font-bold text-slate-900">Monthly Sales vs Purchases</h3>
                    <p className="text-sm text-slate-500">Comparing income and operating expenses</p>
                </div>
            </div>
            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={data}
                        margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                    >
                        <defs>
                            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1} />
                                <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorPurchases" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.1} />
                                <stop offset="95%" stopColor="#94a3b8" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#94a3b8', fontSize: 12 }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#94a3b8', fontSize: 12 }}
                            tickFormatter={(value) => `$${value}`}
                        />
                        <Tooltip
                            contentStyle={{
                                borderRadius: '12px',
                                border: 'none',
                                boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'
                            }}
                        />
                        <Legend
                            verticalAlign="top"
                            align="right"
                            iconType="circle"
                            wrapperStyle={{ paddingTop: '0px', paddingBottom: '20px' }}
                        />
                        <Area
                            type="monotone"
                            dataKey="sales"
                            name="Sales"
                            stroke="#2563eb"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorSales)"
                        />
                        <Area
                            type="monotone"
                            dataKey="purchases"
                            name="Purchases"
                            stroke="#94a3b8"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorPurchases)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
