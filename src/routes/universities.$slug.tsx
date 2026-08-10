import { createFileRoute, Outlet } from "@tanstack/react-router";

/** Layout route for a single university. Leaves own their own metadata. */
export const Route = createFileRoute("/universities/$slug")({
  component: () => <Outlet />,
});
