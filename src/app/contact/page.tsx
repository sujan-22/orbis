import { ArrowUpRight } from "lucide-react";
import InquiryForm from "@/components/inquiry-form";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import PageHeader from "@/components/page-header";
import { SITE } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
    title: "Contact",
    description: `Contact Orbis Valves Industries in Odhav, Ahmedabad. Call ${SITE.phone.display} or email ${SITE.email} for quotes and technical enquiries.`,
    path: "/contact/",
});

export default function ContactUs() {
    return (
        <>
            <PageHeader
                label="Contact"
                title="Let’s talk flow control."
                lead="Tell us about your application — size, pressure class, media and material — and our team will recommend the right valve."
            />

            <section className="py-16 lg:py-28">
                <MaxWidthWrapper className="grid gap-16 lg:grid-cols-12 lg:gap-10">
                    <div className="lg:col-span-4">
                        <dl className="border-t border-line">
                            <div className="border-b border-line py-7">
                                <dt className="eyebrow text-muted-ink">Call</dt>
                                <dd className="mt-3">
                                    <a
                                        href={SITE.phone.href}
                                        className="text-2xl font-medium tracking-[-0.025em] transition-colors hover:text-navy"
                                    >
                                        {SITE.phone.display}
                                    </a>
                                </dd>
                            </div>
                            <div className="border-b border-line py-7">
                                <dt className="eyebrow text-muted-ink">Email</dt>
                                <dd className="mt-3">
                                    <a
                                        href={`mailto:${SITE.email}`}
                                        className="break-all text-2xl font-medium tracking-[-0.025em] transition-colors hover:text-navy"
                                    >
                                        {SITE.email}
                                    </a>
                                </dd>
                            </div>
                            <div className="border-b border-line py-7">
                                <dt className="eyebrow text-muted-ink">Visit</dt>
                                <dd className="mt-3">
                                    <address className="not-italic text-lg leading-relaxed text-ink">
                                        {SITE.address.lines.map((line) => (
                                            <span key={line} className="block">
                                                {line}
                                            </span>
                                        ))}
                                    </address>
                                    <a
                                        href={SITE.mapsUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group mt-4 inline-flex items-center gap-1.5 border-b border-ink/25 pb-1 text-[0.9375rem] font-medium transition-colors hover:border-ink"
                                    >
                                        Get directions
                                        <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                    </a>
                                </dd>
                            </div>
                        </dl>
                    </div>

                    <div className="lg:col-span-7 lg:col-start-6">
                        <div className="border-t border-ink pt-10">
                            <p className="eyebrow text-muted-ink">
                                Send an enquiry
                            </p>
                            <div className="mt-10">
                                <InquiryForm source="contact" />
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>

            <section aria-label="Map" className="border-t border-line">
                <div className="relative h-[420px] w-full bg-surface lg:h-[520px]">
                    <iframe
                        title={`Map showing ${SITE.name}, ${SITE.address.lines.join(", ")}`}
                        src={SITE.mapsEmbedUrl}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="absolute inset-0 h-full w-full border-0 grayscale transition-[filter] duration-700 hover:grayscale-0"
                    />
                </div>
            </section>
        </>
    );
}
