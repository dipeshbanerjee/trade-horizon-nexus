
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa]">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-green-600">Kasper Trading Corporation</span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link 
                to="/" 
                className={cn(
                  "text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium",
                  currentPath === "/" && "text-green-600"
                )}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className={cn(
                  "text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium",
                  currentPath === "/products" && "text-green-600"
                )}
              >
                Products
              </Link>
              <Link 
                to="/services" 
                className={cn(
                  "text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium",
                  currentPath === "/services" && "text-green-600"
                )}
              >
                Services
              </Link>
              <Link 
                to="/contact" 
                className={cn(
                  "text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium",
                  currentPath === "/contact" && "text-green-600"
                )}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-600">© 2025 Kasper Trading Corporation. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-sm text-gray-600 hover:text-green-600">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-600 hover:text-green-600">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
