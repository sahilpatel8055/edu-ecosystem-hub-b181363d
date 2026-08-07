import { createFileRoute, Outlet } from "@tanstack/react-router";

/** Layout route for the Courses silo. */
export const Route = createFileRoute("/courses")({
  component: () => <Outlet />,
});
