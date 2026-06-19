import PageHeader from "../../components/PageHeader";

export default function KontakPage() {
    return (
        <main>
            <PageHeader
                title="Hubungi Kami"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Kontak Kami", href: "/kontak" }
                ]}
            />


            <div className="container mx-auto px-6 py-16 md:py-24">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="mb-16">
                        <h1 className="text-4xl font-bold tracking-tighter mb-4">Hubungi Kami</h1>
                        <p className="text-lg text-gray-600">
                            Punya pertanyaan mengenai sistem distribusi pupuk atau ingin berkolaborasi?
                            Tim kami siap membantu Anda.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {/* Sisi Kiri: Informasi Kontak */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="font-semibold text-black mb-2">Kantor Pusat</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Gunung Putri, Bogor<br />
                                    Jawa Barat, Indonesia
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-black mb-2">Email</h3>
                                <p className="text-gray-500 text-sm">support@pupukapp.test</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-black mb-2">Jam Operasional</h3>
                                <p className="text-gray-500 text-sm">Senin - Jumat, 09:00 - 17:00</p>
                            </div>
                        </div>

                        {/* Sisi Kanan: Form */}
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-black">Nama Lengkap</label>
                                <input type="text" className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition" placeholder="Nama Anda" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-black">Email</label>
                                <input type="email" className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition" placeholder="email@perusahaan.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-black">Pesan</label>
                                <textarea rows={4} className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition" placeholder="Jelaskan kebutuhan Anda..."></textarea>
                            </div>
                            <button className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition">
                                Kirim Pesan
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}