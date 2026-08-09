import {
  Briefcase,
  Calculator,
  Code2,
  Cpu,
  GraduationCap,
  Landmark,
  Laptop,
  LineChart,
  Scale,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";

/**
 * Course-name → icon mapping so every programme shows a symbol that matches
 * the subject instead of a rotating placeholder.
 */
const rules: Array<{ test: RegExp; icon: LucideIcon }> = [
  { test: /\bmba\b|management|business admin/i, icon: Briefcase },
  { test: /\bmca\b/i, icon: Cpu },
  { test: /\bbca\b|computer application|software|full[- ]?stack/i, icon: Code2 },
  { test: /\bbba\b/i, icon: LineChart },
  { test: /b\.?com|commerce/i, icon: Calculator },
  { test: /m\.?com|finance|account/i, icon: Landmark },
  { test: /\bllb\b|\bllm\b|law/i, icon: Scale },
  { test: /nursing|health|medical|pharm/i, icon: Stethoscope },
  { test: /\bba\b|\bma\b|arts|journalism/i, icon: GraduationCap },
  { test: /\bbsc\b|\bmsc\b|science|data|analytics|\bai\b/i, icon: Laptop },
];

export function courseIcon(...hints: Array<string | undefined>): LucideIcon {
  const text = hints.filter(Boolean).join(" ");
  return rules.find((r) => r.test.test(text))?.icon ?? GraduationCap;
}