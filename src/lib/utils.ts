import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Rewrites rupee amounts in a label into lakh notation:
 * "₹1,20,000 – ₹2,50,000" -> "₹1.2 L – ₹2.5 L". Amounts below ₹1 lakh keep
 * a thousands form ("₹85,000" -> "₹85 K") so cards never show long zero runs.
 */
const trimZeros = (value: number, digits: number): string =>
  value.toFixed(digits).replace(/(\.\d*?)0+$/, "$1").replace(/\.$/, "");

export function feeRangeInLakhs(label: string): string {
  return label.replace(/₹\s?([\d,]+)/g, (match, digits: string) => {
    const value = Number(digits.replace(/,/g, ""));
    if (!Number.isFinite(value) || value <= 0) return match;
    if (value >= 100000) return `₹${trimZeros(value / 100000, value < 1000000 ? 2 : 1)} L`;
    if (value >= 1000) return `₹${trimZeros(value / 1000, 1)} K`;
    return match;
  });
}
