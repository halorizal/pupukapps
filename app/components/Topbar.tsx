"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import {
    Notification01Icon,
    Search01Icon,
    Menu02Icon,
    UserCircleIcon,
    Settings01Icon,
    Logout03Icon
} from "hugeicons-react";

export default function Topbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const pageTitle = pathname.split("/")[1]?.replace(/-/g, " ") || "Dashboard";

    return (
        <header className="h-20 border-b border-gray-100 bg-white flex items-center justify-between px-8 sticky top-0 z-20">
            <div className="flex items-center gap-4">
                <button className="md:hidden text-gray-600">
                    <Menu02Icon size={24} />
                </button>
                <h1 className="text-xl font-bold capitalize tracking-tight">{pageTitle}</h1>
            </div>

            <div className="flex items-center gap-6">
                <div className="relative hidden md:block">
                    <Search01Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Cari..."
                        className="pl-10 pr-4 py-2 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary w-48 transition"
                    />
                </div>

                <button className="relative text-gray-400 hover:text-primary transition">
                    <Notification01Icon size={22} />
                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>

                {/* User Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center gap-3 pl-4 border-l border-gray-100"
                    >
                        <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-xs">BG</div>
                    </button>

                    {/* Dropdown Menu */}
                    {isOpen && (
                        <div className="absolute right-0 mt-4 w-48 bg-white rounded-2xl border border-gray-100 shadow-xl p-2 z-50">
                            <div className="px-4 py-2 border-b border-gray-50 mb-2">
                                <p className="text-sm font-bold">Bang Gundul</p>
                                <p className="text-[10px] text-gray-400">admin@rainkreasi.com</p>
                            </div>
                            <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-xl transition">
                                <Settings01Icon size={18} /> Pengaturan
                            </button>
                            <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-500 hover:bg-red-50 rounded-xl transition">
                                <Logout03Icon size={18} /> Keluar
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}