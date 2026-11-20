import { createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/techmatch/ContactForm";
import { ArrowRightIcon } from "@/components/techmatch/icons";
import { company, pageMeta } from "@/components/techmatch/content";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageMeta({
      title: "Get a Match | TechMatch",
      description:
        "Contact TechMatch to discuss your technology project and get help identifying, evaluating, negotiating, and implementing the right solution.",
      path: "/contact",
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[0.88fr_1.12fr] lg:items-start lg:py-24">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">Get a Match</p>
        <h1 className="mt-4 font-display text-5xl font-bold leading-[1.02] text-balance sm:text-6xl">
          Let's find your match.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-foreground/70">
          Tell us what you're working on and a member of the TechMatch team will get in touch.
        </p>
        <div className="mt-8 rounded-3xl border border-line bg-surface p-6">
          <p className="text-sm font-semibold text-foreground">Prefer to talk now?</p>
          <p className="mt-2 text-sm leading-relaxed text-foreground/60">
            Pick a time that works for you and book a 30-minute intro call.
          </p>
          <Button asChild variant="brand" size="pill" className="mt-4">
            <a href={company.bookingUrl} target="_blank" rel="noopener noreferrer">
              Book a call
              <ArrowRightIcon className="size-4" />
            </a>
          </Button>
        </div>
        <div className="mt-4 rounded-3xl border border-line bg-surface p-6">
          <p className="text-sm font-semibold text-foreground">Prefer email?</p>
          <a href={`mailto:${company.email}`} className="mt-2 inline-block break-all text-base font-semibold text-brand transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface">
            {company.email}
          </a>
          <p className="mt-4 text-sm leading-relaxed text-foreground/60">
            TechMatch serves organizations throughout the United States and Canada.
          </p>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
