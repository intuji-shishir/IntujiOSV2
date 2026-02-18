"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

// Types derived from the schema description
export interface Role {
    id: number;
    name: string;
    permissions: {
        admin_panel: boolean;
        main_app_timesheets: boolean;
    };
}

export interface Contact {
    id: number;
    name: string;
    email: string;
    phone: string;
    type: 'Employee' | 'Client Contact' | 'Admin' | string;
    location: string;
    system_access: boolean;
    role_id: number;
    avatar?: string;
}

interface UserContextType {
    user: Contact | null;
    role: Role | null;
    loading: boolean;
    login: (email: string) => Promise<boolean>;
    logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<Contact | null>(null);
    const [role, setRole] = useState<Role | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        // Check for persisted user (simulated session)
        const storedEmail = localStorage.getItem('kingos_user_email');
        if (storedEmail) {
            login(storedEmail).finally(() => setLoading(false));
        } else {
            setLoading(false);
        }
    }, []);

    const login = async (email: string) => {
        setLoading(true);
        try {
            // 1. Fetch user from contacts
            const { data: contacts, error: userError } = await supabase
                .from('contacts')
                .select('*')
                .eq('email', email)
                .single();

            if (userError || !contacts) {
                console.error("User not found or error:", userError);
                return false;
            }

            if (!contacts.system_access) {
                console.warn("User has no system access");
                return false;
            }

            // 2. Fetch role
            const { data: roleData, error: roleError } = await supabase
                .from('roles')
                .select('*')
                .eq('id', contacts.role_id)
                .single();

            if (roleError || !roleData) {
                console.error("Role not found:", roleError);
                return false;
            }

            setUser(contacts);
            setRole(roleData);
            localStorage.setItem('kingos_user_email', email);
            return true;
        } catch (error) {
            console.error("Login exception:", error);
            return false;
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        setUser(null);
        setRole(null);
        localStorage.removeItem('kingos_user_email');
        router.push('/login');
    };

    return (
        <UserContext.Provider value={{ user, role, loading, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
}
