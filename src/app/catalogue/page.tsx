import Image from "next/image";
import InquiryForm from "@/components/inquiry-form";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import PageHeader from "@/components/page-header";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
    title: "Catalogue",
    description:
        "Download the Orbis Valves Industries brochure — gate, globe, ball, check, butterfly and knife-edge valves in one PDF.",
    path: "/catalogue/",
});

export default function Catalogue() {
    return (
        <>
            <PageHeader
                label="Catalogue"
                title="Download the Orbis brochure."
                lead="Share a few details and the PDF downloads straight away — ready to pass on to your engineering and procurement teams."
            />

            <section className="py-16 lg:py-28">
                <MaxWidthWrapper className="grid gap-16 lg:grid-cols-12 lg:gap-10">
                    <div className="lg:col-span-5">
                        <div className="group relative grid aspect-[4/5] place-items-center overflow-hidden bg-surface">
                            <div aria-hidden className="blueprint-grid absolute inset-0" />
                            <Image
                                src="/images/brochure-cover.webp"
                                alt="Cover of the Orbis Valves Industries brochure"
                                width={900}
                                height={1308}
                                priority
                                className="relative w-[58%] -rotate-3 animate-fade shadow-[0_40px_80px_-24px_rgb(11_23_38/0.45)] transition-transform duration-700 ease-out-expo group-hover:rotate-0"
                            />
                        </div>
                        <dl className="mt-6 grid grid-cols-3 border-t border-line">
                            {[
                                ["Format", "PDF"],
                                ["Pages", "11"],
                                ["Size", "14 MB"],
                            ].map(([label, value]) => (
                                <div
                                    key={label}
                                    className="border-b border-line py-4 pr-4"
                                >
                                    <dt className="eyebrow text-muted-ink">
                                        {label}
                                    </dt>
                                    <dd className="mt-1.5 text-lg font-medium tracking-[-0.02em]">
                                        {value}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    <div className="lg:col-span-6 lg:col-start-7">
                        <p className="eyebrow text-muted-ink">Your details</p>
                        <h2 className="display-md mt-4">
                            A few details, then it’s yours.
                        </h2>
                        <div className="mt-12">
                            <InquiryForm
                                source="catalogue"
                                submitLabel="Download brochure"
                            />
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>
        </>
    );
}
