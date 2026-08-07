import { createFileRoute, Outlet } from "@tanstack/react-router";

/** Layout route for the Comparison silo. */
export const Route = createFileRoute("/compare")({
  component: () => <Outlet />,
});
