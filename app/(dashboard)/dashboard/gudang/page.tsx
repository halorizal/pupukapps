"use client";

import { Building02Icon, MapPinIcon, PackageIcon, Alert01Icon, PlusMinusIcon } from "hugeicons-react";

export default function GudangPage() {
    const warehouses = [
        { id: 1, nama: "Gudang Utama - Gunung Putri", lokasi: "Bogor, Jawa Barat", kapasitas: "85%", status: "Aktif" },
        { id: 2, nama: "Gudang Transit - Subang", lokasi: "Subang, Jawa Barat", kapasitas: "40%", status: "Aktif" },
        { id: 3, nama: "Gudang Agen - Boyolali", lokasi: "Boyolali, Jawa Tengah", kapasitas: "95%", status: "Penuh" },
    ];

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold tracking-tighter">Data Gudang</h1>
                    <p className="text-gray-500 text-sm">Monitoring kapasitas dan status operasional gudang.</p>
                </div>
                <button className="bg-primary text-white px-6 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-primary/90 transition">
                    <PlusMinusIcon size={20} /> Tambah Gudang
                </button>
            </div>

            {/* Grid List Gudang */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {warehouses.map((w) => (
                    <div key={w.id} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition">
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-gray-50 rounded-2xl text-primary">
                                <Building02Icon size={24} />
                            </div>
                            <span className={`px-2 py-1 rounded-md text-[10px] font-bold ${w.status === "Penuh" ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600"
                                }`}>
                                {w.status}
                            </span>
                        </div>

                        <h3 className="font-bold text-lg mb-1">{w.nama}</h3>
                        <div className="flex items-center gap-2 text-gray-400 text-xs mb-6">
                            <MapPinIcon size={14} /> {w.lokasi}
                        </div>

                        {/* Progress Capacity */}
                        <div className="space-y-2">
                            <div className="flex justify-between text-xs font-bold">
                                <span>Kapasitas</span>
                                <span>{w.kapasitas}</span>
                            </div>
                            <div className="w-full h-2 bg-gray-50 rounded-full overflow-hidden">
                                <div className={`h-full rounded-full ${w.status === "Penuh" ? "bg-red-500" : "bg-primary"}`}
                                    style={{ width: w.kapasitas }}></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Alert / Info Bar */}
            <div className="flex items-center gap-4 bg-amber-50 text-amber-800 p-4 rounded-2xl border border-amber-100">
                <Alert01Icon size={20} />
                <p className="text-sm font-semibold">Gudang Agen Boyolali hampir penuh (95%). Disarankan segera melakukan rotasi stok.</p>
            </div>
        </div>
    );
}