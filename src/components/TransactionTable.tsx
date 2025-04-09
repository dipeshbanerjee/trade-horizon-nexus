
import React, { useState } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Transaction, TransactionStatus } from "@/types";
import { Badge } from "@/components/ui/badge";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { useTransactions } from "@/contexts/TransactionContext";
import { formatCurrency } from "@/lib/formatters";

interface TransactionTableProps {
  transactions: Transaction[];
  type?: "import" | "export" | "all";
}

const statusColors: Record<TransactionStatus, string> = {
  "pending": "bg-amber-100 text-amber-800 hover:bg-amber-200",
  "in-transit": "bg-blue-100 text-blue-800 hover:bg-blue-200",
  "completed": "bg-green-100 text-green-800 hover:bg-green-200",
  "cancelled": "bg-red-100 text-red-800 hover:bg-red-200",
};

const TransactionTable: React.FC<TransactionTableProps> = ({ 
  transactions,
  type = "all"
}) => {
  const { updateTransactionStatus } = useTransactions();
  
  const handleStatusChange = (id: string, status: TransactionStatus) => {
    updateTransactionStatus(id, status);
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            {type === "all" && <TableHead>Type</TableHead>}
            <TableHead>Reference</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead className="hidden md:table-cell">Route</TableHead>
            <TableHead className="text-right">Value</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.length === 0 ? (
            <TableRow>
              <TableCell colSpan={type === "all" ? 7 : 6} className="h-24 text-center">
                No transactions found.
              </TableCell>
            </TableRow>
          ) : (
            transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                {type === "all" && (
                  <TableCell>
                    <Badge 
                      variant="outline"
                      className={
                        transaction.type === "import" 
                          ? "bg-blue-100 text-blue-800 hover:bg-blue-200" 
                          : "bg-green-100 text-green-800 hover:bg-green-200"
                      }
                    >
                      {transaction.type === "import" ? "Import" : "Export"}
                    </Badge>
                  </TableCell>
                )}
                <TableCell className="font-medium">{transaction.referenceNumber}</TableCell>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.customer}</TableCell>
                <TableCell className="hidden md:table-cell">
                  {transaction.origin} → {transaction.destination}
                </TableCell>
                <TableCell className="text-right">
                  {formatCurrency(transaction.value)}
                </TableCell>
                <TableCell>
                  <Select
                    value={transaction.status}
                    onValueChange={(value) => 
                      handleStatusChange(transaction.id, value as TransactionStatus)
                    }
                  >
                    <SelectTrigger className={`w-[130px] ${statusColors[transaction.status]}`}>
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="in-transit">In Transit</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default TransactionTable;
