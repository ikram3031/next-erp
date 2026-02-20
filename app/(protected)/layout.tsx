"use client";

import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { LayoutDashboard, Menu, LogOut, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/theme-toggle";

const ProtectedLayout = ({ children }: { children?: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const handleLogout = () => {
    document.cookie =
      "accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    router.replace("/login");
  };

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { name: "Products", icon: Package, path: "/products" },
  ];

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Sidebar */}
      <aside
        className={`border-r bg-muted/40 transition-all duration-300 ${
          collapsed ? "w-20" : "w-64"
        }`}
      >
        <div className="flex items-center justify-between p-4">
          {!collapsed && <h2 className="text-lg font-bold">SaaS ERP</h2>}

          <Button
            size="icon"
            variant="ghost"
            onClick={() => setCollapsed(!collapsed)}
          >
            <Menu size={18} />
          </Button>
        </div>

        <nav className="mt-6 space-y-2 px-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.path;

            return (
              <Button
                key={item.path}
                variant={active ? "secondary" : "ghost"}
                className={`w-full gap-3 ${
                  collapsed ? "justify-center" : "justify-start"
                }`}
                onClick={() => router.push(item.path)}
              >
                <Icon size={18} />
                {!collapsed && item.name}
              </Button>
            );
          })}
        </nav>
      </aside>

      {/* Main Section */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <header className="flex items-center justify-between border-b px-6 py-4 bg-background">
          <h1 className="text-xl font-semibold">Dashboard</h1>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button variant="destructive" size="icon" onClick={handleLogout}>
              <LogOut size={18} />
            </Button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 bg-muted/20 p-6">{children}</main>
      </div>
    </div>
  );
};

export default ProtectedLayout;
