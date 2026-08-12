import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "@/components/common/Breadcrumbs";
import { AccentHeadline } from "@/components/common/Headline";

/** Shared listing/collection page shell: hero band + breadcrumbs + content slot. */
export function PageShell({
  crumbs,
  eyebrow,
  title,
  description,
  aside,
  children,
}: {
  crumbs: Crumb[];
  eyebrow?: string;
  title: string;
  description?: string;
  aside?: ReactNode;
  children: ReactNode;
}) {
  return (
    <>
      <div className="hero-glow border-b border-border">
        <div className="container-page py-8 sm:py-12">
          <Breadcrumbs items={crumbs} />
          <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="max-w-3xl">
              {eyebrow && (
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand">{eyebrow}</p>
              )}
              <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                <AccentHeadline text={title} />
              </h1>
              {description && (
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
              )}
            </div>
            {aside}
          </div>
        </div>
      </div>
      <div className="container-page py-12 sm:py-16">{children}</div>
    </>
  );
}