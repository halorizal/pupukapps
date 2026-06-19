export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex">
            {/* Sisi Kiri: Branding/Cover */}
            <div className="hidden lg:flex lg:w-1/2 bg-primary relative overflow-hidden items-center justify-center p-12">
                <div className="relative z-10 text-white space-y-6 max-w-lg">
                    <h2 className="text-5xl font-bold tracking-tighter leading-tight">
                        Solusi Manajemen Stok Digital Anda.
                    </h2>
                    <p className="text-primary-foreground/80 text-lg">
                        PT. Rain Kreasi Media mempermudah operasional logistik dengan sistem yang terintegrasi, aman, dan efisien.
                    </p>
                </div>
                {/* Aksen Background */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-black/10 rounded-full blur-3xl -ml-20 -mb-20"></div>
            </div>

            {/* Sisi Kanan: Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-white">
                <div className="w-full max-w-sm">
                    {children}
                </div>
            </div>
        </div>
    );
}