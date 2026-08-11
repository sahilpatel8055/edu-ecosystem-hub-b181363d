import { createFileRoute, redirect } from "@tanstack/react-router";

/** Legacy URL. Course pages now live at /courses/$course. */
export const Route = createFileRoute("/online-courses/$level/$course")({
  beforeLoad: ({ params }) => {
    throw redirect({ to: "/courses/$course", params: { course: params.course } });
  },
  component: () => null,
});
