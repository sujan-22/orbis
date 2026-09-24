import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-none text-[0.9375rem] font-medium tracking-[-0.01em] transition-[background-color,border-color,color] duration-300 cursor-pointer disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-azure focus-visible:ring-offset-2 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-ink text-white hover:bg-navy",
        light: "bg-white text-ink hover:bg-cyan",
        outline:
          "border border-ink/20 bg-transparent text-ink hover:border-ink hover:bg-ink hover:text-white",
        "outline-light":
          "border border-white/25 bg-transparent text-white hover:border-white hover:bg-white hover:text-ink",
        destructive: "bg-destructive text-white hover:bg-destructive/90",
        secondary: "bg-paper text-ink hover:bg-surface",
        ghost: "text-ink hover:bg-paper",
        link: "text-ink underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-6",
        sm: "h-10 px-4 text-sm",
        lg: "h-14 px-7 text-base",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
