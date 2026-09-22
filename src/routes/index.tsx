import { Link, createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { pageMeta } from "@/components/techmatch/content";
import { ArrowRightIcon } from "@/components/techmatch/icons";
import {
  ClosingCta,
  DifferentiatorSection,
  HeroVisual,
  ProcessPreview,
  ServicesPreview,
  ValuePillars,
} from "@/components/techmatch/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    ...pageMeta({
      title: "TechMatch LLC — Technology Advisory & Vendor Selection",
      description:
        "TechMatch helps IT leaders across the United States and Canada identify, evaluate, negotiate, and implement technology solutions from 500+ providers.",
      path: "/",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Technology advisory services",
          provider: { "@type": "Organization", name: "TechMatch LLC" },
          areaServed: ["United States", "Canada"],
          serviceType: "Technology advisory and IT vendor selection",
          description:
            "Technology advisory services helping organizations identify, evaluate, negotiate, and implement the right technology solutions.",
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-16 lg:grid-cols-12 lg:pt-24">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand">
              <span className="size-1.5 rounded-full bg-mint" aria-hidden="true" /> {"500+ technology providers"}
            </p>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[0.98] text-balance sm:text-6xl lg:text-7xl">
              Technology decisions, <span className="text-brand">matched</span> to your business.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/70">
              TechMatch helps IT leaders navigate 500+ technology providers to find, evaluate, negotiate, and implement the solutions that fit your organization — so your team can focus on running IT.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button asChild variant="dark" size="xlPill">
                <Link to="/contact">
                  Get a Match <ArrowRightIcon className="size-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xlPill" className="rounded-full border-foreground/20 bg-transparent text-foreground shadow-none hover:bg-surface">
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-foreground/50">Built for IT and business leaders across the United States and Canada.</p>
          </div>
          <div className="lg:col-span-5">
            <HeroVisual />
          </div>
        </div>
      </section>

      <ValuePillars />
      <ServicesPreview />
      <ProcessPreview />
      <DifferentiatorSection />
      <ClosingCta />
    </>
  );
}
