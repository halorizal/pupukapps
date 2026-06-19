// app/(main)/layout.tsx
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex bg-gray-50">
            <aside className="w-64 border-r border-gray-200 bg-white hidden md:block">
                <Sidebar />
            </aside>

            <div className="flex-1 flex flex-col">
                <Topbar />
                <main className="p-8 flex-1 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}