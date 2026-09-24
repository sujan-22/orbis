"use client";

import type { VariantProps } from "class-variance-authority";
import { Download } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import InquiryForm from "@/components/inquiry-form";

interface BrochureDialogProps extends VariantProps<typeof buttonVariants> {
    label?: string;
    className?: string;
}

export function BrochureDialog({
    label = "Download brochure",
    variant = "outline",
    size = "default",
    className,
}: BrochureDialogProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={variant} size={size} className={className}>
                    <Download />
                    {label}
                </Button>
            </DialogTrigger>
            <DialogContent className="max-h-[calc(100svh-2rem)] gap-0 overflow-y-auto rounded-none border-0 p-0 sm:max-w-lg">
                <div className="blueprint-grid border-b border-line bg-paper px-7 pb-8 pt-10 sm:px-10">
                    <p className="eyebrow text-muted-ink">Brochure · PDF</p>
                    <DialogTitle className="mt-4 text-[1.75rem] font-medium leading-tight tracking-[-0.03em]">
                        Get the Orbis brochure
                    </DialogTitle>
                    <DialogDescription className="mt-3 text-[0.9375rem] leading-relaxed text-muted-ink">
                        Share a few details and the PDF will download straight
                        away.
                    </DialogDescription>
                </div>
                <div className="px-7 py-9 sm:px-10">
                    <InquiryForm
                        source="brochure"
                        compact
                        submitLabel="Download PDF"
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
}
