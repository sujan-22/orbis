"use client";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import SectionHeading from "@/components/helpers/section-heading";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import Image from "next/image";
import { BrochureDialog } from "@/components/helpers/brochure-dialog";

const formSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Enter a valid email"),
    phone: z.string().min(7, "Phone number is required"),
    message: z.string().optional(),
});
type FormData = z.infer<typeof formSchema>;

export default function CatalogueInquiry() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        try {
            const res = await fetch("https://formspree.io/f/xnnzpaov", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                const text = await res.text();
                throw new Error(text || "Formspree error");
            }

            reset();
            toast.success("Thanks! Your message was sent.");
        } catch (err: unknown) {
            console.error(err);
            toast.error("Oops—couldn’t send. Please try again.");
        }
    };

    return (
        <section className="py-20">
            <MaxWidthWrapper>
                <SectionHeading title="Catalogue Inquiry" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left: Brochure Preview */}
                    <div className="relative w-full h-full rounded-lg overflow-hidden">
                        <Image
                            src="/assets/brochure_view.png"
                            alt="Catalogue Preview"
                            fill
                            // className="object-cover object-center contain-content"
                            priority
                            objectFit="contain"
                        />
                        <div className="absolute bottom-4 right-20 ">
                            <BrochureDialog />
                        </div>
                    </div>

                    {/* Right: Inquiry Form */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="grid gap-6"
                            noValidate
                        >
                            <div className="grid gap-2">
                                <Label htmlFor="name">Name *</Label>
                                <Input id="name" {...register("name")} />
                                {errors.name && (
                                    <p className="text-sm text-red-600">
                                        {errors.name.message}
                                    </p>
                                )}
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="email">Email *</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    {...register("email")}
                                />
                                {errors.email && (
                                    <p className="text-sm text-red-600">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="phone">Phone Number *</Label>
                                <Input
                                    id="phone"
                                    type="tel"
                                    {...register("phone")}
                                />
                                {errors.phone && (
                                    <p className="text-sm text-red-600">
                                        {errors.phone.message}
                                    </p>
                                )}
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="message">
                                    Additional Message
                                </Label>
                                <Textarea
                                    id="message"
                                    rows={4}
                                    {...register("message")}
                                />
                            </div>

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-[#5DE0E6] text-white hover:bg-[#004AAD]"
                            >
                                {isSubmitting ? "Sending..." : "Send Inquiry"}
                            </Button>
                        </form>
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    );
}
