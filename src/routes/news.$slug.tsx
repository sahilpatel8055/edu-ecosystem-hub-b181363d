import { createFileRoute, notFound } from "@tanstack/react-router";
import { DetailLayout } from "@/components/templates/DetailLayout";
import { KeyTakeaways, PostBody, PostByline, PostSources } from "@/components/post/PostArticle";
import { ArticleCard } from "@/components/cards";
import { RelatedContent } from "@/components/templates/DetailLayout";
import { articles, news } from "@/lib/content";
import { getPostContent } from "@/data/posts";
import {
  articleSchema,
  breadcrumbSchema,
  canonical,
  faqSchema,
  jsonLd,
  pageMeta,
} from "@/lib/seo";

const all = [...articles, ...news];

export const Route = createFileRoute("/news/$slug")({
  loader: ({ params }) => {
    const item = all.find((a) => a.slug === params.slug);
    const post = getPostContent(params.slug);
    if (!item || !post) throw notFound();
    return { item, post };
  },
  head: ({ params, loaderData }) => {
    const path = `/news/${params.slug}`;
    if (!loaderData) {
      return { meta: [{ title: "Article unavailable" }, { name: "robots", content: "noindex" }] };
    }
    const { item, post } = loaderData;
    const description = post.intro.slice(0, 155);
    return {
      meta: pageMeta({
        title: item.title,
        description,
        path,
        type: "article",
        author: item.author,
        publishedTime: item.date,
        modifiedTime: post.updated,
        section: item.category,
        tags: item.tags,
        keywords: item.tags,
      }),
      links: canonical(path),
      scripts: [
        jsonLd(
          articleSchema({
            headline: item.title,
            description,
            path,
            author: item.author,
            datePublished: item.date,
            dateModified: post.updated,
            type: "NewsArticle",
          }),
        ),
        jsonLd(faqSchema(post.faqs)),
        jsonLd(
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "News", href: "/news" },
            { name: item.title, href: path },
          ]),
        ),
      ],
    };
  },
  component: Page,
});

function Page() {
  const { item, post } = Route.useLoaderData();
  const toc = [
    "Key takeaways",
    ...post.sections.map((s) => s.heading),
    ...(post.sources?.length ? ["Sources & references"] : []),
    "FAQs",
  ];
  const related = all.filter((a) => a.slug !== item.slug && a.categorySlug === item.categorySlug).slice(0, 2);

  return (
    <DetailLayout
      crumbs={[
        { name: "News", href: "/news" },
        { name: item.title, href: `/news/${item.slug}` },
      ]}
      eyebrow={item.category}
      title={item.title}
      subtitle={post.intro}
      meta={<PostByline item={item} post={post} />}
      tocSections={toc}
      faqs={post.faqs}
      related={
        related.length ? (
          <RelatedContent>
            {related.map((r) => (
              <ArticleCard key={r.slug} item={r} />
            ))}
          </RelatedContent>
        ) : undefined
      }
    >
      <KeyTakeaways items={post.keyTakeaways} />
      <PostBody post={post} />
      {post.sources?.length ? <PostSources items={post.sources} /> : null}
    </DetailLayout>
  );
}
