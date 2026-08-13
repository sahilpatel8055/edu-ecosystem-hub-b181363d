import { getCourseFamily, type CourseFamily } from "@/lib/courseFamily";
import { defaultCourseContent, type CourseContent } from "./types";
import { onlineMbaContent } from "./online-mba";
import { authoredFamilyContent, authoredFamilySlugs } from "./families";

/** Authored content, keyed by family slug. Add a file per course here. */
const authored: Record<string, CourseContent> = {
  "online-mba": onlineMbaContent,
};

/** Content for a family — authored where it exists, derived otherwise. */
export function courseContent(family: CourseFamily): CourseContent {
  return authored[family.slug] ?? authoredFamilyContent(family) ?? defaultCourseContent(family);
}


export function courseContentBySlug(slug: string): { family: CourseFamily; content: CourseContent } | undefined {
  const family = getCourseFamily(slug);
  if (!family) return undefined;
  return { family, content: courseContent(family) };
}

export const isAuthored = (slug: string) => Boolean(authored[slug]) || authoredFamilySlugs.includes(slug);

export * from "./types";
