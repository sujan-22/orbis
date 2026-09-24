import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { type Product, productIndex } from "@/lib/products";
import { cn } from "@/lib/utils";

interface ProductCardProps {
    product: Product;
    priority?: boolean;
    className?: string;
}

const ProductCard = ({ product, priority, className }: ProductCardProps) => (
    <Link
        href={`/products/${product.slug}`}
        className={cn("group block", className)}
    >
        <div className="relative aspect-square overflow-hidden bg-surface">
            <div
                aria-hidden
                className="blueprint-grid absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
            />
            <Image
                src={product.image}
                alt={product.name}
                fill
                priority={priority}
                draggable={false}
                className="object-contain p-[13%] transition-transform duration-700 ease-out-expo group-hover:scale-[1.06]"
            />
            <span className="eyebrow absolute left-4 top-4 text-ink">
                {productIndex(product.slug)}
            </span>
            <span className="eyebrow absolute right-4 top-4 text-muted-ink">
                {product.category}
            </span>
            <span className="absolute bottom-4 right-4 grid size-10 translate-y-2 place-items-center bg-ink text-white opacity-0 transition duration-500 ease-out-expo group-hover:translate-y-0 group-hover:opacity-100">
                <ArrowUpRight className="size-4" />
            </span>
        </div>
        <h3 className="mt-5 text-lg font-medium tracking-[-0.02em] text-ink decoration-1 underline-offset-4 group-hover:underline">
            {product.name}
        </h3>
        <p className="mt-1 text-sm text-muted-ink">{product.tagline}</p>
    </Link>
);

export default ProductCard;
