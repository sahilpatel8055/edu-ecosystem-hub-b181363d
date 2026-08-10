import { createFileRoute, notFound } from "@tanstack/react-router";
import { UniversitySectionPage, sectionDescription, sectionTitle } from "@/components/university/SectionPage";
import { sectionHead, sectionLoader } from "@/lib/sectionRoute";

export const Route = createFileRoute("/universities/$slug/admission")({
  loader: ({ params }) => sectionLoader(params.slug, "admission") ?? notFound(),
  head: ({ params, loaderData }) => sectionHead(params.slug, "admission", loaderData),
  component: () => {
    const { slug } = Route.useParams();
    return <UniversitySectionPage slug={slug} section="admission" />;
  },
});

export { sectionDescription, sectionTitle };
