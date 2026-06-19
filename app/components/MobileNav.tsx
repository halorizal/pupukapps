"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home01Icon, Package01Icon, CustomerService01Icon, Settings02Icon } from "hugeicons-react";

export default function MobileNav() {
    const pathname = usePathname();

    const navItems = [
        { name: "Home", href: "/", icon: Home01Icon },
        { name: "Stok", href: "/stok", icon: Package01Icon },
        { name: "Layanan", href: "/services", icon: CustomerService01Icon },
        { name: "Kontak", href: "/kontak", icon: Settings02Icon }
    ];

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-t border-gray-200 p-3 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
            <div className="flex justify-around items-center">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    // Ambil komponen icon
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`text-[10px] font-medium transition flex flex-col items-center gap-1 ${isActive ? "text-primary" : "text-gray-400 hover:text-primary"
                                }`}
                        >
                            {/* Panggil komponen icon dengan size yang pas */}
                            <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                            {item.name}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}