import Image from "next/image";
import { PRODUCTS } from "@/lib/products";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { PRODUCT_MATERIALS } from "@/lib/product-material";
import ProductMaterialTable from "./components/material-table";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: PageProps) {
    const { slug } = await params;
    const product = PRODUCTS.find((p) => p.slug === slug);
    const materials = PRODUCT_MATERIALS[slug] || [];

    if (!product) notFound();

    return (
        <div>
            <h2 className="text-3xl font-bold mb-8 text-[#003B73] text-left">
                {product.name}
                {product.additionalInfo && (
                    <p className="text-sm text-[#004AAD] leading-relaxed">
                        ({product.additionalInfo})
                    </p>
                )}
            </h2>
            <div className="relative w-full h-[calc(100vh-6rem)] mb-8">
                <Image
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 object-contain object-center"
                    draggable={false}
                    quality={100}
                    fill
                />
            </div>
            <p className="text-md text-[#004AAD] leading-relaxed">
                {product.description}
            </p>
            <a
                href="/assets/orbis_valves_brochure.pdf"
                download
                className="inline-block mt-4"
            >
                <Button className="bg-[#003B73] cursor-pointer text-white">
                    Download Brochure
                </Button>
            </a>
            {materials.length > 0 && (
                <div className="mt-4">
                    <h3 className="text-2xl font-semibold mt-12 text-[#003B73]">
                        Material Specifications
                    </h3>
                    <ProductMaterialTable rows={materials} />
                </div>
            )}
        </div>
    );
}
