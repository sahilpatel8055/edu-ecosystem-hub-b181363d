/**
 * Course imagery registry.
 *
 * Illustrative photography per degree family (not university specific) used on
 * programme cards. Matching is by programme name, so every course in the
 * dataset resolves to something sensible without hardcoding per-university art.
 */
import mbaImg from "@/course-images/mba.jpg";
import mcaImg from "@/course-images/mca.jpg";
import bcaImg from "@/course-images/bca.jpg";
import bbaImg from "@/course-images/bba.jpg";
import maImg from "@/course-images/ma.jpg";
import commerceImg from "@/course-images/commerce.jpg";
import scienceImg from "@/course-images/science.jpg";
import generalImg from "@/course-images/general.jpg";

const rules: Array<[RegExp, string]> = [
  [/\bMBA\b|MASTER OF BUSINESS/i, mbaImg],
  [/\bBBA\b|BACHELOR OF BUSINESS/i, bbaImg],
  [/\bMCA\b|MASTER OF COMPUTER/i, mcaImg],
  [/\bBCA\b|BACHELOR OF COMPUTER/i, bcaImg],
  [/\bM\.?\s?COM\b|\bB\.?\s?COM\b|COMMERCE|ACCOUNT|FINANCE/i, commerceImg],
  [/\bM\.?\s?SC\b|\bB\.?\s?SC\b|SCIENCE|DATA|STATISTIC/i, scienceImg],
  [/\bMA\b|\bBA\b|MASTER OF ARTS|BACHELOR OF ARTS|ENGLISH|SOCIOLOG|POLITIC|HISTOR|JOURNALIS/i, maImg],
];

/** Photo for a programme name; always returns an image. */
export function courseImage(programmeName: string): string {
  for (const [pattern, image] of rules) if (pattern.test(programmeName)) return image;
  return generalImg;
}
