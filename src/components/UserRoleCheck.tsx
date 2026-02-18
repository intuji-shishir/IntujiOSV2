"use client";

import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface UserRoleCheckProps {
    children: React.ReactNode;
    requiredPermission?: 'admin_panel' | 'main_app_timesheets';
}

export function UserRoleCheck({ children, requiredPermission }: UserRoleCheckProps) {
    const { user, role, loading } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (!loading) {
            if (!user) {
                router.push('/login');
            } else if (requiredPermission && role && !role.permissions[requiredPermission]) {
                // If checking for timesheets, we might render the blurred overlay instead of redirecting
                // But for admin panel, we redirect.
                if (requiredPermission === 'admin_panel') {
                    router.push('/main/timesheets'); // Fallback
                }
            }
        }
    }, [user, role, loading, router, requiredPermission]);

    if (loading) {
        return <div className="h-screen flex items-center justify-center text-muted-foreground">Loading access...</div>;
    }

    if (!user) return null; // Will redirect

    // For admin panel, if permission missing, we redirected. If here, likely ok or role loading?
    if (requiredPermission === 'admin_panel' && role && !role.permissions.admin_panel) {
        return null;
    }

    return <>{children}</>;
}
