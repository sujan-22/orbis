"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
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
        formState: { errors, isSubmitting },
        reset,
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        try {
            const res = await fetch("/api/catalogue", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (result.success) {
                alert("Message sent successfully!");
                reset();
            } else {
                alert("Failed to send message. Please try again.");
            }
        } catch (err) {
            console.error("Submit error:", err);
            alert("Something went wrong!");
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
                        disabled={isSubmitting}
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
