import { createFileRoute, Outlet } from "@tanstack/react-router";

/** Layout route for the News silo. */
export const Route = createFileRoute("/news")({
  component: () => <Outlet />,
});
