import Link from "next/link";

interface PageHeaderProps {
    title: string;
    breadcrumbs: { label: string; href: string }[];
}

export default function PageHeader({ title, breadcrumbs }: PageHeaderProps) {
    return (
        <div className="bg-gray-50 border-b border-gray-100 py-12 md:py-16">
            <div className="container mx-auto px-6">
                {/* Breadcrumb */}
                <nav className="flex mb-4 text-xs font-medium text-gray-500 uppercase tracking-widest">
                    {breadcrumbs.map((crumb, index) => (
                        <div key={crumb.href} className="flex items-center">
                            {index > 0 && <span className="mx-2 text-gray-300">/</span>}
                            <Link href={crumb.href} className="hover:text-black transition">
                                {crumb.label}
                            </Link>
                        </div>
                    ))}
                </nav>

                {/* Hero Title */}
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-black">
                    {title}
                </h1>
            </div>
        </div>
    );
}