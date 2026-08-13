import { CalendarClock, CheckCircle2, Info, ShieldCheck, UserRound } from "lucide-react";
import { AppLink } from "@/components/common/AppLink";
import { DataTable } from "@/components/common/Blocks";
import { ContentSection } from "@/components/templates/DetailLayout";
import type { PostBlock, PostContent } from "@/data/posts";
import type { Article } from "@/lib/content";

/* ------------------------------- byline -------------------------------- */

export function PostByline({ item, post }: { item: Article; post: PostContent }) {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
      <span className="inline-flex items-center gap-1.5">
        <UserRound className="h-3.5 w-3.5" aria-hidden="true" />
        By{" "}
        <AppLink to={`/authors`} className="font-semibold text-foreground hover:text-brand">
          {item.author}
        </AppLink>
      </span>
      <span className="inline-flex items-center gap-1.5">
        <ShieldCheck className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
        Reviewed by <span className="font-semibold text-foreground">{post.reviewer}</span>, {post.reviewerRole}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <CalendarClock className="h-3.5 w-3.5" aria-hidden="true" />
        Published {formatDate(item.date)} · Last updated {formatDate(post.updated)}
      </span>
      <span>{item.readingTime} read</span>
    </div>
  );
}

export function formatDate(iso: string) {
  const d = new Date(iso);
  return Number.isNaN(d.getTime())
    ? iso
    : d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
}

/* ------------------------------ key facts ------------------------------ */

export function KeyTakeaways({ items }: { items: string[] }) {
  return (
    <section id="key-takeaways" className="scroll-mt-36 rounded-2xl border border-brand/30 bg-brand-soft p-5 sm:p-6">
      <h2 className="font-display text-lg font-bold">Key takeaways</h2>
      <ul className="mt-4 space-y-2.5">
        {items.map((t) => (
          <li key={t} className="flex gap-2.5 text-sm leading-relaxed">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* -------------------------------- blocks -------------------------------- */

function Block({ block }: { block: PostBlock }) {
  switch (block.kind) {
    case "p":
      return <p className="leading-relaxed">{block.text}</p>;
    case "list":
      return block.ordered ? (
        <ol className="list-decimal space-y-2 pl-5 leading-relaxed marker:font-semibold marker:text-brand">
          {block.items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ol>
      ) : (
        <ul className="space-y-2">
          {block.items.map((i) => (
            <li key={i} className="flex gap-2.5 leading-relaxed">
              <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <span>{i}</span>
            </li>
          ))}
        </ul>
      );
    case "table":
      return <DataTable caption={block.caption} head={block.head} rows={block.rows} />;
    case "note":
      return (
        <div className="flex gap-3 rounded-xl border border-border bg-secondary/60 p-4">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
          <p className="text-sm leading-relaxed text-muted-foreground">{block.text}</p>
        </div>
      );
    case "links":
      return (
        <div className="rounded-xl border border-border bg-card p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{block.title}</p>
          <ul className="mt-2.5 space-y-1.5">
            {block.items.map((l) => (
              <li key={l.href}>
                <AppLink to={l.href} className="text-sm font-semibold text-brand hover:underline">
                  {l.label}
                </AppLink>
              </li>
            ))}
          </ul>
        </div>
      );
  }
}

export function PostBody({ post }: { post: PostContent }) {
  return (
    <>
      {post.sections.map((s) => (
        <ContentSection key={s.heading} title={s.heading}>
          {s.blocks.map((b, i) => (
            <Block key={i} block={b} />
          ))}
        </ContentSection>
      ))}
    </>
  );
}

/* -------------------------------- sources ------------------------------- */

export function PostSources({ items }: { items: { label: string; href: string }[] }) {
  return (
    <section id="sources" className="scroll-mt-36">
      <h2 className="text-lg font-bold">Sources &amp; references</h2>
      <ul className="mt-3 space-y-1.5 text-sm">
        {items.map((s) => (
          <li key={s.href}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-brand hover:underline"
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
