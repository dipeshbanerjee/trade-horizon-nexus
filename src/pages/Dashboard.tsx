
import React from "react";
import { useTransactions } from "@/contexts/TransactionContext";
import StatCard from "@/components/StatCard";
import TransactionTable from "@/components/TransactionTable";
import { formatCurrency } from "@/lib/formatters";
import { FileDown, FileUp, DollarSign, TrendingUp } from "lucide-react";

const Dashboard = () => {
  const { transactions } = useTransactions();
  
  const importTransactions = transactions.filter(t => t.type === "import");
  const exportTransactions = transactions.filter(t => t.type === "export");
  
  const totalImportValue = importTransactions.reduce((sum, t) => sum + t.value, 0);
  const totalExportValue = exportTransactions.reduce((sum, t) => sum + t.value, 0);
  const tradeBalance = totalExportValue - totalImportValue;

  const recentTransactions = [...transactions]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of your import and export operations.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Import Volume"
          value={importTransactions.length.toString()}
          icon={<FileDown className="h-4 w-4" />}
          description="Total import transactions"
        />
        <StatCard
          title="Export Volume"
          value={exportTransactions.length.toString()}
          icon={<FileUp className="h-4 w-4" />}
          description="Total export transactions"
        />
        <StatCard
          title="Total Trade Value"
          value={formatCurrency(totalImportValue + totalExportValue)}
          icon={<DollarSign className="h-4 w-4" />}
          description="Combined value of all transactions"
        />
        <StatCard
          title="Trade Balance"
          value={formatCurrency(tradeBalance)}
          icon={<TrendingUp className="h-4 w-4" />}
          description={tradeBalance >= 0 ? "Trade surplus" : "Trade deficit"}
          className={tradeBalance >= 0 ? "border-l-4 border-green-500" : "border-l-4 border-red-500"}
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
        <TransactionTable transactions={recentTransactions} type="all" />
      </div>
    </div>
  );
};

export default Dashboard;
