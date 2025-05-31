import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
    className,
    children,
}: {
    className?: string;
    children: ReactNode;
}) => {
    return (
        <div className={cn(" h-full mx-10 px-3 sm:px-6 lg:px-12", className)}>
            {children}
        </div>
    );
};

export default MaxWidthWrapper;
