"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import * as z from "zod";

const formSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Enter a valid email"),
    phone: z.string().min(7, "Phone number is required"),
    message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: { name: "", email: "", phone: "", message: "" },
    });

    // Watch all fields to detect if form is empty
    const values = watch();
    const isFormEmpty =
        !values.name.trim() &&
        !values.email.trim() &&
        !values.phone.trim() &&
        !values.message?.trim();

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
        <div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-2xl mx-auto grid gap-6"
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
                    <Input id="email" type="email" {...register("email")} />
                    {errors.email && (
                        <p className="text-sm text-red-600">
                            {errors.email.message}
                        </p>
                    )}
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" {...register("phone")} />
                    {errors.phone && (
                        <p className="text-sm text-red-600">
                            {errors.phone.message}
                        </p>
                    )}
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="message">Additional Message</Label>
                    <Textarea id="message" rows={4} {...register("message")} />
                </div>
                <div className="flex justify-start">
                    <Button
                        type="submit"
                        disabled={isSubmitting || isFormEmpty}
                        className="bg-[#5DE0E6] text-white hover:bg-[#004badbd] cursor-pointer"
                    >
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
