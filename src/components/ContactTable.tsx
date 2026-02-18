"use client";

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Contact } from '@/context/UserContext';
import { ContactModal } from './ContactModal';

export function ContactTable() {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const fetchContacts = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('contacts')
            .select('*')
            .order('name');

        if (error) {
            console.error('Error fetching contacts:', error);
        } else {
            setContacts(data || []);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchContacts();

        // Real-time subscription (optional but nice)
        const subscription = supabase
            .channel('contacts_changes')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'contacts' }, payload => {
                fetchContacts();
            })
            .subscribe();

        return () => {
            subscription.unsubscribe();
        };
    }, []);

    const toggleSystemAccess = async (id: number, currentAccess: boolean) => {
        // Optimistic update
        setContacts(contacts.map(c => c.id === id ? { ...c, system_access: !currentAccess } : c));

        const { error } = await supabase
            .from('contacts')
            .update({ system_access: !currentAccess })
            .eq('id', id);

        if (error) {
            console.error('Error updating access:', error);
            // Revert if error
            fetchContacts();
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-foreground">
                    All Contacts <span className="text-muted-foreground font-normal text-lg italic ml-2">(The Master Directory)</span>
                </h1>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-medium flex items-center gap-2 transition-colors shadow-lg shadow-green-900/20"
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    New Contact
                </button>
            </div>

            <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-secondary/50 text-muted-foreground uppercase text-xs font-semibold tracking-wider border-b border-border">
                            <tr>
                                <th className="px-6 py-4">Avatar</th>
                                <th className="px-6 py-4">Name</th>
                                <th className="px-6 py-4">Primary Email</th>
                                <th className="px-6 py-4">Phone</th>
                                <th className="px-6 py-4">Contact Type</th>
                                <th className="px-6 py-4">Location</th>
                                <th className="px-6 py-4 text-center">System Access</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {loading ? (
                                <tr>
                                    <td colSpan={7} className="px-6 py-8 text-center text-muted-foreground">Loading contacts...</td>
                                </tr>
                            ) : contacts.length === 0 ? (
                                <tr>
                                    <td colSpan={7} className="px-6 py-8 text-center text-muted-foreground">No contacts found.</td>
                                </tr>
                            ) : (
                                contacts.map((contact) => (
                                    <tr key={contact.id} className="hover:bg-secondary/30 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">
                                                {contact.name.charAt(0)}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 font-medium text-foreground">{contact.name}</td>
                                        <td className="px-6 py-4 text-muted-foreground">{contact.email}</td>
                                        <td className="px-6 py-4 text-muted-foreground">{contact.phone}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2.5 py-1 rounded-md text-xs font-medium border ${contact.type === 'Employee'
                                                    ? 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                                                    : 'bg-purple-500/10 text-purple-400 border-purple-500/20'
                                                }`}>
                                                {contact.type}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-muted-foreground">{contact.location}</td>
                                        <td className="px-6 py-4 text-center">
                                            <button
                                                onClick={() => toggleSystemAccess(contact.id, contact.system_access)}
                                                className={`px-3 py-1 rounded-full text-xs font-bold transition-all border ${contact.system_access
                                                        ? 'bg-green-500/10 text-green-500 border-green-500/20 hover:bg-green-500/20'
                                                        : 'bg-secondary text-muted-foreground border-border hover:bg-secondary/80'
                                                    }`}
                                            >
                                                {contact.system_access ? 'YES' : 'NO'}
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSuccess={fetchContacts}
            />
        </div>
    );
}
