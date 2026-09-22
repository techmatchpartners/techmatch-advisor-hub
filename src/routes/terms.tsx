import { createFileRoute, Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { company, pageMeta } from "@/components/techmatch/content";
import { ArrowRightIcon } from "@/components/techmatch/icons";

export const Route = createFileRoute("/terms")({
  head: () =>
    pageMeta({
      title: "Terms — TechMatch LLC",
      description: "Terms placeholder for TechMatch LLC, ready to be replaced with final legal language.",
      path: "/terms",
    }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16 lg:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">Legal</p>
      <h1 className="mt-4 font-display text-5xl font-bold leading-[1.02] tracking-tight text-balance sm:text-6xl">
        Terms
      </h1>
      <div className="mt-8 rounded-3xl border border-line bg-surface p-6 text-sm leading-relaxed text-foreground/70 sm:p-8">
        <p>
          This page is reserved for TechMatch LLC's Terms. Final legal language can be added here before launch.
        </p>
        <p className="mt-4">
          For questions, contact <a className="font-semibold text-brand hover:text-foreground" href={`mailto:${company.email}`}>{company.email}</a>.
        </p>
      </div>
      <Button asChild variant="dark" size="xlPill" className="mt-8">
        <Link to="/contact">
          Get a Match <ArrowRightIcon className="size-5" />
        </Link>
      </Button>
    </section>
  );
}
