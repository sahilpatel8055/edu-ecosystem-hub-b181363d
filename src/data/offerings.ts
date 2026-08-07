import type { Offering } from "./types";

/**
 * University × programme rows. These power `/universities/$slug/$programme`,
 * the comparison engine and every fee page.
 *
 * All fee and placement numbers below are placeholders (`verified: false`).
 * Replace them with the official figure from the university's fee page before
 * publishing, then flip `verified` to true.
 */
const row = (
  universitySlug: string,
  programmeSlug: string,
  specialisations: string[],
  durationLabel: string,
): Offering => ({
  id: `${universitySlug}--${programmeSlug}`,
  universitySlug,
  programmeSlug,
  specialisations,
  durationLabel,
  fee: { total: null, perSemester: null, perYear: null, emiFrom: null, currency: "INR" },
  placement: { supportAvailable: true },
  admissionOpen: true,
  verified: false,
  lastUpdated: "2026-08-07",
});

export const offerings: Offering[] = [
  row("lpu-online", "online-mba", ["finance", "marketing", "human-resource-management", "business-analytics", "operations-management"], "2 years"),
  row("lpu-online", "online-mca", ["data-science", "cyber-security", "cloud-computing"], "2 years"),
  row("lpu-online", "online-bba", ["digital-business"], "3 years"),
  row("lpu-online", "online-bca", ["full-stack-development"], "3 years"),

  row("amity-online", "online-mba", ["finance", "marketing", "human-resource-management", "business-analytics"], "2 years"),
  row("amity-online", "online-mca", ["data-science", "cloud-computing"], "2 years"),
  row("amity-online", "online-bba", ["digital-business"], "3 years"),
  row("amity-online", "online-bcom", ["accounting-and-taxation"], "3 years"),

  row("manipal-online", "online-mba", ["finance", "marketing", "business-analytics", "operations-management"], "2 years"),
  row("manipal-online", "online-mca", ["data-science", "cyber-security"], "2 years"),
  row("manipal-online", "online-bca", ["full-stack-development"], "3 years"),
  row("manipal-online", "online-bcom", ["accounting-and-taxation"], "3 years"),

  row("jain-online", "online-mba", ["finance", "marketing", "human-resource-management", "business-analytics"], "2 years"),
  row("jain-online", "online-bba", ["digital-business"], "3 years"),
  row("jain-online", "online-mcom", ["international-business"], "2 years"),

  row("ignou", "online-mba", ["finance", "marketing", "human-resource-management", "operations-management"], "2 years"),
  row("ignou", "online-mcom", ["international-business"], "2 years"),
  row("ignou", "online-bcom", ["accounting-and-taxation"], "3 years"),
  row("ignou", "online-bca", ["full-stack-development"], "3 years"),

  row("du-sol", "online-bcom", ["accounting-and-taxation"], "3 years"),
  row("du-sol", "online-bba", ["digital-business"], "3 years"),
  row("du-sol", "online-mcom", ["international-business"], "2 years"),
];
