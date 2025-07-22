"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Enter a valid email"),
    phone: z.string().min(7, "Phone number is required"),
    message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function BrochureDialog() {
    const [open, setOpen] = useState(false);
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

    // Determine if all fields are empty
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

            // success
            reset();
            toast.success("Thanks! Your inquiry was sent.");

            // programmatically download brochure
            const link = document.createElement("a");
            link.href = "/assets/orbis_valves_brochure.pdf";
            link.download = "orbis_valves_brochure.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // close dialog
            setOpen(false);
        } catch (err: unknown) {
            console.error(err);
            toast.error("Oops—couldn't send. Please try again.");
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="bg-[#003B73] text-white">
                    Download Brochure
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Catalogue Inquiry</DialogTitle>
                    <DialogDescription>
                        Fill out the form below to request our catalogue and
                        download the brochure.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
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
                        <Textarea
                            id="message"
                            {...register("message")}
                            rows={4}
                        />
                    </div>

                    <DialogFooter>
                        <Button
                            variant="outline"
                            onClick={() => setOpen(false)}
                            disabled={isSubmitting}
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            disabled={isSubmitting || isFormEmpty}
                        >
                            {isSubmitting ? "Downloading..." : "Download"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
