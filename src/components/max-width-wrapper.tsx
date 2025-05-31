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
        <div className={cn(" h-full mx-5 px-3 sm:px-2 lg:px-12", className)}>
            {children}
        </div>
    );
};

export default MaxWidthWrapper;
