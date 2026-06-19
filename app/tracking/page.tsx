"use client";

import { useState } from "react";
import PageHeader from "../components/PageHeader";
import {
    Package01Icon,
    Location01Icon,
    Calendar01Icon,
    TruckIcon,
    CheckmarkBadge01Icon,
    Alert02Icon
} from "hugeicons-react";

export default function TrackingPage() {
    const [resi, setResi] = useState("");
    const [data, setData] = useState<any>(null);

    const handleTracking = () => {
        if (resi === "RAIN123") {
            setData({
                status: "Dalam Perjalanan",
                lokasi: "Bogor, Jawa Barat",
                estimasi: "20 Juni 2026",
                history: [
                    { time: "19 Jun, 08:00", info: "Pesanan Diterima" },
                    { time: "19 Jun, 14:00", info: "Pupuk Keluar dari Gudang" },
                    { time: "20 Jun, 07:00", info: "Sedang dalam Pengiriman" }
                ]
            });
        } else {
            setData("not-found");
        }
    };

    return (
        <main>
            <PageHeader
                title="Lacak Pengiriman"
                breadcrumbs={[{ label: "Home", href: "/" }, { label: "Lacak", href: "/lacak" }]}
            />

            <div className="container mx-auto px-6 py-12">
                <div className="max-w-2xl">
                    <div className="flex gap-2 mb-12">
                        <input
                            type="text"
                            value={resi}
                            onChange={(e) => setResi(e.target.value)}
                            placeholder="Contoh: RAIN123"
                            className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                        />
                        <button
                            onClick={handleTracking}
                            className="bg-primary text-white px-8 rounded-xl font-medium hover:bg-primary-hover transition"
                        >
                            Lacak
                        </button>
                    </div>

                    {data && data !== "not-found" && (
                        <div className="space-y-8 animate-in fade-in duration-500">
                            {/* Header Status */}
                            <div className="bg-primary text-white p-8 rounded-3xl flex justify-between items-center">
                                <div>
                                    <p className="text-emerald-100 text-sm">Status Pengiriman</p>
                                    <h2 className="text-2xl font-bold">{data.status}</h2>
                                </div>
                                <TruckIcon size={40} className="text-emerald-200" />
                            </div>

                            {/* Detail Informasi */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-6 bg-white border border-gray-100 rounded-2xl flex items-center gap-4">
                                    <Location01Icon className="text-primary" size={24} />
                                    <div>
                                        <p className="text-[10px] text-gray-400 uppercase font-bold">Lokasi</p>
                                        <p className="text-sm font-semibold">{data.lokasi}</p>
                                    </div>
                                </div>
                                <div className="p-6 bg-white border border-gray-100 rounded-2xl flex items-center gap-4">
                                    <Calendar01Icon className="text-primary" size={24} />
                                    <div>
                                        <p className="text-[10px] text-gray-400 uppercase font-bold">Estimasi</p>
                                        <p className="text-sm font-semibold">{data.estimasi}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Riwayat Stepper */}
                            <div className="p-8 bg-white border border-gray-100 rounded-3xl">
                                <h4 className="font-bold mb-6 flex items-center gap-2">
                                    <Package01Icon size={20} className="text-primary" /> Riwayat Perjalanan
                                </h4>
                                <div className="relative border-l border-gray-200 ml-2 space-y-8">
                                    {data.history.map((h: any, i: number) => (
                                        <div key={i} className="relative pl-8">
                                            <div className="absolute -left-[5px] top-1 w-3 h-3 bg-primary rounded-full" />
                                            <p className="text-sm font-bold">{h.info}</p>
                                            <p className="text-xs text-gray-400">{h.time}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {data === "not-found" && (
                        <div className="p-6 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-4 text-red-600">
                            <Alert02Icon size={24} />
                            <p className="font-medium">Nomor resi tidak ditemukan. Silakan cek kembali.</p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}