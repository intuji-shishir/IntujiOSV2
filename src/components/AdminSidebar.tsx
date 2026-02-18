"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function AdminSidebar() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname?.startsWith(path);

    return (
        <aside className="fixed left-0 top-0 bottom-0 w-64 bg-card border-r border-border flex flex-col z-50">
            <div className="h-16 flex items-center px-6 border-b border-border">
                <div className="flex items-center gap-2 text-primary font-bold tracking-wider text-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                    GLOBAL NAVIGATION
                </div>
            </div>

            <nav className="flex-1 py-6 space-y-1 overflow-y-auto">
                <div className="px-4 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Command Center
                </div>

                <Link
                    href="/admin/dashboard"
                    className={`flex items-center px-6 py-2 text-sm font-medium transition-colors ${isActive('/admin/dashboard') ? 'bg-primary/10 text-primary border-r-2 border-primary' : 'text-muted-foreground hover:bg-muted hover:text-foreground'}`}
                >
                    <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                    Dashboard
                </Link>

                <div className="px-4 mt-6 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Client Hub
                </div>

                <Link
                    href="/admin/clients"
                    className="flex items-center px-6 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                >
                    Clients
                </Link>
                <Link
                    href="/admin/projects"
                    className="flex items-center px-6 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                >
                    Projects
                </Link>

                <Link
                    href="/admin/contacts"
                    className={`flex items-center px-6 py-2 text-sm font-medium transition-colors ${isActive('/admin/contacts') ? 'bg-primary/10 text-primary border-r-2 border-primary' : 'text-muted-foreground hover:bg-muted hover:text-foreground'}`}
                >
                    <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Contact & Access Hub
                </Link>

                <div className="pl-14 space-y-1">
                    <Link href="/admin/contacts" className={`block py-1 text-sm ${isActive('/admin/contacts') ? 'text-primary' : 'text-muted-foreground'}`}>All Contacts</Link>
                    <Link href="#" className="block py-1 text-sm text-muted-foreground">System Users</Link>
                    <Link href="#" className="block py-1 text-sm text-muted-foreground">Roles & Permissions</Link>
                </div>

            </nav>

            <div className="p-4 border-t border-border">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">
                        AP
                    </div>
                    <div className="text-sm">
                        <p className="font-medium">Admin Profile</p>
                        <p className="text-xs text-muted-foreground">Super Admin</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
