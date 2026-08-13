import { createFileRoute, Outlet } from "@tanstack/react-router";

/** Layout route for the Blogs silo. */
export const Route = createFileRoute("/blogs")({
  component: () => <Outlet />,
});
