import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import SectionLabel from "@/components/section-label";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
    return (
        <section className="relative -mt-16 overflow-hidden bg-paper pt-16 lg:-mt-[76px] lg:pt-[76px]">
            <div
                aria-hidden
                className="blueprint-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
            />
            <MaxWidthWrapper className="relative flex min-h-[70svh] flex-col justify-center py-24">
                <SectionLabel index="404">Page not found</SectionLabel>
                <h1 className="display-xl mt-8 max-w-4xl text-balance">
                    This line doesn&apos;t lead anywhere.
                </h1>
                <p className="mt-7 max-w-lg text-lg leading-relaxed text-muted-ink">
                    The page you&apos;re looking for may have moved. Try the
                    product range, or head back to the homepage.
                </p>
                <div className="mt-10 flex flex-wrap gap-3">
                    <Link href="/" className={buttonVariants({ size: "lg" })}>
                        Back to home
                        <ArrowRight className="transition-transform duration-300 group-hover/button:translate-x-1" />
                    </Link>
                    <Link
                        href="/products"
                        className={buttonVariants({ variant: "outline", size: "lg" })}
                    >
                        View products
                    </Link>
                </div>
            </MaxWidthWrapper>
        </section>
    );
}
