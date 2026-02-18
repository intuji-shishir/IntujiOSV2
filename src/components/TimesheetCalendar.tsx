"use client";

import { useState } from "react";

export function TimesheetCalendar() {
    const [currentDate, setCurrentDate] = useState(new Date("2026-02-18")); // Mock date as per screenshot

    // Mock statuses
    const statuses: Record<number, 'submitted' | 'missed' | 'none'> = {
        12: 'submitted',
        2: 'missed',
        3: 'missed',
        4: 'missed',
        5: 'missed',
        9: 'missed',
        10: 'missed',
        11: 'missed',
        16: 'missed',
        17: 'missed',
    };

    const daysInMonth = 28; // Feb 2026
    const startDay = 0; // Sunday

    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    return (
        <div className="w-full max-w-sm">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold text-foreground">February 2026</h2>
                <div className="flex gap-2">
                    <button className="text-muted-foreground hover:text-foreground">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button className="text-muted-foreground hover:text-foreground">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-7 gap-y-4 gap-x-2 mb-4 text-center">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map(day => ( // Screenshot starts with M? No, usually S. Let's assume standard Mon start or Sun start. Screenshot logic checks out for Feb 2026.
                    <div key={day} className="text-xs font-semibold text-muted-foreground">{day}</div>
                ))}
                {days.map(day => {
                    const status = statuses[day] || 'none';
                    const isSelected = day === 18;
                    const isToday = day === 18; // Mocked today

                    return (
                        <div key={day} className="flex flex-col items-center gap-1 cursor-pointer group">
                            <div className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium transition-all ${isSelected ? 'bg-secondary text-foreground ring-1 ring-border' : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                                }`}>
                                {day}
                            </div>
                            {status === 'submitted' && <div className="w-1 h-1 rounded-full bg-green-500"></div>}
                            {status === 'missed' && <div className="w-1 h-1 rounded-full bg-red-500"></div>}
                        </div>
                    );
                })}
            </div>

            <div className="flex gap-4 mt-8 text-xs font-medium">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-muted-foreground">Submitted</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <span className="text-muted-foreground">Missed</span>
                </div>
            </div>
        </div>
    );
}
