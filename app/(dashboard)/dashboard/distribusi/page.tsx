"use client";

import {
    TruckDeliveryIcon,
    Calendar03Icon,
    MapPinIcon,
    MoreHorizontalIcon,
    PlusMinus01Icon
} from "hugeicons-react";

export default function DistribusiPage() {
    const shipments = [
        { id: "TRX-001", tujuan: "Subang, Jawa Barat", status: "Dalam Perjalanan", tgl: "19 Jun 2026", armada: "B 1234 XYZ" },
        { id: "TRX-002", tujuan: "Boyolali, Jawa Tengah", status: "Selesai", tgl: "18 Jun 2026", armada: "D 5678 KLM" },
        { id: "TRX-003", tujuan: "Kediri, Jawa Timur", status: "Pending", tgl: "19 Jun 2026", armada: "Belum Ditugaskan" },
    ];

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold tracking-tighter">Distribusi Pupuk</h1>
                    <p className="text-gray-500 text-sm">Monitoring pengiriman barang ke distributor.</p>
                </div>
                <button className="bg-primary text-white px-6 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-primary/90 transition">
                    <PlusMinus01Icon size={20} /> Buat Pengiriman
                </button>
            </div>

            {/* Statistik Ringkas Pengiriman */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><TruckDeliveryIcon size={24} /></div>
                    <div>
                        <p className="text-[10px] uppercase font-bold text-gray-400">Dalam Perjalanan</p>
                        <p className="text-xl font-bold">12 Pengiriman</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                    <div className="p-3 bg-green-50 text-green-600 rounded-xl"><Calendar03Icon size={24} /></div>
                    <div>
                        <p className="text-[10px] uppercase font-bold text-gray-400">Selesai Hari Ini</p>
                        <p className="text-xl font-bold">8 Pengiriman</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                    <div className="p-3 bg-amber-50 text-amber-600 rounded-xl"><MapPinIcon size={24} /></div>
                    <div>
                        <p className="text-[10px] uppercase font-bold text-gray-400">Pending</p>
                        <p className="text-xl font-bold">3 Pengiriman</p>
                    </div>
                </div>
            </div>

            {/* Tabel Distribusi */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50/50">
                        <tr className="text-xs text-gray-400 uppercase font-bold">
                            <th className="px-8 py-4">ID Transaksi</th>
                            <th className="px-8 py-4">Tujuan</th>
                            <th className="px-8 py-4">Armada</th>
                            <th className="px-8 py-4">Status</th>
                            <th className="px-8 py-4 text-right">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {shipments.map((s) => (
                            <tr key={s.id} className="hover:bg-gray-50/50 transition">
                                <td className="px-8 py-5 font-mono text-sm font-semibold">{s.id}</td>
                                <td className="px-8 py-5 text-sm">{s.tujuan}</td>
                                <td className="px-8 py-5 text-sm text-gray-600">{s.armada}</td>
                                <td className="px-8 py-5">
                                    <span className={`px-2 py-1 rounded-md text-[10px] font-bold ${s.status === "Selesai" ? "bg-green-50 text-green-600" :
                                        s.status === "Dalam Perjalanan" ? "bg-blue-50 text-blue-600" : "bg-amber-50 text-amber-600"
                                        }`}>
                                        {s.status}
                                    </span>
                                </td>
                                <td className="px-8 py-5 text-right">
                                    <button className="text-gray-400 hover:text-primary"><MoreHorizontalIcon size={20} /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}