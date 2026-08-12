import { IndianRupee } from "lucide-react";
import { averagePackageFor } from "@/lib/careerSalaries";
import { HiringPartners } from "@/components/university/HiringPartners";

/**
 * Job roles paired with an indicative average package plus the university's
 * hiring-partner board. Packages are market averages, clearly labelled.
 */
export function CareerRolePackages({
  roles: providedRoles,
  fallbackRoles = [],
  universitySlug,
  universityShort,
}: {
  roles: string[];
  fallbackRoles?: string[];
  universitySlug: string;
  universityShort: string;
}) {
  const roles = providedRoles.length ? providedRoles : fallbackRoles;
  return (
    <div className="space-y-4">
      {roles.length > 0 && (
      <div className="overflow-hidden rounded-2xl border border-border">
        <table className="w-full border-collapse text-sm">
          <caption className="sr-only">Career roles and indicative average packages</caption>
          <thead>
            <tr className="bg-brand text-brand-foreground">
              <th scope="col" className="px-3 py-2.5 text-left font-semibold">
                Job role
              </th>
              <th scope="col" className="w-[45%] px-3 py-2.5 text-left font-semibold">
                Average package (per year)
              </th>
            </tr>
          </thead>
          <tbody>
            {roles.map((r, i) => (
              <tr key={r} className={i % 2 ? "bg-secondary/50" : "bg-card"}>
                <th scope="row" className="px-3 py-2.5 text-left font-semibold text-foreground">
                  {r}
                </th>
                <td className="px-3 py-2.5 font-semibold text-brand">
                  <span className="inline-flex items-center gap-1">
                    <IndianRupee className="h-3.5 w-3.5" aria-hidden="true" />
                    {averagePackageFor(r)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      )}
      {roles.length > 0 && (
      <p className="text-xs text-subtle">
        Average packages are indicative market ranges for these roles in India, not {universityShort} placement
        guarantees.
      </p>
      )}
      <HiringPartners universitySlug={universitySlug} universityShort={universityShort} />
    </div>
  );
}
