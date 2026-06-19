"use client";

import { useSearchParams } from "next/navigation";
import PageHeader from "../../components/PageHeader";
import {
    UserCircleIcon,
    Location01Icon,
    Package01Icon,
    CreditCardIcon
} from "hugeicons-react";

export default function CheckoutPage() {
    const searchParams = useSearchParams();
    const productSlug = searchParams.get("product") || "Produk";

    return (
        <main>
            <PageHeader
                title="Checkout Pesanan"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Checkout", href: "/checkout" }
                ]}
            />

            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Kolom Kiri: Form Data Pengiriman */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <UserCircleIcon className="text-primary" /> Informasi Penerima
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input type="text" placeholder="Nama Lengkap" className="w-full p-4 border border-gray-200 rounded-xl" />
                                <input type="text" placeholder="Nomor WhatsApp" className="w-full p-4 border border-gray-200 rounded-xl" />
                                <textarea placeholder="Alamat Lengkap" className="w-full p-4 border border-gray-200 rounded-xl md:col-span-2 h-32" />
                            </div>
                        </div>
                    </div>

                    {/* Kolom Kanan: Ringkasan Pesanan */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl sticky top-24">
                            <h3 className="font-bold mb-6 flex items-center gap-2">
                                <Package01Icon className="text-primary" /> Ringkasan
                            </h3>
                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Produk</span>
                                    <span className="font-semibold">{productSlug.replace(/-/g, ' ')}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Biaya Kirim</span>
                                    <span className="font-semibold">Rp 0</span>
                                </div>
                            </div>
                            <div className="border-t pt-4 mb-8">
                                <div className="flex justify-between font-bold text-lg">
                                    <span>Total</span>
                                    <span>Rp 0</span>
                                </div>
                            </div>
                            <button className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary-hover transition flex items-center justify-center gap-2">
                                <CreditCardIcon size={20} /> Konfirmasi Pesanan
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}