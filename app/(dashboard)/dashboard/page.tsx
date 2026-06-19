import { ArrowUpRight01Icon, PackageIcon, TruckDeliveryIcon, Alert01Icon, CheckmarkCircle01Icon } from "hugeicons-react";

export default function DashboardPage() {
    const stockAlerts = [
        { id: 1, name: "Pupuk Urea 50kg", stock: 120, unit: "Sak", status: "Normal" },
        { id: 2, name: "Pupuk NPK 16-16-16", stock: 15, unit: "Sak", status: "Kritis" },
        { id: 3, name: "Pupuk Organik Cair", stock: 45, unit: "Jerigen", status: "Normal" },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tighter">Dashboard Stok Pupuk</h1>
                <p className="text-gray-500">Monitoring operasional distribusi hari ini.</p>
            </div>

            {/* Grid Kartu Statistik Pupuk */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Total Stok" value="1,240 Sak" icon={<PackageIcon size={20} />} positive />
                <StatCard title="Dalam Pengiriman" value="340 Sak" icon={<TruckDeliveryIcon size={20} />} />
                <StatCard title="Stok Kritis" value="2 Jenis" icon={<Alert01Icon size={20} />} warning />
                <StatCard title="Terjual Hari Ini" value="85 Sak" icon={<CheckmarkCircle01Icon size={20} />} positive />
            </div>

            {/* Tabel Monitoring Stok */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <h2 className="font-bold text-lg mb-6">Status Gudang</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-xs text-gray-400 uppercase border-b border-gray-100">
                                <th className="pb-4">Nama Produk</th>
                                <th className="pb-4">Sisa Stok</th>
                                <th className="pb-4">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {stockAlerts.map((item) => (
                                <tr key={item.id} className="border-b border-gray-50 last:border-none">
                                    <td className="py-4 font-semibold">{item.name}</td>
                                    <td className="py-4 font-mono text-sm">{item.stock} {item.unit}</td>
                                    <td className="py-4">
                                        <span className={`px-2 py-1 rounded-md text-[10px] font-bold ${item.status === "Kritis" ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600"
                                            }`}>
                                            {item.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

function StatCard({ title, value, icon, positive, warning }: { title: string; value: string; icon: React.ReactNode; positive?: boolean; warning?: boolean }) {
    return (
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-start">
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{title}</p>
                <div className={`${positive ? "text-green-500" : warning ? "text-red-500" : "text-gray-400"}`}>{icon}</div>
            </div>
            <h3 className="text-2xl font-bold mt-4">{value}</h3>
        </div>
    );
}