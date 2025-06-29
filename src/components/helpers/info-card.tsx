import React from "react";
import { IconType } from "react-icons/lib";
import { cn } from "../../lib/utils";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";

interface InfoCardProps {
    icon: IconType;
    title: string;
    description: string;
    // New prop:
    transparent?: boolean;
    color: {
        text: string;
        background: string;
        descriptionColor?: string;
    };
}

const InfoCard: React.FC<InfoCardProps> = ({
    icon: Icon,
    title,
    description,
    transparent = false,
    color: { text, background, descriptionColor },
}) => {
    return (
        <Card
            className={cn(
                transparent
                    ? "bg-white/70 backdrop-blur-md border border-[#dfe8f1] shadow-md"
                    : background,
                "shadow-lg hover:shadow-xl transition-shadow duration-300"
            )}
        >
            <CardHeader className="flex flex-col items-center text-center space-y-4 p-6">
                <Icon className={cn("text-5xl", text)} />
                <CardTitle className={cn("text-2xl font-semibold", text)}>
                    {title}
                </CardTitle>
                <CardDescription
                    className={cn(
                        "text-base",
                        descriptionColor ?? "text-[#004AAD]"
                    )}
                >
                    {description}
                </CardDescription>
            </CardHeader>
            <CardContent />
        </Card>
    );
};

export default InfoCard;
