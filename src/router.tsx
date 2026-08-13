import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { LoadingState } from "./components/common/Primitives";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    // Never show a blank frame between routes.
    defaultPendingMs: 200,
    defaultPendingMinMs: 300,
    defaultPendingComponent: () => (
      <div className="container-page py-24">
        <LoadingState label="Loading page…" />
      </div>
    ),
  });

  return router;
};

