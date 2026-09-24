"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProductCard from "@/components/product-card";
import { PRODUCT_CATEGORIES, PRODUCTS, type ProductCategory } from "@/lib/products";
import { cn } from "@/lib/utils";

type Filter = "All" | ProductCategory;

const FILTERS: Filter[] = ["All", ...PRODUCT_CATEGORIES];

export default function ProductGrid() {
    const [filter, setFilter] = useState<Filter>("All");
    const visible =
        filter === "All"
            ? PRODUCTS
            : PRODUCTS.filter((p) => p.category === filter);

    return (
        <>
            <div
                role="group"
                aria-label="Filter by valve type"
                className="flex flex-wrap gap-2"
            >
                {FILTERS.map((f) => {
                    const count =
                        f === "All"
                            ? PRODUCTS.length
                            : PRODUCTS.filter((p) => p.category === f).length;
                    const active = f === filter;
                    return (
                        <button
                            key={f}
                            type="button"
                            aria-pressed={active}
                            onClick={() => setFilter(f)}
                            className={cn(
                                "inline-flex h-10 cursor-pointer items-center gap-2.5 border px-4 text-sm transition-colors",
                                active
                                    ? "border-ink bg-ink text-white"
                                    : "border-line bg-white text-ink hover:border-ink"
                            )}
                        >
                            {f === "All" ? "All valves" : f}
                            <span
                                className={cn(
                                    "font-mono text-[11px]",
                                    active ? "text-white/60" : "text-muted-ink"
                                )}
                            >
                                {count}
                            </span>
                        </button>
                    );
                })}
            </div>

            <motion.ul
                layout
                className="mt-12 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3"
            >
                <AnimatePresence mode="popLayout" initial={false}>
                    {visible.map((product, i) => (
                        <motion.li
                            key={product.slug}
                            layout
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <ProductCard product={product} priority={i < 3} />
                        </motion.li>
                    ))}
                </AnimatePresence>
            </motion.ul>
        </>
    );
}
