"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useUser } from '@/context/UserContext';

export function MainSidebar() {
    const pathname = usePathname();
    const { logout } = useUser();

    const isActive = (path: string) => pathname?.startsWith(path);

    return (
        <aside className="fixed left-0 top-0 bottom-0 w-64 bg-card border-r border-border flex flex-col z-50">
            <div className="h-16 flex items-center px-6 border-b border-border">
                <div className="text-xl font-bold tracking-tight text-foreground">
                    intu<span className="text-primary">ji</span>OS
                </div>
            </div>

            <nav className="flex-1 py-6 space-y-1">

                <Link
                    href="/main/timesheets"
                    className={`flex items-center px-6 py-3 text-sm font-medium transition-colors ${isActive('/main/timesheets') ? 'bg-primary/10 text-foreground border-r-2 border-primary' : 'text-muted-foreground hover:bg-muted hover:text-foreground'}`}
                >
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Timesheet
                </Link>

                <Link
                    href="/main/inbox"
                    className={`flex items-center px-6 py-3 text-sm font-medium transition-colors ${isActive('/main/inbox') ? 'bg-primary/10 text-foreground border-r-2 border-primary' : 'text-muted-foreground hover:bg-muted hover:text-foreground'}`}
                >
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                    </svg>
                    Inbox
                </Link>

            </nav>

            <div className="p-4 border-t border-border">
                <button onClick={logout} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground w-full px-2 py-2 rounded-md hover:bg-muted transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Sign Out
                </button>
            </div>
        </aside>
    );
}
