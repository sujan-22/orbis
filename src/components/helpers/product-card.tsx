import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface ProductProps {
    size: "small" | "medium" | "large" | "full" | "square";
    isFeatured?: boolean;
    initialImage: string;
    className?: string;
    name: string;
    description: string;
    slug: string;
}

interface ImageOrPlaceholderProps {
    image: string;
    altText: string;
}

const Product: React.FC<ProductProps> = ({
    size,
    isFeatured = false,
    initialImage,
    className,
    name,
    description,
    slug,
}) => {
    return (
        <div className={cn("flex flex-col w-full", className)}>
            <div
                className={cn(
                    "relative overflow-hidden transition-shadow duration-200",
                    {
                        "aspect-[11/14]": isFeatured,
                        "aspect-[9/16]": !isFeatured,
                        "aspect-[1/1]": size === "square",
                        "w-full":
                            size === "full" ||
                            size === "medium" ||
                            size === "small" ||
                            size === "large",
                    }
                )}
            >
                <ImageOrPlaceholder image={initialImage} altText={name} />
            </div>
            <div className="mt-4">
                <p
                    className="text-xl font-semibold text-[#003B73]"
                    data-testid="product-title"
                >
                    {name}
                </p>
                <p className="mt-1 text-md text-[#004AAD] overflow-hidden text-ellipsis line-clamp-3">
                    {description}
                </p>
                <Link
                    href={`/products/${slug}`}
                    className=" pl-0 text-md text-[#003B73] italic"
                >
                    Read More
                </Link>
            </div>
        </div>
    );
};

export const ImageOrPlaceholder: React.FC<ImageOrPlaceholderProps> = ({
    image,
    altText,
}) => {
    return (
        <Image
            src={image}
            alt={altText}
            className="absolute inset-0 object-contain object-center hover:scale-95 transition-transform duration-300 rounded-xl border"
            draggable={false}
            quality={100}
            fill
        />
    );
};

export default Product;
