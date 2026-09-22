import { Link, createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { pageMeta } from "@/components/techmatch/content";
import { ArrowRightIcon } from "@/components/techmatch/icons";
import { ProcessDetail } from "@/components/techmatch/sections";

export const Route = createFileRoute("/how-it-works")({
  head: () =>
    pageMeta({
      title: "How TechMatch Works — Advisory Process",
      description:
        "Learn how TechMatch helps teams understand requirements, match providers, evaluate proposals, negotiate terms, and stay supported through implementation.",
      path: "/how-it-works",
    }),
  component: HowItWorksPage,
});

function HowItWorksPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">How it works</p>
        <div className="mt-4 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-tight text-balance sm:text-6xl">
            A focused process for better technology decisions.
          </h1>
          <p className="text-lg leading-relaxed text-foreground/70">
            TechMatch starts by understanding your business and technical requirements rather than immediately recommending a specific vendor. We can work alongside existing internal IT teams, executives, consultants, MSPs, and other technology stakeholders.
          </p>
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <ProcessDetail />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-balance">Advisory support that stays engaged.</h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/70">
            Technology sourcing rarely ends at a shortlist. TechMatch helps coordinate conversations, compare proposals, navigate pricing, and remain available through implementation and beyond.
          </p>
        </div>
        <div className="rounded-[32px] bg-brand p-8 text-brand-foreground sm:p-10">
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-balance">
            Have a technology project in mind? Let's find the right match.
          </h2>
          <Button asChild variant="dark" size="xlPill" className="mt-7">
            <Link to="/contact">
              Get a Match <ArrowRightIcon className="size-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
