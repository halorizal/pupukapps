import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100">
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">

                {/* Logo - Gunakan warna primary untuk identitas brand */}
                <Link href="/" className="text-xl font-bold tracking-tighter text-primary">
                    Pupuk Kita
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
                    <Link href="/services" className="hover:text-primary transition">Layanan</Link>
                    <Link href="/tentang" className="hover:text-primary transition">Tentang</Link>
                    <Link href="/kontak" className="hover:text-primary transition">Kontak</Link>
                    <Link href="/stok" className="hover:text-primary transition">Stok</Link>
                </div>

                {/* CTA Button - Hijau Emerald Corporate */}
                <Link
                    href="/kontak"
                    className="bg-primary text-white px-5 py-2 text-sm font-medium hover:bg-primary-hover transition rounded-full"
                >
                    Mulai Proyek
                </Link>
            </div>
        </nav>
    );
}