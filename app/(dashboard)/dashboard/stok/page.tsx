"use client";

import { PlusMinus02Icon, Search01Icon, FilterIcon, MoreHorizontalIcon } from "hugeicons-react";

export default function StokPage() {
    // Dummy data stok pupuk
    const stocks = [
        { id: 1, nama: "Urea 50kg", gudang: "Gudang A", stok: 120, min: 20, harga: "Rp 150.000" },
        { id: 2, nama: "NPK 16-16-16", gudang: "Gudang B", stok: 15, min: 30, harga: "Rp 450.000" },
        { id: 3, nama: "Organik Cair", gudang: "Gudang A", stok: 45, min: 10, harga: "Rp 85.000" },
    ];

    return (
        <div className="space-y-6">
            {/* Header Page */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold tracking-tighter">Manajemen Stok</h1>
                    <p className="text-gray-500 text-sm">Kelola inventaris pupuk di seluruh gudang.</p>
                </div>
                <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition">
                    <PlusMinus02Icon size={20} /> Tambah Stok
                </button>
            </div>

            {/* Action Bar */}
            <div className="flex gap-4">
                <div className="relative flex-1">
                    <Search01Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input type="text" placeholder="Cari nama pupuk..." className="w-full pl-10 pr-4 py-3 bg-white border border-gray-100 rounded-xl text-sm" />
                </div>
                <button className="flex items-center gap-2 px-4 py-3 bg-white border border-gray-100 rounded-xl text-sm font-semibold text-gray-600">
                    <FilterIcon size={18} /> Filter
                </button>
            </div>

            {/* Main Table */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-50/50">
                        <tr className="text-xs text-gray-400 uppercase font-bold">
                            <th className="px-8 py-4">Nama Produk</th>
                            <th className="px-8 py-4">Gudang</th>
                            <th className="px-8 py-4">Sisa Stok</th>
                            <th className="px-8 py-4">Harga/Unit</th>
                            <th className="px-8 py-4">Status</th>
                            <th className="px-8 py-4 text-right">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {stocks.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-50/50 transition">
                                <td className="px-8 py-5 font-semibold text-sm">{item.nama}</td>
                                <td className="px-8 py-5 text-sm text-gray-600">{item.gudang}</td>
                                <td className="px-8 py-5 font-mono text-sm">{item.stok} Sak</td>
                                <td className="px-8 py-5 font-mono text-sm">{item.harga}</td>
                                <td className="px-8 py-5">
                                    <span className={`px-2 py-1 rounded-md text-[10px] font-bold ${item.stok <= item.min ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600"}`}>
                                        {item.stok <= item.min ? "Perlu Restock" : "Aman"}
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