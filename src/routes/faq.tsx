import { createFileRoute, Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { faqs, pageMeta } from "@/components/techmatch/content";
import { ArrowRightIcon } from "@/components/techmatch/icons";
import { FaqList } from "@/components/techmatch/sections";

export const Route = createFileRoute("/faq")({
  head: () => ({
    ...pageMeta({
      title: "Technology Advisory FAQ — TechMatch LLC",
      description:
        "Answers about TechMatch services, provider ecosystem, company size fit, negotiation support, implementation involvement, and US and Canada coverage.",
      path: "/faq",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">FAQ</p>
        <div className="mt-4 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <h1 className="font-display text-5xl font-bold leading-[1.02] text-balance sm:text-6xl">
            Questions technology leaders often ask.
          </h1>
          <p className="text-lg leading-relaxed text-foreground/70">
            Clear answers about TechMatch's advisory role, technology categories, provider ecosystem, negotiation support, and ongoing involvement.
          </p>
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <FaqList />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="font-display text-3xl font-bold text-balance">Still evaluating your options?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-foreground/70">
          Tell us what you are working on and TechMatch will help you find the right match.
        </p>
        <Button asChild variant="dark" size="xlPill" className="mt-8">
          <Link to="/contact">
            Get a Match <ArrowRightIcon className="size-5" />
          </Link>
        </Button>
      </section>
    </>
  );
}
