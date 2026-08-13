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
export function feeRangeInLakhs(label: string): string {
  return label.replace(/₹\s?([\d,]+)/g, (match, digits: string) => {
    const value = Number(digits.replace(/,/g, ""));
    if (!Number.isFinite(value) || value <= 0) return match;
    if (value >= 100000) {
      const lakhs = value / 100000;
      return `₹${lakhs.toFixed(lakhs < 10 ? 2 : 1).replace(/\.?0+$/, "")} L`;
    }
    if (value >= 1000) {
      const thousands = value / 1000;
      return `₹${thousands.toFixed(1).replace(/\.?0+$/, "")} K`;
    }
    return match;
  });
}
