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
        <div
            className={cn(
                "mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12",
                className
            )}
        >
            {children}
        </div>
    );
};

export default MaxWidthWrapper;
