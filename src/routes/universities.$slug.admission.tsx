import { createFileRoute } from "@tanstack/react-router";
import { UniversitySectionPage } from "@/components/university/SectionPage";
import { sectionHead, sectionLoader } from "@/lib/sectionRoute";

export const Route = createFileRoute("/universities/$slug/admission")({
  loader: ({ params }) => sectionLoader(params.slug, "admission"),
  head: ({ params, loaderData }) => sectionHead(params.slug, "admission", loaderData),
  component: SectionRoute,
  notFoundComponent: () => null,
});

function SectionRoute() {
  const { slug } = Route.useParams();
  return <UniversitySectionPage slug={slug} section="admission" />;
}
