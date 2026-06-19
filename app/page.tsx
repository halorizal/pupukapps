// src/app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 md:py-32 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-black mb-6">
          Distribusi Pupuk <br />
          <span className="text-primary">Menjadi Lebih Cerdas.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Platform manajemen distribusi pupuk terintegrasi untuk efisiensi rantai pasok yang lebih transparan, cepat, dan akurat.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/kontak" className="bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-primary-hover transition">
            Mulai Sekarang
          </Link>
          <Link href="/services" className="bg-white border border-gray-200 px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition">
            Lihat Solusi
          </Link>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {/* Card Besar Utama */}
          <div className="md:col-span-2 md:row-span-2 bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col justify-end">
            <h3 className="text-2xl font-bold mb-2">Manajemen Stok Real-time</h3>
            <p className="text-gray-600">Pantau ketersediaan pupuk di setiap titik gudang secara langsung tanpa delay.</p>
          </div>

          {/* Card Kecil */}
          <div className="md:col-span-2 bg-primary p-8 rounded-3xl flex flex-col justify-center text-white">
            <h3 className="text-2xl font-bold mb-2">Optimasi Logistik</h3>
            <p className="text-emerald-100">Jalur distribusi yang lebih efektif untuk menekan biaya operasional.</p>
          </div>

          {/* Card Kecil */}
          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col justify-center">
            <h3 className="font-bold text-lg mb-1">Analisis Data</h3>
            <p className="text-gray-500 text-sm">Laporan performa distribusi.</p>
          </div>

          {/* Card Kecil */}
          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col justify-center">
            <h3 className="font-bold text-lg mb-1">Keamanan</h3>
            <p className="text-gray-500 text-sm">Data transaksi terenkripsi.</p>
          </div>
        </div>
      </section>
    </main>
  );
}