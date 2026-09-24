import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Static export uses trailing slashes, so normalise before comparing.
export function isActivePath(pathname: string, href: string) {
  const clean = (p: string) => p.replace(/\/+$/, "") || "/"
  const current = clean(pathname)
  const target = clean(href)
  if (target === "/") return current === "/"
  return current === target || current.startsWith(`${target}/`)
}

export const pad2 = (n: number) => String(n).padStart(2, "0")
