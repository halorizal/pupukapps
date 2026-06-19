import PageHeader from "../../components/PageHeader";
import {
    Package01Icon,
    Location01Icon,
    Layers01Icon,
    CheckmarkBadge01Icon,
    Calendar01Icon,
    ShoppingCart01Icon, // Ikon baru untuk beli
    DocumentValidationIcon // Ikon untuk spesifikasi
} from "hugeicons-react";

const getStokDetail = (s: string) => {
    return {
        nama: s.replace(/-/g, ' ').toUpperCase(),
        gudang: "Bogor Utama",
        status: "Tersedia",
        jumlah: "500 Ton",
        lastUpdated: "19 Juni 2026",
        deskripsi: "Pupuk Urea kualitas tinggi dengan kadar Nitrogen 46% untuk mendukung pertumbuhan vegetatif tanaman secara optimal.",
        spesifikasi: {
            kadarNitrogen: "46%",
            bentuk: "Prill/Granul",
            warna: "Putih",
            kemasan: "50kg"
        }
    };
};

export default async function StokDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = getStokDetail(slug);

    return (
        <main>
            <PageHeader
                title={`Detail: ${data.nama}`}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Stok", href: "/stok" },
                    { label: data.nama, href: `/stok/${slug}` }
                ]}
            />

            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Kolom Kiri: Informasi Utama */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
                            <h1 className="text-4xl font-bold tracking-tighter mb-4">{data.nama}</h1>
                            <span className="px-4 py-2 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600 flex items-center gap-2 w-fit mb-6">
                                <CheckmarkBadge01Icon size={14} /> {data.status}
                            </span>

                            <p className="text-gray-600 leading-relaxed mb-8">{data.deskripsi}</p>

                            <h3 className="font-bold mb-4 flex items-center gap-2">
                                <DocumentValidationIcon size={20} className="text-primary" /> Spesifikasi
                            </h3>
                            <div className="grid grid-cols-2 gap-4 bg-gray-50 p-6 rounded-2xl">
                                {Object.entries(data.spesifikasi).map(([key, value]) => (
                                    <div key={key}>
                                        <p className="text-[10px] uppercase text-gray-400 font-bold">{key.replace(/([A-Z])/g, ' $1')}</p>
                                        <p className="font-semibold text-sm">{value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Kolom Kanan: Summary & Action */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl sticky top-24">
                            <p className="text-sm text-gray-500 mb-1">Stok Terkini</p>
                            <p className="text-4xl font-bold mb-6">{data.jumlah}</p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3 text-sm text-gray-600">
                                    <Location01Icon size={20} className="text-primary" /> {data.gudang}
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-600">
                                    <Calendar01Icon size={20} className="text-primary" /> Update: {data.lastUpdated}
                                </div>
                            </div>

                            <button className="w-full flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary-hover transition">
                                <ShoppingCart01Icon size={20} /> Beli Sekarang
                            </button>
                            <p className="text-center text-[10px] text-gray-400 mt-4">Harga dapat berubah sewaktu-waktu</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}