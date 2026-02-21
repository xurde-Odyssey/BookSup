import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { SummaryCard } from "@/components/dashboard/SummaryCard";
import { SalesPurchasesChart } from "@/components/dashboard/SalesPurchasesChart";
import { ExpenseBreakdownChart } from "@/components/dashboard/ExpenseBreakdownChart";
import { TopCustomersTable } from "@/components/dashboard/TopCustomersTable";
import {
  TrendingUp,
  TrendingDown,
  Wallet,
  ShoppingCart,
  CircleDollarSign,
  AlertCircle
} from 'lucide-react';

export default function Home() {
  return (
    <div className="flex min-h-screen bg-slate-50/50">
      <Sidebar />

      <main className="flex-1 p-8 overflow-y-auto">
        <Header />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <SummaryCard
            title="Total Sales"
            value="$124,500.00"
            trend="+12.5% from last month"
            trendType="positive"
            icon={TrendingUp}
            iconBgColor="bg-green-50"
            iconColor="text-green-600"
          />
          <SummaryCard
            title="Total Purchases"
            value="$82,300.00"
            trend="-4.2% from last month"
            trendType="negative"
            icon={ShoppingCart}
            iconBgColor="bg-blue-50"
            iconColor="text-blue-600"
          />
          <SummaryCard
            title="Net Profit"
            value="$42,200.00"
            trend="+8.1% vs target"
            trendType="positive"
            icon={CircleDollarSign}
            iconBgColor="bg-green-50"
            iconColor="text-green-600"
          />
          <SummaryCard
            title="Outstanding Payables"
            value="$12,400.00"
            trend="3 invoices overdue"
            trendType="negative"
            icon={AlertCircle}
            iconBgColor="bg-red-50"
            iconColor="text-red-500"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <SalesPurchasesChart />
          </div>
          <div>
            <ExpenseBreakdownChart />
          </div>
        </div>

        <div className="mb-8">
          <TopCustomersTable />
        </div>
      </main>
    </div>
  );
}
