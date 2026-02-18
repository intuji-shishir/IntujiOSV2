"use client";

import { useUser } from "@/context/UserContext";
import { TimesheetCalendar } from "@/components/TimesheetCalendar";
import { TimesheetTimeline } from "@/components/TimesheetTimeline";

export default function TimesheetsPage() {
    const { role, loading } = useUser();

    // Logic restricted access
    const isRestricted = !loading && role && !role.permissions.main_app_timesheets;

    return (
        <div className="relative h-screen flex flex-col p-8 bg-gradient-to-br from-black to-zinc-900">

            {/* Header */}
            <header className="flex justify-between items-center mb-12">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Timesheet</span>
                </div>
                <div className="text-right">
                    <h1 className="text-foreground font-semibold">Wednesday, February 18th, 2026</h1>
                    <div className="flex items-center justify-end gap-1 text-muted-foreground text-xs">
                        <span>Asia/Kathmandu</span>
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                </div>
                <button className="text-muted-foreground hover:text-foreground">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                </button>
            </header>

            <div className="flex-1 grid grid-cols-12 gap-8">
                <div className="col-span-4 border-r border-white/5 pr-8">
                    <TimesheetCalendar />
                </div>
                <div className="col-span-8">
                    <TimesheetTimeline />
                </div>
            </div>

            {isRestricted && (
                <div className="absolute inset-0 z-50 backdrop-blur-md bg-black/60 flex flex-col items-center justify-center text-center p-8">
                    <div className="bg-card border border-border p-8 rounded-xl shadow-2xl max-w-md">
                        <div className="w-12 h-12 rounded-full bg-red-900/30 flex items-center justify-center text-red-500 mx-auto mb-4">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">Access Restricted</h3>
                        <p className="text-muted-foreground mb-6">
                            Please contact Admin to enable Timesheets for this account.
                        </p>
                        <div className="text-xs text-muted-foreground">
                            Role: {role?.name || 'Unknown'} <br />
                            Permission: main_app_timesheets = false
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
