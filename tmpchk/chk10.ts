import { offerings } from "@/data/offerings";
for (const u of ["lpu-online","vgu","nmims-online","chandigarh-university-online"]) {
  const rows = offerings.filter(o=>o.universitySlug===u);
  console.log(u, rows.length, "|", rows.map(r=>`${r.programmeSlug}${r.verified?"":"!"}`).join(", "));
}
