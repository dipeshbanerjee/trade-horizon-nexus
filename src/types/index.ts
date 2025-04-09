
export type TransactionType = "import" | "export";

export type TransactionStatus = "pending" | "in-transit" | "completed" | "cancelled";

export interface Transaction {
  id: string;
  type: TransactionType;
  referenceNumber: string;
  date: string;
  customer: string;
  origin: string;
  destination: string;
  items: string[];
  value: number;
  status: TransactionStatus;
}
