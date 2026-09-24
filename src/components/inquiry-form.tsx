"use client";

import { useEffect, useId, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowRight, Check, ChevronDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PRODUCTS } from "@/lib/products";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

const formSchema = z.object({
    name: z.string().trim().min(1, "Please enter your name"),
    email: z.string().trim().email("Please enter a valid email"),
    phone: z.string().trim().min(7, "Please enter a phone number"),
    company: z.string().optional(),
    product: z.string().optional(),
    message: z.string().optional(),
    // Formspree honeypot: real visitors never see or fill this.
    _gotcha: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

type Source = "contact" | "catalogue" | "brochure";

const SUBJECTS: Record<Source, string> = {
    contact: "Website enquiry",
    catalogue: "Catalogue download",
    brochure: "Brochure download",
};

export function downloadBrochure() {
    const link = document.createElement("a");
    link.href = SITE.brochure;
    link.download = "orbis_valves_brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

const inputClasses =
    "mt-2 block w-full rounded-none border-0 border-b border-line bg-transparent px-0 py-3 text-ink outline-none transition-[border-color,box-shadow] duration-300 placeholder:text-muted-ink/50 focus:border-ink focus:shadow-[0_1px_0_0_var(--ink)] focus-visible:outline-none aria-[invalid=true]:border-destructive";

function Field({
    label,
    htmlFor,
    error,
    className,
    children,
}: {
    label: string;
    htmlFor: string;
    error?: string;
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <div className={className}>
            <label htmlFor={htmlFor} className="eyebrow text-muted-ink">
                {label}
            </label>
            {children}
            {error && (
                <p className="mt-2 text-sm text-destructive" role="alert">
                    {error}
                </p>
            )}
        </div>
    );
}

interface InquiryFormProps {
    source: Source;
    compact?: boolean;
    submitLabel?: string;
}

export default function InquiryForm({
    source,
    compact = false,
    submitLabel = "Send enquiry",
}: InquiryFormProps) {
    const id = useId();
    const [status, setStatus] = useState<"idle" | "success" | "error">(
        "idle"
    );
    const isContact = source === "contact";

    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            company: "",
            product: "",
            message: "",
            _gotcha: "",
        },
    });

    // Product pages link to /contact?product=<slug>; preselect it.
    useEffect(() => {
        if (!isContact) return;
        const slug = new URLSearchParams(window.location.search).get("product");
        const match = PRODUCTS.find((p) => p.slug === slug);
        if (match) setValue("product", match.name);
    }, [isContact, setValue]);

    const onSubmit = async (data: FormData) => {
        setStatus("idle");
        try {
            const res = await fetch(SITE.formEndpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    ...data,
                    source,
                    _subject: `${SUBJECTS[source]} — ${data.name}`,
                }),
            });

            if (!res.ok) {
                const text = await res.text();
                throw new Error(text || "Formspree error");
            }

            reset();
            setStatus("success");
            if (!isContact) downloadBrochure();
        } catch (err: unknown) {
            console.error(err);
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <div role="status" className="flex flex-col items-start">
                <span className="grid size-12 place-items-center bg-ink text-white">
                    <Check className="size-5" />
                </span>
                <h3 className="display-md mt-7">Thank you.</h3>
                <p className="mt-4 max-w-md leading-relaxed text-muted-ink">
                    {isContact
                        ? "Your enquiry is on its way to our team. We’ll get back to you shortly."
                        : "Your download should start automatically. If it doesn’t, use the button below."}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                    {!isContact && (
                        <a
                            href={SITE.brochure}
                            download
                            className="inline-flex h-12 items-center gap-3 bg-ink px-6 text-[0.9375rem] font-medium text-white transition-colors hover:bg-navy"
                        >
                            <Download className="size-4" />
                            Download PDF
                        </a>
                    )}
                    {isContact && (
                        <Button
                            variant="outline"
                            onClick={() => setStatus("idle")}
                        >
                            Send another enquiry
                        </Button>
                    )}
                </div>
            </div>
        );
    }

    const fieldId = (name: string) => `${id}-${name}`;
    const gridClasses = compact
        ? "grid gap-7"
        : "grid gap-x-8 gap-y-9 sm:grid-cols-2";

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className={gridClasses}>
                <Field
                    label="Name *"
                    htmlFor={fieldId("name")}
                    error={errors.name?.message}
                >
                    <input
                        id={fieldId("name")}
                        autoComplete="name"
                        aria-invalid={!!errors.name}
                        className={cn(inputClasses, !compact && "text-lg")}
                        {...register("name")}
                    />
                </Field>
                <Field label="Company" htmlFor={fieldId("company")}>
                    <input
                        id={fieldId("company")}
                        autoComplete="organization"
                        className={cn(inputClasses, !compact && "text-lg")}
                        {...register("company")}
                    />
                </Field>
                <Field
                    label="Email *"
                    htmlFor={fieldId("email")}
                    error={errors.email?.message}
                >
                    <input
                        id={fieldId("email")}
                        type="email"
                        autoComplete="email"
                        aria-invalid={!!errors.email}
                        className={cn(inputClasses, !compact && "text-lg")}
                        {...register("email")}
                    />
                </Field>
                <Field
                    label="Phone *"
                    htmlFor={fieldId("phone")}
                    error={errors.phone?.message}
                >
                    <input
                        id={fieldId("phone")}
                        type="tel"
                        autoComplete="tel"
                        aria-invalid={!!errors.phone}
                        className={cn(inputClasses, !compact && "text-lg")}
                        {...register("phone")}
                    />
                </Field>

                {isContact && (
                    <>
                        <Field
                            label="Product of interest"
                            htmlFor={fieldId("product")}
                            className="sm:col-span-2"
                        >
                            <div className="relative">
                                <select
                                    id={fieldId("product")}
                                    className={cn(
                                        inputClasses,
                                        "cursor-pointer appearance-none pr-8 text-lg"
                                    )}
                                    {...register("product")}
                                >
                                    <option value="">
                                        General enquiry / not sure yet
                                    </option>
                                    {PRODUCTS.map((p) => (
                                        <option key={p.slug} value={p.name}>
                                            {p.name}
                                        </option>
                                    ))}
                                </select>
                                <ChevronDown className="pointer-events-none absolute right-0 top-1/2 size-4 -translate-y-1/2 text-muted-ink" />
                            </div>
                        </Field>
                        <Field
                            label="Project details"
                            htmlFor={fieldId("message")}
                            className="sm:col-span-2"
                        >
                            <textarea
                                id={fieldId("message")}
                                rows={4}
                                placeholder="Size, pressure class, media, quantity…"
                                className={cn(
                                    inputClasses,
                                    "resize-none text-lg"
                                )}
                                {...register("message")}
                            />
                        </Field>
                    </>
                )}
            </div>

            <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden
                className="absolute -left-[9999px] h-0 w-0 opacity-0"
                {...register("_gotcha")}
            />

            {status === "error" && (
                <p
                    role="alert"
                    className="mt-8 border-l-2 border-destructive bg-destructive/5 px-4 py-3 text-sm text-ink"
                >
                    Something went wrong sending your message. Please try
                    again, or email us at{" "}
                    <a href={`mailto:${SITE.email}`} className="underline">
                        {SITE.email}
                    </a>
                    .
                </p>
            )}

            <div
                className={cn(
                    "mt-10 flex flex-wrap items-center gap-x-6 gap-y-4",
                    compact && "mt-9"
                )}
            >
                <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className={cn(compact && "w-full")}
                >
                    {isSubmitting ? "Sending…" : submitLabel}
                    {!isSubmitting && (
                        <ArrowRight className="transition-transform duration-300 group-hover/button:translate-x-1" />
                    )}
                </Button>
                {!compact && (
                    <p className="text-sm text-muted-ink">
                        Fields marked * are required.
                    </p>
                )}
            </div>
        </form>
    );
}
