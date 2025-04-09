
import React from "react";
import { useTransactions } from "@/contexts/TransactionContext";
import TransactionTable from "@/components/TransactionTable";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

const Imports = () => {
  const { getTransactionsByType } = useTransactions();
  const importTransactions = getTransactionsByType("import");

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Imports</h1>
          <p className="text-muted-foreground">
            Manage your incoming shipments and orders.
          </p>
        </div>
        <Link to="/add-transaction?type=import">
          <Button className="hidden md:flex">
            <Plus size={16} className="mr-2" />
            New Import
          </Button>
        </Link>
      </div>

      <TransactionTable transactions={importTransactions} />
    </div>
  );
};

export default Imports;
