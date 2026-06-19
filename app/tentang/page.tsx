import PageHeader from "../components/PageHeader";

export default function TentangPage() {
    return (
        <div>
            <PageHeader
                title="Tentang Kami"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Tentang", href: "/tentang" }
                ]}
            />

            <div className="container mx-auto px-6 py-16">
                <div className="max-w-3xl">
                    <h2 className="text-2xl font-bold tracking-tight mb-6">
                        Solusi Digital untuk Efisiensi Distribusi Pupuk
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        PT. Rain Kreasi Media hadir sebagai mitra strategis dalam digitalisasi rantai pasok pupuk.
                        Kami berkomitmen menghadirkan solusi teknologi yang transparan, akurat, dan efisien untuk
                        memastikan ketersediaan kebutuhan petani di seluruh Indonesia.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        Dengan keahlian di bidang pengembangan web dan sistem manajemen distribusi, kami
                        membangun ekosistem yang membantu distributor mengelola stok dan logistik secara real-time.
                    </p>
                </div>
            </div>
        </div>
    );
}