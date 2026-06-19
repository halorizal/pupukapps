"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    DashboardSquare02Icon,
    PackageIcon,
    TruckDeliveryIcon,
    Analytics01Icon,
    UserGroupIcon,
    Settings01Icon,
    Building02Icon,
    ArrowDown01Icon
} from "hugeicons-react";

export default function Sidebar() {
    const pathname = usePathname();
    const [openGroups, setOpenGroups] = useState({ inventory: true, management: true });

    const toggleGroup = (group: 'inventory' | 'management') => {
        setOpenGroups(prev => ({ ...prev, [group]: !prev[group] }));
    };

    return (
        <div className="p-6 h-full flex flex-col bg-white">
            <div className="mb-10 px-4">
                <div className="text-2xl font-black tracking-tighter text-primary">RAIN<span className="text-gray-900">FERT</span></div>
            </div>

            <div className="space-y-8 flex-1">
                {/* Main Section */}
                <div>
                    <p className="px-4 mb-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Main</p>
                    <nav className="space-y-1">
                        <NavItem active={pathname === "/dashboard"} href="/dashboard" icon={<DashboardSquare02Icon size={20} />} label="Dashboard" />
                    </nav>
                </div>

                {/* Inventory Section (Collapsible) */}
                <div>
                    <button onClick={() => toggleGroup('inventory')} className="w-full flex items-center justify-between px-4 mb-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:text-primary transition">
                        Inventory
                        <ArrowDown01Icon size={14} className={`transition-transform ${openGroups.inventory ? "" : "-rotate-90"}`} />
                    </button>
                    {openGroups.inventory && (
                        <nav className="space-y-1">
                            <NavItem active={pathname === "/dashboard/stok"} href="/dashboard/stok" icon={<PackageIcon size={20} />} label="Stok Pupuk" />
                            <NavItem active={pathname === "/dashboard/distribusi"} href="/dashboard/distribusi" icon={<TruckDeliveryIcon size={20} />} label="Distribusi" />
                            <NavItem active={pathname === "/dashboard/laporan"} href="/dashboard/laporan" icon={<Analytics01Icon size={20} />} label="Laporan" />
                        </nav>
                    )}
                </div>

                {/* Management Section (Collapsible) */}
                <div>
                    <button onClick={() => toggleGroup('management')} className="w-full flex items-center justify-between px-4 mb-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:text-primary transition">
                        Management
                        <ArrowDown01Icon size={14} className={`transition-transform ${openGroups.management ? "" : "-rotate-90"}`} />
                    </button>
                    {openGroups.management && (
                        <nav className="space-y-1">
                            <NavItem active={pathname === "/dashboard/gudang"} href="/dashboard/gudang" icon={<Building02Icon size={20} />} label="Data Gudang" />
                            <NavItem active={pathname === "/user"} href="/user" icon={<UserGroupIcon size={20} />} label="Manajemen User" />
                            <NavItem active={pathname === "/settings"} href="/settings" icon={<Settings01Icon size={20} />} label="Pengaturan" />
                        </nav>
                    )}
                </div>
            </div>

            {/* Footer */}
            <div className="px-4 pt-6 border-t border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Operator</p>
                <div className="mt-2 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-xs">BG</div>
                    <div className="text-xs font-semibold text-gray-700">Bang Gundul</div>
                </div>
            </div>
        </div>
    );
}

function NavItem({ href, icon, label, active }: { href: string; icon: React.ReactNode; label: string; active: boolean }) {
    return (
        <Link href={href} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${active ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"}`}>
            <span className={`${active ? "text-white" : "text-gray-400 group-hover:text-primary"}`}>{icon}</span>
            <span className="font-semibold text-sm tracking-tight">{label}</span>
        </Link>
    );
}