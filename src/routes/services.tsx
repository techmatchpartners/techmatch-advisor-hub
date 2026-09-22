import { Link, createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { allServices, pageMeta, serviceGroups } from "@/components/techmatch/content";
import { ArrowRightIcon } from "@/components/techmatch/icons";
import { ServicesByGroup } from "@/components/techmatch/sections";

export const Route = createFileRoute("/services")({
  head: () => ({
    ...pageMeta({
      title: "Technology Advisory Services — TechMatch LLC",
      description:
        "Explore TechMatch services for cybersecurity, UCaaS, CCaaS, managed IT, cloud, connectivity, vendor selection, contract negotiation, and IT cost optimization.",
      path: "/services",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "TechMatch technology advisory services",
          itemListElement: allServices.map((service, index) => ({
            "@type": "Service",
            position: index + 1,
            name: service.title,
            description: service.summary,
            provider: { "@type": "Organization", name: "TechMatch LLC" },
            areaServed: ["United States", "Canada"],
          })),
        }),
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">Technology advisory services</p>
        <div className="mt-4 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <h1 className="font-display text-5xl font-bold leading-[1.02] text-balance sm:text-6xl">
              Find the right technology without sorting through the whole market.
            </h1>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-foreground/70">
            <p>
              TechMatch helps organizations evaluate solutions across security, communications, infrastructure, operations, strategy, vendor selection, negotiation, and optimization.
            </p>
            <p>
              The services below are organized around the decisions your team needs to make today, while leaving room to expand into dedicated service pages later.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <ServicesByGroup detailed />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-[32px] bg-foreground p-8 text-background sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-balance">Have a category in mind?</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-background/70">
                TechMatch can help compare providers already under consideration or identify alternative approaches from its ecosystem of 400+ technology providers.
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
