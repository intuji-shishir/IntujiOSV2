"use client";

interface TimelineEvent {
    id: number;
    title: string;
    startTime: string; // "1:30 PM"
    duration: string; // "30m"
    color: string;
}

export function TimesheetTimeline() {
    // Mock data for timeline
    const hours = [
        "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"
    ];

    return (
        <div className="relative border-l border-border h-full ml-4 pl-8 py-4">
            {hours.map((hour, index) => (
                <div key={hour} className="relative mb-16 last:mb-0 group">
                    {/* Horizontal Grid Line */}
                    <div className="absolute left-0 top-0 w-full h-px bg-border/30 group-first:bg-transparent"></div>

                    <div className="absolute -left-[4.5rem] -top-3 text-xs text-muted-foreground w-16 text-right pr-2">
                        {hour}
                    </div>

                    {/* Mock Event at 1:30 PM */}
                    {hour === "1:00 PM" && (
                        <div className="absolute top-[50%] left-0 right-0 h-1 bg-red-600 z-10">
                            <div className="absolute -left-1.5 -top-1 w-3 h-3 rounded-full bg-red-600 ring-4 ring-background/50"></div>
                        </div>
                    )}
                </div>
            ))}

            {/* Mock "Ohr Omin" footer stats */}
            <div className="mt-8 grid grid-cols-4 gap-4 text-xs">
                <div>
                    <h4 className="text-white font-bold text-sm">0hr 0min</h4>
                    <p className="text-muted-foreground">Total Overall Hours</p>
                </div>
                <div>
                    <h4 className="text-white font-bold text-sm">0hr 0min</h4>
                    <p className="text-muted-foreground">Total Working Hours</p>
                </div>
                <div>
                    <h4 className="text-white font-bold text-sm">0hr 0min</h4>
                    <p className="text-muted-foreground">Total Break Hours</p>
                </div>
                <div>
                    <h4 className="text-white font-bold text-sm">0hr 0min</h4>
                    <p className="text-muted-foreground">Total Leave Hours</p>
                </div>
            </div>

            <div className="mt-8 flex justify-end">
                <button
                    disabled={true}
                    className="bg-red-900/50 text-red-200 border border-red-800 rounded px-4 py-2 text-sm font-medium opacity-50 cursor-not-allowed"
                >
                    Submit Timesheet (Demo)
                </button>
            </div>
        </div>
    );
}
