import Link from "next/link";
import PageHeader from "../components/PageHeader";
import {
    Package01Icon,
    Location01Icon,
    Layers01Icon,
    CheckmarkBadge01Icon,
    Alert02Icon
} from "hugeicons-react";

const stokPupuk = [
    { slug: "pupuk-urea", nama: "Pupuk Urea", gudang: "Bogor Utama", status: "Tersedia", jumlah: "500 Ton" },
    { slug: "npk-phonska", nama: "NPK Phonska", gudang: "Cibinong", status: "Menipis", jumlah: "20 Ton" },
    { slug: "pupuk-organik", nama: "Pupuk Organik", gudang: "Gunung Putri", status: "Tersedia", jumlah: "150 Ton" },
];

export default function StokPage() {
    return (
        <main>
            <PageHeader
                title="Informasi Stok Pupuk"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Stok", href: "/stok" }
                ]}
            />

            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {stokPupuk.map((item, i) => (
                        <Link key={i} href={`/stok/${item.slug}`}>
                            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-gray-50 rounded-2xl text-primary">
                                        <Package01Icon size={24} />
                                    </div>
                                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase flex items-center gap-1 ${item.status === "Tersedia" ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"
                                        }`}>
                                        {item.status === "Tersedia" ? <CheckmarkBadge01Icon size={12} /> : <Alert02Icon size={12} />}
                                        {item.status}
                                    </span>
                                </div>

                                <h3 className="text-lg font-bold text-gray-900 mb-4">{item.nama}</h3>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <Location01Icon size={16} />
                                        <span>Gudang: {item.gudang}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <Layers01Icon size={16} />
                                        <span>Stok: <span className="font-bold text-black">{item.jumlah}</span></span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}