/**
 * Indicative average annual packages (INR LPA) for common roles hired from
 * online degree programmes in India. Keyword matched, deliberately shown as
 * ranges so no single figure reads as a placement promise.
 */
const bands: Array<{ match: RegExp; range: string }> = [
  { match: /chief|vp|vice president|director|head of/i, range: "18 – 35 LPA" },
  { match: /architect|scientist|machine learning|ai engineer/i, range: "12 – 24 LPA" },
  { match: /investment|finance manager|financial analyst|risk/i, range: "7 – 16 LPA" },
  { match: /product manager|program manager|project manager/i, range: "9 – 20 LPA" },
  { match: /manager|lead/i, range: "7 – 15 LPA" },
  { match: /consultant|strategy/i, range: "6 – 14 LPA" },
  { match: /developer|engineer|programmer|devops|cloud/i, range: "5 – 12 LPA" },
  { match: /data analyst|business analyst|analyst/i, range: "5 – 11 LPA" },
  { match: /designer|ux|ui/i, range: "4.5 – 10 LPA" },
  { match: /digital marketing|marketing|seo|content/i, range: "4 – 10 LPA" },
  { match: /hr|human resource|recruit|talent/i, range: "4 – 9 LPA" },
  { match: /sales|business development|relationship/i, range: "4 – 10 LPA" },
  { match: /accountant|audit|tax/i, range: "4 – 9 LPA" },
  { match: /teacher|faculty|trainer|counsellor|counselor/i, range: "3.5 – 8 LPA" },
  { match: /executive|associate|assistant|officer|coordinator/i, range: "3 – 7 LPA" },
];

export function averagePackageFor(role: string): string {
  for (const b of bands) if (b.match.test(role)) return b.range;
  return "4 – 10 LPA";
}
