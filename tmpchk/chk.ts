import indexJson from "@/data/university-course-index-2026-27.json";
import { offeringProfile } from "@/lib/entities";
const rows = indexJson as any[];
const bad: string[] = [];
for (const r of rows) {
  const url: string = r.canonical_url ?? "";
  const m = url.match(/^\/universities\/([^/]+)\/courses\/([^/]+)$/);
  if (!m) { bad.push("BADURL " + url); continue; }
  if (!offeringProfile(m[1]!, m[2]!)) bad.push(url);
}
console.log("total", rows.length, "missing", bad.length);
console.log(bad.slice(0, 60).join("\n"));
