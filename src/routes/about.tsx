import { createFileRoute, Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { pageMeta } from "@/components/techmatch/content";
import { ArrowRightIcon } from "@/components/techmatch/icons";
import { AdvisoryCard, PrinciplesGrid } from "@/components/techmatch/sections";

export const Route = createFileRoute("/about")({
  head: () =>
    pageMeta({
      title: "About TechMatch | Technology Advisory",
      description:
        "TechMatch exists to make the technology marketplace easier to navigate for businesses across the United States and Canada.",
      path: "/about",
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">About TechMatch</p>
          <h1 className="mt-4 font-display text-5xl font-bold leading-[1.02] text-balance sm:text-6xl">
            Making the technology marketplace easier to navigate.
          </h1>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-foreground/70">
            <p>
              Technology leaders face an increasingly complex marketplace. TechMatch exists to make that marketplace easier to navigate for organizations throughout the United States and Canada.
            </p>
            <p>
              TechMatch helps internal teams identify appropriate providers, compare solution paths, navigate conversations, and stay supported through implementation and beyond.
            </p>
          </div>
        </div>
        <AdvisoryCard />
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">Principles</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-balance sm:text-4xl">
              Built around better decisions, not vendor noise.
            </h2>
          </div>
          <div className="mt-10">
            <PrinciplesGrid />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-[32px] bg-foreground p-8 text-background sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-balance">Work with a focused technology advisor.</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-background/70">
                Tell TechMatch what your team is trying to solve and we will help you navigate the right technology options.
              </p>
            </div>
            <Button asChild variant="inverse" size="xlPill">
              <Link to="/contact">
                Get a Match <ArrowRightIcon className="size-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
