"use client";

import { Download01Icon, Calendar03Icon, Analytics01Icon, PackageIcon } from "hugeicons-react";

export default function LaporanPage() {
    return (
        <div className="space-y-8">
            {/* Header Laporan */}
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-2xl font-bold tracking-tighter">Laporan Operasional</h1>
                    <p className="text-gray-500 text-sm">Analisis performa distribusi dan penjualan pupuk.</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-100 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-50">
                        <Calendar03Icon size={18} /> Juni 2026
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary/90">
                        <Download01Icon size={18} /> Export PDF
                    </button>
                </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <KPICard title="Total Penjualan" value="Rp 245.5jt" icon={<Analytics01Icon size={20} />} trend="+12.5%" />
                <KPICard title="Stok Keluar" value="1,240 Sak" icon={<PackageIcon size={20} />} trend="+8.2%" />
                <KPICard title="Efisiensi" value="94%" icon={<Analytics01Icon size={20} />} trend="+2.1%" />
                <KPICard title="Retur Barang" value="12 Sak" icon={<PackageIcon size={20} />} trend="-0.5%" negative />
            </div>

            {/* Section Laporan Detail */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                    <h2 className="font-bold text-lg mb-6">Tren Penjualan Pupuk</h2>
                    <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-100 rounded-2xl text-gray-400 text-sm">
                        [Grafik Penjualan Bulanan Akan Muncul Di Sini]
                    </div>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                    <h2 className="font-bold text-lg mb-6">Pupuk Terlaris</h2>
                    <div className="space-y-6">
                        <ProductProgress name="Urea 50kg" percent={85} />
                        <ProductProgress name="NPK 16-16-16" percent={60} />
                        <ProductProgress name="Organik Cair" percent={45} />
                    </div>
                </div>
            </div>
        </div>
    );
}

function KPICard({ title, value, icon, trend, negative }: { title: string; value: string; icon: React.ReactNode; trend: string; negative?: boolean }) {
    return (
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex justify-between items-start mb-4 text-gray-400">
                {icon}
                <span className={`text-[10px] font-bold ${negative ? "text-red-500" : "text-green-500"}`}>{trend}</span>
            </div>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{title}</p>
            <h3 className="text-xl font-bold mt-1">{value}</h3>
        </div>
    );
}

function ProductProgress({ name, percent }: { name: string; percent: number }) {
    return (
        <div>
            <div className="flex justify-between text-xs font-bold mb-2">
                <span>{name}</span>
                <span className="text-gray-400">{percent}%</span>
            </div>
            <div className="w-full h-2 bg-gray-50 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: `${percent}%` }}></div>
            </div>
        </div>
    );
}