import { createFileRoute } from "@tanstack/react-router";
import { UniversitySectionPage } from "@/components/university/SectionPage";
import { sectionHead, sectionLoader } from "@/lib/sectionRoute";

export const Route = createFileRoute("/universities/$slug/examination-pattern")({
  loader: ({ params }) => sectionLoader(params.slug, "examination-pattern"),
  head: ({ params, loaderData }) => sectionHead(params.slug, "examination-pattern", loaderData),
  component: SectionRoute,
  notFoundComponent: () => null,
});

function SectionRoute() {
  const { slug } = Route.useParams();
  return <UniversitySectionPage slug={slug} section="examination-pattern" />;
}
