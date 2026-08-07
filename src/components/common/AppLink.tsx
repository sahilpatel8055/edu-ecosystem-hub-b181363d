import { Link, type LinkProps } from "@tanstack/react-router";
import type { ReactNode } from "react";

type AppLinkProps = Omit<LinkProps, "to"> & {
  to: string;
  className?: string;
  children: ReactNode;
  "aria-label"?: string;
  onClick?: () => void;
};

/**
 * Router Link that accepts runtime (CMS-driven) paths. Keeps client-side
 * navigation, preloading and prefetch while the route map stays data-driven.
 */
export function AppLink({ to, ...props }: AppLinkProps) {
  return <Link {...(props as LinkProps)} to={to as never} />;
}