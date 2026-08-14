import { listUniversities, listOfferingsByUniversity } from "@/data";
import { offeringProfile } from "@/lib/entities";
for (const u of listUniversities()) {
  const offs = listOfferingsByUniversity(u.slug);
  const bad = offs.filter((o: any) => !offeringProfile(u.slug, o.programmeSlug));
  console.log(u.slug, "offers", offs.length, "bad", bad.length, bad.map((b:any)=>b.programmeSlug).join(","));
}
