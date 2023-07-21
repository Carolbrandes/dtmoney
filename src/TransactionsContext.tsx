import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "./services/api";

interface TransactionProps {
  id: number;
  title: string;
  amount: number;
  category: string;
  createdAt: string;
  type: string;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext<TransactionProps[]>([]);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);
  useEffect(() => {
    api
      .get("/transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  );
}
