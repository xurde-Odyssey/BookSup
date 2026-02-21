import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { SummaryCard } from "@/components/dashboard/SummaryCard";
import { InvoicesTable } from "@/components/dashboard/InvoicesTable";
import {
    TrendingUp,
    CircleDollarSign,
    Clock,
    AlertCircle
} from 'lucide-react';

export default function SalesPage() {
    return (
        <div className="flex min-h-screen bg-slate-50/50">
            <Sidebar />

            <main className="flex-1 p-8 overflow-y-auto">
                <Header
                    title="Sales Invoices Overview"
                    description="Detailed view of all your sales transactions and invoice statuses"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <SummaryCard
                        title="Total Invoiced"
                        value="$184,200.00"
                        trend="+15.2% from last month"
                        trendType="positive"
                        icon={TrendingUp}
                        iconBgColor="bg-blue-50"
                        iconColor="text-blue-600"
                    />
                    <SummaryCard
                        title="Paid Invoices"
                        value="$142,500.00"
                        trend="78% collection rate"
                        trendType="positive"
                        icon={CircleDollarSign}
                        iconBgColor="bg-green-50"
                        iconColor="text-green-600"
                    />
                    <SummaryCard
                        title="Pending Payment"
                        value="$29,300.00"
                        trend="12 invoices pending"
                        trendType="neutral"
                        icon={Clock}
                        iconBgColor="bg-amber-50"
                        iconColor="text-amber-600"
                    />
                    <SummaryCard
                        title="Overdue Payment"
                        value="$12,400.00"
                        trend="Action required"
                        trendType="negative"
                        icon={AlertCircle}
                        iconBgColor="bg-red-50"
                        iconColor="text-red-500"
                    />
                </div>

                <div className="mb-8">
                    <InvoicesTable />
                </div>
            </main>
        </div>
    );
}
