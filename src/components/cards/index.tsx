import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CalendarDays,
  Clock,
  GitCompareArrows,
  GraduationCap,
  IndianRupee,
  MapPin,
  Star,
  TrendingUp,
  Wrench,
} from "lucide-react";
import { AppLink } from "@/components/common/AppLink";
import { Chip } from "@/components/common/Primitives";
import { formatDate } from "@/lib/content";
import type {
  Article,
  Author,
  CareerGuide,
  Comparison,
  Course,
  Review,
  Scholarship,
  Tool,
  University,
} from "@/lib/content";

function Rating({ value, count }: { value: number; count?: number }) {
  return (
    <span className="inline-flex items-center gap-1 text-sm font-semibold">
      <Star className="h-4 w-4 fill-highlight text-highlight" />
      {value.toFixed(1)}
      {count !== undefined && <span className="font-normal text-muted-foreground">({count})</span>}
    </span>
  );
}

const cardBase = "surface-card hover-lift group flex flex-col p-6";

export function UniversityCard({ item }: { item: University }) {
  return (
    <AppLink to={`/universities/${item.slug}`} className={cardBase}>
      <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-3">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
          <GraduationCap className="h-5 w-5" />
        </span>
        <div className="min-w-0">
          <h3 className="truncate font-display text-base font-bold">{item.shortName}</h3>
          <p className="flex items-center gap-1 truncate text-xs text-muted-foreground">
            <MapPin className="h-3 w-3 shrink-0" /> {item.location}
          </p>
        </div>
      </div>
      <p className="mt-4 line-clamp-2 text-sm text-muted-foreground">{item.summary}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {item.approvals.slice(0, 3).map((a) => (
          <Chip key={a} tone="brand">
            {a}
          </Chip>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
        <Rating value={item.rating} count={item.reviews} />
        <span className="text-sm font-semibold">{item.feeRange}</span>
      </div>
    </AppLink>
  );
}

export function CourseCard({ item }: { item: Course }) {
  return (
    <AppLink to={`/courses/${item.slug}`} className={cardBase}>
      <div className="flex items-center justify-between gap-3">
        <Chip tone="brand">{item.level}</Chip>
        <span className="text-xs text-muted-foreground">{item.universities} universities</span>
      </div>
      <h3 className="mt-4 font-display text-lg font-bold">{item.name}</h3>
      <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{item.summary}</p>
      <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-border pt-4 text-sm">
        <div>
          <dt className="text-xs text-muted-foreground">Duration</dt>
          <dd className="font-semibold">{item.duration}</dd>
        </div>
        <div>
          <dt className="text-xs text-muted-foreground">Fee range</dt>
          <dd className="font-semibold">{item.feeRange}</dd>
        </div>
      </dl>
    </AppLink>
  );
}

export function ArticleCard({ item, variant = "default" }: { item: Article; variant?: "default" | "compact" }) {
  const href = item.kind === "news" ? `/news/${item.slug}` : `/blogs/${item.slug}`;
  if (variant === "compact") {
    return (
      <AppLink to={href} className="group flex gap-4 border-b border-border py-4 last:border-0">
        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand" />
        <span className="min-w-0">
          <span className="block text-sm font-semibold group-hover:text-brand">{item.title}</span>
          <span className="mt-1 block text-xs text-muted-foreground">
            {formatDate(item.date)} · {item.readingTime}
          </span>
        </span>
      </AppLink>
    );
  }
  return (
    <AppLink to={href} className={cardBase}>
      <div className="flex flex-wrap items-center gap-2">
        <Chip tone="brand">{item.category}</Chip>
        {item.trending && (
          <Chip tone="highlight">
            <TrendingUp className="mr-1 h-3 w-3" /> Trending
          </Chip>
        )}
      </div>
      <h3 className="mt-4 font-display text-lg font-bold leading-snug group-hover:text-brand">{item.title}</h3>
      <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{item.excerpt}</p>
      <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
        <span className="truncate">{item.author}</span>
        <span className="flex shrink-0 items-center gap-1">
          <Clock className="h-3 w-3" /> {item.readingTime}
        </span>
      </div>
    </AppLink>
  );
}

export function NewsCard({ item }: { item: Article }) {
  return (
    <AppLink to={`/news/${item.slug}`} className={cardBase}>
      <span className="flex items-center gap-1.5 text-xs font-semibold text-brand">
        <CalendarDays className="h-3.5 w-3.5" /> {formatDate(item.date)}
      </span>
      <h3 className="mt-3 font-display text-base font-bold leading-snug group-hover:text-brand">{item.title}</h3>
      <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{item.excerpt}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
        Read update <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </AppLink>
  );
}

export function ReviewCard({ item }: { item: Review }) {
  return (
    <AppLink to={`/reviews/${item.slug}`} className={cardBase}>
      <div className="flex items-center justify-between gap-3">
        <Rating value={item.rating} />
        {item.verified && (
          <Chip tone="success">
            <BadgeCheck className="mr-1 h-3 w-3" /> Verified
          </Chip>
        )}
      </div>
      <p className="mt-4 line-clamp-4 text-sm leading-relaxed">“{item.summary}”</p>
      <div className="mt-5 border-t border-border pt-4">
        <p className="text-sm font-semibold">{item.author}</p>
        <p className="truncate text-xs text-muted-foreground">
          {item.programme} · {item.entity} · {item.batch}
        </p>
      </div>
    </AppLink>
  );
}

export function ComparisonCard({ item }: { item: Comparison }) {
  return (
    <AppLink to={`/compare/${item.slug}`} className={cardBase}>
      <Chip>{item.category} comparison</Chip>
      <div className="mt-4 grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2">
        <span className="truncate text-sm font-bold">{item.left}</span>
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-secondary">
          <GitCompareArrows className="h-4 w-4 text-brand" />
        </span>
        <span className="truncate text-right text-sm font-bold">{item.right}</span>
      </div>
      <p className="mt-4 line-clamp-2 text-sm text-muted-foreground">{item.summary}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
        See full comparison <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </AppLink>
  );
}

export function ScholarshipCard({ item }: { item: Scholarship }) {
  return (
    <AppLink to={`/scholarships/${item.slug}`} className={cardBase}>
      <div className="flex items-start justify-between gap-3">
        <h3 className="min-w-0 font-display text-base font-bold">{item.name}</h3>
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-highlight/20 text-highlight-foreground">
          <IndianRupee className="h-4 w-4" />
        </span>
      </div>
      <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{item.summary}</p>
      <dl className="mt-5 space-y-2 border-t border-border pt-4 text-sm">
        <div className="flex justify-between gap-3">
          <dt className="text-muted-foreground">Benefit</dt>
          <dd className="truncate font-semibold">{item.amount}</dd>
        </div>
        <div className="flex justify-between gap-3">
          <dt className="text-muted-foreground">Deadline</dt>
          <dd className="truncate font-semibold">{item.deadline}</dd>
        </div>
      </dl>
    </AppLink>
  );
}

export function CareerCard({ item }: { item: CareerGuide }) {
  return (
    <AppLink to={`/career/${item.slug}`} className={cardBase}>
      <Chip tone="brand">{item.field}</Chip>
      <h3 className="mt-4 font-display text-lg font-bold">{item.title}</h3>
      <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{item.summary}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {item.skills.slice(0, 3).map((s) => (
          <Chip key={s}>{s}</Chip>
        ))}
      </div>
      <p className="mt-5 border-t border-border pt-4 text-sm">
        <span className="text-muted-foreground">Salary range · </span>
        <span className="font-semibold">{item.salaryRange}</span>
      </p>
    </AppLink>
  );
}

export function AuthorCard({ item }: { item: Author }) {
  return (
    <AppLink to={`/authors/${item.slug}`} className={`${cardBase} items-center text-center`}>
      <span className="grid h-16 w-16 place-items-center rounded-full bg-brand-soft font-display text-lg font-bold text-brand">
        {item.initials}
      </span>
      <h3 className="mt-4 font-display text-base font-bold">{item.name}</h3>
      <p className="text-xs text-muted-foreground">{item.role}</p>
      <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">{item.bio}</p>
      <p className="mt-4 flex items-center gap-1 text-xs font-semibold text-brand">
        <BookOpen className="h-3.5 w-3.5" /> {item.articles} articles
      </p>
    </AppLink>
  );
}

export function ToolCard({ item }: { item: Tool }) {
  return (
    <AppLink to="/tools" className={cardBase}>
      <div className="flex items-start justify-between gap-3">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-brand">
          <Wrench className="h-5 w-5" />
        </span>
        <Chip tone={item.status === "Live" ? "success" : item.status === "Beta" ? "highlight" : "default"}>
          {item.status}
        </Chip>
      </div>
      <h3 className="mt-4 font-display text-base font-bold">{item.name}</h3>
      <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{item.description}</p>
    </AppLink>
  );
}