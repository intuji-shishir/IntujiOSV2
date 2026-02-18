import { AdminSidebar } from "@/components/AdminSidebar";
import { AdminHeader } from "@/components/AdminHeader";
import { UserRoleCheck } from "@/components/UserRoleCheck";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <UserRoleCheck requiredPermission="admin_panel">
            <div className="min-h-screen bg-background text-foreground flex">
                <AdminSidebar />
                <div className="flex-1 flex flex-col ml-64">
                    <AdminHeader />
                    <main className="flex-1 p-8 overflow-y-auto">
                        {children}
                    </main>
                </div>
            </div>
        </UserRoleCheck>
    );
}
