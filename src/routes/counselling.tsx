import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/templates/PageShell";
import { CounsellingForm } from "@/components/common/CounsellingForm";
import { canonical, breadcrumbSchema, jsonLd, pageMeta } from "@/lib/seo";

const title = "Free Online Degree Counselling";
const description =
  "Book a free 1-on-1 counselling session with an unbiased AVEDU advisor — verified fees, UGC approvals, scholarships and a shortlist matched to your goal.";
const path = "/counselling";

export const Route = createFileRoute("/counselling")({
  head: () => ({
    meta: pageMeta({ title, description, path }),
    links: canonical(path),
    scripts: [
      jsonLd(
        breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Counselling", href: path },
        ]),
      ),
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell
      crumbs={[{ name: "Counselling", href: path }]}
      eyebrow="Free guidance"
      title="Free Online Degree Counselling"
      description={description}
    >
      <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
        <CounsellingForm />
      </div>
    </PageShell>
  );
}
