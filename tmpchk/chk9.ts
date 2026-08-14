import { offerings } from "@/data/offerings";
const want = ["lovely","chandigarh","nmims","vivekananda"];
for (const w of want) {
  const rows = offerings.filter(o=>o.universitySlug.includes(w));
  console.log(w, "|", rows.map(r=>`${r.programmeSlug}${r.verified?"":"(UNVERIFIED)"}`).join(", "));
}
console.log("unis:", [...new Set(offerings.map(o=>o.universitySlug))].join(", "));
