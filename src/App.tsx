
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TransactionProvider } from "./contexts/TransactionContext";

import MainLayout from "./components/layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Imports from "./pages/Imports";
import Exports from "./pages/Exports";
import AddTransaction from "./pages/AddTransaction";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TransactionProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <Routes>
              <Route path="/" element={<MainLayout><Dashboard /></MainLayout>} />
              <Route path="/imports" element={<MainLayout><Imports /></MainLayout>} />
              <Route path="/exports" element={<MainLayout><Exports /></MainLayout>} />
              <Route path="/add-transaction" element={<MainLayout><AddTransaction /></MainLayout>} />
              <Route path="/settings" element={<MainLayout><Settings /></MainLayout>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </TooltipProvider>
        </TransactionProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
