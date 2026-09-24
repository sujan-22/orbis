import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import CtaBand from "@/components/cta-band";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import ProductCard from "@/components/product-card";
import Reveal from "@/components/reveal";
import SectionLabel from "@/components/section-label";
import { BrochureDialog } from "@/components/helpers/brochure-dialog";
import { buttonVariants } from "@/components/ui/button";
import { PRODUCT_SPECS } from "@/lib/product-material";
import { PRODUCTS, productIndex } from "@/lib/products";
import { pageMetadata } from "@/lib/seo";
import type { SpecKeyValue, SpecTable as SpecTableType, RowBase } from "@/lib/specs/types";
import { pad2 } from "@/lib/utils";
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

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const product = PRODUCTS.find((p) => p.slug === slug);
    if (!product) return {};
    return pageMetadata({
        title: product.name,
        description: `${product.tagline}. ${product.description.replace(/"/g, "")}`,
        path: `/products/${product.slug}/`,
    });
}

export default async function ProductPage({ params }: PageProps) {
    const { slug } = await params;
    const index = PRODUCTS.findIndex((p) => p.slug === slug);
    const product = PRODUCTS[index];

    if (!product) notFound();

    const sections = PRODUCT_SPECS[slug] || [];
    const keyValues = sections.filter(
        (s): s is SpecKeyValue => s.kind === "kv"
    );
    const tables = sections.filter(
        (s): s is SpecTableType<RowBase> => s.kind === "table"
    );

    const next = PRODUCTS[(index + 1) % PRODUCTS.length];
    const sameCategory = PRODUCTS.filter(
        (p) => p.category === product.category && p.slug !== slug
    );
    const related = [
        ...sameCategory,
        ...PRODUCTS.filter(
            (p) => p.category !== product.category && p.slug !== slug
        ),
    ].slice(0, 3);

    return (
        <>
            <section className="relative border-b border-line bg-paper">
                <MaxWidthWrapper className="pb-16 pt-8 lg:pb-24 lg:pt-10">
                    <nav
                        aria-label="Breadcrumb"
                        className="eyebrow flex flex-wrap items-center gap-2 text-muted-ink"
                    >
                        <Link href="/" className="hover:text-ink">
                            Home
                        </Link>
                        <span aria-hidden>/</span>
                        <Link href="/products" className="hover:text-ink">
                            Products
                        </Link>
                        <span aria-hidden>/</span>
                        <span aria-current="page" className="text-ink">
                            {product.name}
                        </span>
                    </nav>

                    <div className="mt-8 grid gap-12 lg:mt-10 lg:grid-cols-12 lg:gap-10">
                        <div className="lg:col-span-7">
                            <div className="relative aspect-square overflow-hidden bg-white lg:sticky lg:top-28">
                                <div aria-hidden className="blueprint-grid absolute inset-0" />
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    priority
                                    draggable={false}
                                    className="animate-fade object-contain p-[10%]"
                                />
                                <span className="eyebrow absolute left-5 top-5 text-ink">
                                    Fig. {productIndex(product.slug)}
                                </span>
                                <span className="eyebrow absolute right-5 top-5 text-muted-ink">
                                    {product.category} valve
                                </span>
                                {product.additionalInfo && (
                                    <span className="eyebrow absolute bottom-5 left-5 text-muted-ink">
                                        Class {product.additionalInfo}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="min-w-0 lg:col-span-5">
                            <p className="eyebrow animate-rise text-muted-ink">
                                {productIndex(product.slug)} — {product.category}{" "}
                                valve
                            </p>
                            <h1 className="display-lg mt-5 animate-rise text-balance text-ink [animation-delay:60ms]">
                                {product.name}
                            </h1>
                            <p className="mt-5 animate-rise text-xl tracking-[-0.01em] text-ink [animation-delay:120ms]">
                                {product.tagline}.
                            </p>
                            <p className="mt-5 animate-rise leading-relaxed text-muted-ink [animation-delay:180ms]">
                                {product.description}
                            </p>
                            <div className="mt-9 flex animate-rise flex-wrap gap-3 [animation-delay:240ms]">
                                <Link
                                    href={`/contact?product=${product.slug}`}
                                    className={buttonVariants()}
                                >
                                    Request a quote
                                    <ArrowRight className="transition-transform duration-300 group-hover/button:translate-x-1" />
                                </Link>
                                <BrochureDialog />
                            </div>

                            {keyValues.map((kv) => (
                                <div
                                    key={kv.id}
                                    className="mt-14 animate-rise [animation-delay:300ms]"
                                >
                                    <h2 className="eyebrow mb-4 text-ink">
                                        {kv.title}
                                    </h2>
                                    <KeyValueTable section={kv} />
                                    {kv.note && (
                                        <p className="mt-3 text-sm text-muted-ink">
                                            {kv.note}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>

            {tables.length > 0 && (
                <section className="py-20 lg:py-28">
                    <MaxWidthWrapper className="grid gap-12 lg:grid-cols-12 lg:gap-10">
                        <aside className="hidden lg:col-span-3 lg:block">
                            <div className="sticky top-28">
                                <SectionLabel>Specifications</SectionLabel>
                                <ol className="mt-7 space-y-1 border-l border-line">
                                    {tables.map((t, i) => (
                                        <li key={t.id}>
                                            <a
                                                href={`#${t.id}`}
                                                className="-ml-px flex gap-3 border-l border-transparent py-1.5 pl-4 text-sm text-muted-ink transition-colors hover:border-ink hover:text-ink"
                                            >
                                                <span className="eyebrow pt-0.5">
                                                    {pad2(i + 1)}
                                                </span>
                                                {t.title}
                                            </a>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </aside>

                        <div className="min-w-0 space-y-20 lg:col-span-9 lg:space-y-24">
                            {tables.map((t, i) => (
                                <Reveal
                                    as="section"
                                    key={t.id}
                                    id={t.id}
                                    className="scroll-mt-28"
                                >
                                    <div className="flex items-baseline gap-4 border-b border-ink pb-4">
                                        <span className="eyebrow text-muted-ink">
                                            {pad2(i + 1)}
                                        </span>
                                        <h2 className="text-2xl font-medium tracking-[-0.025em] text-ink lg:text-[1.75rem]">
                                            {t.title}
                                        </h2>
                                    </div>
                                    <SpecTable section={t} />
                                    {t.note && (
                                        <p className="eyebrow mt-4 text-muted-ink">
                                            Note — {t.note}
                                        </p>
                                    )}
                                </Reveal>
                            ))}
                        </div>
                    </MaxWidthWrapper>
                </section>
            )}

            <section className="border-t border-line bg-paper py-20 lg:py-28">
                <MaxWidthWrapper>
                    <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                        <div>
                            <SectionLabel>Keep exploring</SectionLabel>
                            <h2 className="display-md mt-6">
                                {sameCategory.length > 0
                                    ? `More ${product.category.toLowerCase()} valves & related products`
                                    : "Related products"}
                            </h2>
                        </div>
                        <Link
                            href={`/products/${next.slug}`}
                            className="group flex items-center gap-5 border-b border-ink/25 pb-3 transition-colors hover:border-ink"
                        >
                            <span>
                                <span className="eyebrow block text-muted-ink">
                                    Next product
                                </span>
                                <span className="mt-1 block text-lg font-medium tracking-[-0.02em]">
                                    {next.name}
                                </span>
                            </span>
                            <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </div>
                    <ul className="mt-14 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
                        {related.map((p) => (
                            <li key={p.slug}>
                                <ProductCard product={p} />
                            </li>
                        ))}
                    </ul>
                </MaxWidthWrapper>
            </section>

            <CtaBand />
        </>
    );
}
