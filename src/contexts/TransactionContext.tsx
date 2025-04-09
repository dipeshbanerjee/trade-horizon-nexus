
import React, { createContext, useContext, useState, useEffect } from "react";
import { Transaction } from "@/types";
import { transactions as initialTransactions } from "@/data/sampleData";
import { toast } from "sonner";

interface TransactionContextType {
  transactions: Transaction[];
  addTransaction: (transaction: Omit<Transaction, "id">) => void;
  updateTransactionStatus: (id: string, status: Transaction["status"]) => void;
  getTransactionsByType: (type: Transaction["type"]) => Transaction[];
}

const TransactionContext = createContext<TransactionContextType | undefined>(undefined);

export const useTransactions = () => {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error("useTransactions must be used within a TransactionProvider");
  }
  return context;
};

export const TransactionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  // Initialize with sample data
  useEffect(() => {
    setTransactions(initialTransactions);
  }, []);

  const addTransaction = (transaction: Omit<Transaction, "id">) => {
    const newTransaction = {
      ...transaction,
      id: `${Date.now()}`,
    };
    
    setTransactions((prev) => [...prev, newTransaction]);
    toast.success(`${transaction.type === "import" ? "Import" : "Export"} transaction created successfully`);
  };

  const updateTransactionStatus = (id: string, status: Transaction["status"]) => {
    setTransactions((prev) =>
      prev.map((transaction) =>
        transaction.id === id ? { ...transaction, status } : transaction
      )
    );
    toast.success("Transaction status updated");
  };

  const getTransactionsByType = (type: Transaction["type"]) => {
    return transactions.filter((transaction) => transaction.type === type);
  };

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        addTransaction,
        updateTransactionStatus,
        getTransactionsByType,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
