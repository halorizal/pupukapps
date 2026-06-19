"use client";

import { useState } from "react";
import Image from "next/image"; // Pastikan menggunakan Next/Image untuk performa
import { WhatsappIcon, Cancel01Icon } from "hugeicons-react";

export default function FloatingWhatsApp() {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenWhatsApp = () => {
        const phoneNumber = "62812xxxxxxxxx";
        const message = "Halo, ada yang bisa saya bantu?";
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
    };

    return (
        <div className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-50 flex flex-col items-end gap-4">
            {/* Drawer Pesan */}
            {isOpen && (
                <div className="bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 w-72 animate-in slide-in-from-bottom-4 duration-300">
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                            {/* Gambar Profil/Avatar */}
                            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary">
                                <Image
                                    src="/avatar-rain.jpg" // Ganti dengan path foto Anda di folder /public
                                    alt="Admin Rain"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm">Admin Rain</h4>
                                <div className="flex items-center gap-1">
                                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                    <span className="text-[10px] text-green-600 font-medium">Sedang Online</span>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-black">
                            <Cancel01Icon size={16} />
                        </button>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-xl mb-4">
                        <p className="text-sm text-gray-600">
                            Halo! 👋 Ada yang bisa saya bantu terkait layanan PT. Rain Kreasi Media?
                        </p>
                    </div>

                    <button
                        onClick={handleOpenWhatsApp}
                        className="w-full bg-primary text-white text-sm font-semibold py-3 rounded-xl hover:bg-primary-hover transition flex items-center justify-center gap-2"
                    >
                        <WhatsappIcon size={18} />
                        Chat Sekarang
                    </button>
                </div>
            )}

            {/* Tombol Floating */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
            >
                <WhatsappIcon size={28} />
            </button>
        </div>
    );
}