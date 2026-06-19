"use client";

import { useState } from "react";
import { Login01Icon, LockPasswordIcon, Mail01Icon } from "hugeicons-react";
import { useRouter } from "next/navigation";
export default function LoginPage() {
    const [loading, setLoading] = useState(false);
    const router = useRouter(); // 2. Inisialisasi router
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulasi proses autentikasi (misal: fetch API)
        setTimeout(() => {
            setLoading(false);

            // 3. Push ke dashboard setelah proses selesai
            router.push("/dashboard");
        }, 2000);
    };
    return (
        <div className="w-full">
            <div className="mb-8">
                <h1 className="text-2xl font-bold tracking-tighter">Selamat Datang</h1>
                <p className="text-gray-500 text-sm">Masuk ke akun PT. Rain Kreasi Media</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase">Email</label>
                    <div className="relative flex items-center">
                        <Mail01Icon className="absolute left-4 text-gray-400" size={20} />
                        <input
                            type="email"
                            className="w-full pl-12 p-4 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-primary transition"
                            placeholder="admin@rainkreasi.com"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase">Password</label>
                    <div className="relative flex items-center">
                        <LockPasswordIcon className="absolute left-4 text-gray-400" size={20} />
                        <input
                            type="password"
                            className="w-full pl-12 p-4 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-primary transition"
                            placeholder="••••••••"
                        />
                    </div>
                </div>

                <button
                    onClick={handleLogin}
                    disabled={loading}
                    type="submit"
                    className="w-full bg-primary text-white p-4 rounded-full font-bold hover:bg-primary-hover transition mt-6 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                    <Login01Icon size={20} />
                    {loading ? "Memproses..." : "Masuk"}
                </button>
            </form>

            <p className="text-center text-xs text-gray-400 mt-8">
                © 2026 PT. Rain Kreasi Media. All rights reserved.
            </p>
        </div>
    );
}