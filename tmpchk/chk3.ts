import { listOfferingsByUniversity, getProgramme } from "@/data";
for (const u of ["lpu-online","vgu","chandigarh-university-online","jain-online","amity-online"]) {
  console.log("==", u);
  for (const o of listOfferingsByUniversity(u)) console.log("  ", o.programmeSlug, "|", getProgramme(o.programmeSlug)?.name);
}
