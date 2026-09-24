import CtaBand from "@/components/cta-band";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import PageHeader from "@/components/page-header";
import ProductGrid from "@/components/products/product-grid";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
    title: "Products",
    description:
        "Gate, globe, ball, check, butterfly and knife-edge valves from Orbis Valves Industries — with material specifications, pressure ratings and dimensions for each.",
    path: "/products/",
});

export default function ProductsPage() {
    return (
        <>
            <PageHeader
                label="Products"
                title="Valves for isolation, regulation and backflow prevention."
                lead="Nine valve families in cast iron, carbon steel and stainless steel — each with full material, pressure and dimension data."
            />
            <section className="py-16 lg:py-24">
                <MaxWidthWrapper>
                    <ProductGrid />
                </MaxWidthWrapper>
            </section>
            <CtaBand />
        </>
    );
}
