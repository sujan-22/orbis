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
                    <a
                        href="/assets/orbis_valves_brochure.pdf"
                        download
                        className="inline-block mt-4"
                    >
                        <Button className="bg-[#003B73] text-white cursor-pointer">
                            Download Brochure
                        </Button>
                    </a>
                </div>
            </div>
            {materials.length > 0 && (
                <div className="mt-10">
                    <h3 className="text-2xl font-semibold text-[#003B73]">
                        Material Specifications
                    </h3>
                    <ProductMaterialTable rows={materials} />
                </div>
            )}
        </div>
    );
}
