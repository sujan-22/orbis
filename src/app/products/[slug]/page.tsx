import Image from "next/image";
import { PRODUCTS } from "@/lib/products";
import { notFound } from "next/navigation";
import { PRODUCT_SPECS } from "@/lib/product-material";
import { BrochureDialog } from "@/components/helpers/brochure-dialog";
import SpecTable from "./components/spec-table";
import KeyValueTable from "./components/keyvalue-table";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
    return PRODUCTS.map((product) => ({
        slug: product.slug,
    }));
}

export default async function ProductPage({ params }: PageProps) {
    const { slug } = await params;
    const product = PRODUCTS.find((p) => p.slug === slug);
    const sections = PRODUCT_SPECS[slug] || [];

    if (!product) notFound();

    return (
        <div>
            <div className="flex flex-col lg:flex-row gap-8 mb-8">
                {/* Image */}
                <div className="relative w-full lg:w-1/2 aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain object-center"
                        draggable={false}
                        quality={100}
                    />
                </div>
                <div
                    className="w-full lg:w-1/2 flex flex-col
                "
                >
                    <h2 className="text-3xl font-bold text-[#003B73]">
                        {product.name}
                    </h2>
                    {product.additionalInfo && (
                        <p className="mt-1 text-sm text-[#004AAD]">
                            ({product.additionalInfo})
                        </p>
                    )}
                    <p className="mt-4 text-md text-[#004AAD] leading-relaxed">
                        {product.description}
                    </p>
                    <div className="inline-block mt-4">
                        <BrochureDialog />
                    </div>
                </div>
            </div>
            {sections.map((s) => (
                <div key={s.id} className="mt-10">
                    <h3 className="text-2xl font-semibold text-[#003B73]">
                        {s.title}
                    </h3>
                    {s.kind === "table" ? (
                        <SpecTable section={s} />
                    ) : (
                        <KeyValueTable section={s} />
                    )}
                    {s.note ? (
                        <p className="mt-2 text-sm text-[#004AAD]">{s.note}</p>
                    ) : null}
                </div>
            ))}
        </div>
    );
}
