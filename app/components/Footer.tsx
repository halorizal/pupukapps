// src/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-primary text-white rounded-t-[3rem]">
            <div className="container mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-12">

                {/* Kolom 1: Branding */}
                <div className="space-y-4">
                    <h2 className="text-xl font-bold tracking-tighter">Pupuk Kita</h2>
                    <p className="text-sm text-emerald-100 leading-relaxed max-w-xs">
                        Solusi digital inovatif untuk kebutuhan operasional bisnis Anda.
                    </p>
                </div>

                {/* Kolom 2: Layanan */}
                <div className="space-y-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wider">Layanan</h3>
                    <ul className="space-y-2 text-sm text-emerald-100">
                        <li><Link href="/services/web-dev" className="hover:text-white transition">RainDev</Link></li>
                        <li><Link href="/services/photography" className="hover:text-white transition">RainStudio</Link></li>
                        <li><Link href="/services/video" className="hover:text-white transition">RainPost</Link></li>
                    </ul>
                </div>

                {/* Kolom 3: Perusahaan */}
                <div className="space-y-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wider">Perusahaan</h3>
                    <ul className="space-y-2 text-sm text-emerald-100">
                        <li><Link href="/tentang" className="hover:text-white transition">Tentang Kami</Link></li>
                        <li><Link href="/kontak" className="hover:text-white transition">Kontak</Link></li>
                        <li><Link href="/karir" className="hover:text-white transition">Karir</Link></li>
                    </ul>
                </div>

                {/* Kolom 4: Lokasi */}
                <div className="space-y-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wider">Lokasi</h3>
                    <p className="text-sm text-emerald-100">
                        Gunung Putri,<br />
                        Bogor, Indonesia
                    </p>
                </div>
            </div>

            {/* Baris Bawah */}
            <div className="container mx-auto px-6 pb-12 pt-4 border-t border-emerald-800 text-xs text-emerald-200 flex flex-col md:flex-row justify-between items-center gap-4">
                <p>© {new Date().getFullYear()} PT. Rain Kreasi Media. All rights reserved.</p>
                <div className="flex gap-6">
                    <Link href="/privacy" className="hover:text-white transition">Privasi</Link>
                    <Link href="/terms" className="hover:text-white transition">Ketentuan</Link>
                </div>
            </div>
        </footer>
    );
}