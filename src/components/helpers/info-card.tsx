import React from "react";
import { IconType } from "react-icons/lib";
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
}

const InfoCard: React.FC<InfoCardProps> = ({
    icon: Icon,
    title,
    description,
}) => {
    return (
        <Card>
            <CardHeader className="flex flex-col items-center text-center space-y-4 p-6">
                <Icon className="text-5xl text-[#003B73]" />
                <CardTitle className="text-2xl font-semibold text-[#003B73]">
                    {title}
                </CardTitle>
                <CardDescription className="text-base text-gray-700">
                    {description}
                </CardDescription>
            </CardHeader>
            <CardContent />
        </Card>
    );
};

export default InfoCard;
