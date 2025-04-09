
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  LayoutDashboard, 
  FileUp, 
  FileDown, 
  Settings, 
  Plus 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
  icon: React.ReactNode;
  title: string;
  to: string;
  isActive: boolean;
}

const SidebarItem = ({ icon, title, to, isActive }: SidebarItemProps) => (
  <Link to={to}>
    <Button
      variant="ghost"
      className={cn(
        "w-full justify-start gap-2 text-left font-normal",
        isActive ? "bg-accent text-accent-foreground" : "hover:bg-accent/50"
      )}
    >
      {icon}
      <span>{title}</span>
    </Button>
  </Link>
);

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 flex-col border-r bg-card">
        <div className="flex h-14 items-center border-b px-4">
          <h1 className="text-lg font-semibold">Trade Horizon</h1>
        </div>
        <div className="flex-1 overflow-auto py-2 px-3">
          <div className="space-y-1">
            <SidebarItem
              icon={<LayoutDashboard size={18} />}
              title="Dashboard"
              to="/"
              isActive={currentPath === "/"}
            />
            <SidebarItem
              icon={<FileDown size={18} />}
              title="Imports"
              to="/imports"
              isActive={currentPath === "/imports"}
            />
            <SidebarItem
              icon={<FileUp size={18} />}
              title="Exports"
              to="/exports"
              isActive={currentPath === "/exports"}
            />
            <SidebarItem
              icon={<Settings size={18} />}
              title="Settings"
              to="/settings"
              isActive={currentPath === "/settings"}
            />
          </div>
        </div>
        <div className="p-4 border-t">
          <Link to="/add-transaction">
            <Button className="w-full">
              <Plus size={16} className="mr-2" />
              New Transaction
            </Button>
          </Link>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top nav for mobile */}
        <div className="flex h-14 items-center border-b px-4 md:hidden">
          <h1 className="text-lg font-semibold">Trade Horizon</h1>
        </div>

        {/* Main content area */}
        <main className="flex-1 overflow-auto p-4 md:p-6">
          {children}
        </main>

        {/* Mobile navigation */}
        <div className="border-t bg-card md:hidden">
          <div className="flex items-center justify-around">
            <Link to="/" className="flex flex-1 flex-col items-center py-3">
              <Home size={20} />
              <span className="text-xs">Home</span>
            </Link>
            <Link to="/imports" className="flex flex-1 flex-col items-center py-3">
              <FileDown size={20} />
              <span className="text-xs">Imports</span>
            </Link>
            <Link to="/exports" className="flex flex-1 flex-col items-center py-3">
              <FileUp size={20} />
              <span className="text-xs">Exports</span>
            </Link>
            <Link to="/add-transaction" className="flex flex-1 flex-col items-center py-3">
              <Plus size={20} />
              <span className="text-xs">Add</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
