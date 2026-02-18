"use client";

import { useUser } from "@/context/UserContext";

export function AdminHeader() {
    const { logout } = useUser();

    return (
        <header className="h-16 border-b border-border bg-background/50 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-40">
            <div className="text-primary font-bold tracking-wide">
                [ INTUJIOS ADMIN ]
            </div>

            <div className="flex-1 max-w-xl mx-8">
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-4 w-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </span>
                    <input
                        type="text"
                        className="block w-full pl-10 pr-3 py-1.5 border border-input rounded-md leading-5 bg-card/50 text-foreground placeholder-muted-foreground focus:outline-none focus:bg-card focus:ring-1 focus:ring-primary sm:text-sm"
                        placeholder="Search anything (Contacts, Projects, Devices)..."
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <span className="text-xs text-muted-foreground border border-border px-1.5 py-0.5 rounded">Ctrl+K</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button className="text-muted-foreground hover:text-foreground">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                </button>
                <button
                    onClick={logout}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary hover:bg-secondary/80 text-xs font-semibold"
                >
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                    Admin
                </button>
            </div>
        </header>
    );
}
