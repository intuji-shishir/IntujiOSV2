import { MainSidebar } from "@/components/MainSidebar";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-background text-foreground flex font-sans">
            <MainSidebar />
            <div className="flex-1 flex flex-col ml-64 bg-black">
                {/* Main content background specifically black/radical gradient as per Timesheet spec? */}
                {children}
            </div>
        </div>
    );
}
