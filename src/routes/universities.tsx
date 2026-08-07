import { createFileRoute, Outlet } from "@tanstack/react-router";

/** Layout route for the Universities silo. Leaves own their own metadata. */
export const Route = createFileRoute("/universities")({
  component: () => <Outlet />,
});
