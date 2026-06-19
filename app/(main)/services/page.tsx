const services = [
    {
        title: "Manajemen Inventaris",
        description: "Pantau stok pupuk secara real-time di seluruh gudang distribusi Anda dengan akurasi tinggi.",
    },
    {
        title: "Pelacakan Distribusi",
        description: "Sistem logistik yang terintegrasi untuk memantau pengiriman pupuk dari pusat hingga ke tangan petani.",
    },
    {
        title: "Analisis Penjualan",
        description: "Laporan data distribusi dan tren permintaan pupuk untuk pengambilan keputusan bisnis yang tepat.",
    },
];

export default function ServicesPage() {
    return (
        <div className="container mx-auto px-6 py-16 md:py-24">
            {/* Header Halaman */}
            <div className="max-w-2xl mb-16">
                <h1 className="text-4xl font-bold tracking-tighter mb-4">Solusi Distribusi Pupuk</h1>
                <p className="text-lg text-gray-600">
                    Digitalisasi rantai pasok pupuk untuk memastikan ketersediaan dan efisiensi distribusi yang lebih baik.
                </p>
            </div>

            {/* Grid Kartu Layanan */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="p-8 border border-gray-100 rounded-2xl bg-white hover:shadow-lg transition-all duration-300 group"
                    >
                        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition">
                            {service.title}
                        </h3>
                        <p className="text-gray-500 leading-relaxed text-sm">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}