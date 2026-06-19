"use client";

import Link from "next/link";
import { Alert02Icon, Home01Icon, ArrowLeft01Icon } from "hugeicons-react";

export default function NotFound() {
    return (
        <main className="min-h-[70vh] flex items-center justify-center container mx-auto px-6">
            <div className="text-center space-y-8 animate-in fade-in zoom-in duration-500">

                {/* Ikon Error dengan efek aksen */}
                <div className="mx-auto w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center border-4 border-gray-100">
                    <Alert02Icon size={48} className="text-primary" />
                </div>

                <div className="space-y-2">
                    <h1 className="text-6xl font-bold tracking-tighter">404</h1>
                    <h2 className="text-2xl font-semibold text-gray-900">Halaman tidak ditemukan</h2>
                    <p className="text-gray-500 max-w-sm mx-auto">
                        Sepertinya halaman yang Anda cari telah dipindahkan atau tidak lagi tersedia dalam sistem kami.
                    </p>
                </div>

                {/* Tombol Navigasi */}
                <div className="flex gap-4 justify-center">
                    <Link
                        href="/"
                        className="flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary-hover transition"
                    >
                        <Home01Icon size={20} />
                        Kembali ke Home
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center gap-2 bg-white border border-gray-200 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition"
                    >
                        <ArrowLeft01Icon size={20} />
                        Halaman Sebelumnya
                    </button>
                </div>
            </div>
        </main>
    );
}