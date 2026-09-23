import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { ArrowRightIcon, CheckIcon, MatchMark } from "./icons";
import monogramLight from "@/assets/techmatch-monogram-light.png.asset.json";
import { allServices, company, faqs, principles, processSteps, serviceGroups, valuePillars } from "./content";

const toneClasses = {
  brand: "bg-brand/10 text-brand",
  accent: "bg-accent/10 text-accent",
  mint: "bg-mint/10 text-mint",
};

export function HeroVisual() {
  return (
    <div className="relative rounded-[28px] border border-line bg-surface p-6 shadow-match">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground/40">Your requirements</span>
        <span className="size-2 rounded-full bg-mint" aria-hidden="true" />
      </div>
      <div className="mt-4 space-y-3">
        {[
          ["Cloud migration", "Matched", "text-brand"],
          ["Endpoint security", "Matched", "text-brand"],
          ["UCaaS platform", "Evaluating", "text-accent"],
        ].map(([label, status, statusClass]) => (
          <div key={label} className="flex items-center justify-between rounded-2xl bg-background px-4 py-3">
            <span className="text-sm font-medium">{label}</span>
            <span className={cn("text-xs font-semibold", statusClass)}>{status}</span>
          </div>
        ))}
      </div>
      <div className="mt-5 grid place-items-center">
        <span className="grid size-10 place-items-center rounded-full bg-brand font-bold text-brand-foreground" aria-hidden="true">
          →
        </span>
      </div>
      <div className="mt-5 flex items-center gap-3 rounded-2xl bg-foreground px-4 py-4 text-background">
        <img
          src={monogramLight.url}
          alt=""
          aria-hidden="true"
          className="h-9 w-auto shrink-0 object-contain"
        />
        <div>
          <p className="text-sm font-semibold">Best-fit provider shortlist</p>
          <p className="text-xs text-background/60">3 options · compared · ready to negotiate</p>
        </div>
      </div>
      <div className="absolute -right-3 -top-4 rotate-6 rounded-full bg-accent px-4 py-2 text-xs font-bold text-accent-foreground shadow-sm">
        One trusted advisor
      </div>
    </div>
  );
}

export function ValuePillars() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-balance sm:text-4xl">
            {company.providerCount} Technology Providers. One Trusted Advisor.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/70">
            TechMatch helps clients navigate a large technology ecosystem without having to independently research and evaluate dozens of providers.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {valuePillars.map((pillar) => (
            <article key={pillar.title} className="rounded-3xl bg-background p-7">
              <div className={cn("grid size-11 place-items-center rounded-2xl text-lg font-bold", toneClasses[pillar.tone])}>
                {pillar.number}
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">{pillar.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServicesPreview() {
  const previewServices = allServices.slice(0, 6);

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">What we help you source</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold text-balance sm:text-4xl">
            Thirteen ways we match you to the right technology.
          </h2>
        </div>
        <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
          View all services <ArrowRightIcon className="size-4" />
        </Link>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {previewServices.map((service) => (
          <article key={service.title} className="group rounded-3xl border border-line bg-surface p-6 transition motion-safe:hover:-translate-y-1 hover:border-brand/40">
            <h3 className="font-display text-lg font-semibold">{service.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/65">{service.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ProcessPreview() {
  return (
    <section className="bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-mint">How it works</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-balance sm:text-4xl">
              A focused process, start to finish.
            </h2>
          </div>
          <Button asChild variant="inverse" size="pill">
            <Link to="/how-it-works">
              See How It Works <ArrowRightIcon className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <article key={step.title} className="rounded-3xl border border-background/10 bg-background/5 p-6">
              <span className={cn("font-display text-4xl font-bold", index < 2 ? "text-brand" : index === 2 ? "text-accent" : "text-mint")}>{step.step}</span>
              <h3 className="mt-4 font-display text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-background/65">{step.short}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DifferentiatorSection() {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">A time multiplier for IT teams</p>
        <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-balance sm:text-4xl">
          Your time is better spent running IT than researching vendors.
        </h2>
      </div>
      <div className="space-y-4 text-base leading-relaxed text-foreground/70">
        <p>
          Technology leaders are constantly approached by vendors and faced with an enormous number of overlapping solutions. TechMatch does much of the market research, coordination, and comparison work so your team can stay focused on priorities.
        </p>
        <p>
          You get the responsiveness of a focused advisory team and continued involvement after a solution has been selected.
        </p>
      </div>
    </section>
  );
}

export function ClosingCta() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="rounded-[32px] bg-brand px-8 py-14 text-center text-brand-foreground sm:px-14">
        <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold leading-tight text-balance sm:text-5xl">
          Tell us what you're trying to solve. We'll help you find the right match.
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild variant="dark" size="xlPill">
            <Link to="/contact">
              Get a Match <ArrowRightIcon className="size-5" />
            </Link>
          </Button>
          <Button asChild variant="lightOutline" size="xlPill">
            <a href={`mailto:${company.email}`}>Talk to TechMatch</a>
          </Button>
        </div>
        <p className="mt-6 text-sm text-brand-foreground/70">{company.email}</p>
      </div>
    </section>
  );
}

export function ServicesByGroup({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className={cn("grid gap-6", detailed ? "lg:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-4")}>
      {serviceGroups.map((group) => (
        <section key={group.eyebrow} className="rounded-3xl border border-line bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">{group.eyebrow}</p>
          <h2 className="mt-3 font-display text-2xl font-bold">{group.eyebrow}</h2>
          <p className="mt-3 text-sm leading-relaxed text-foreground/65">{group.description}</p>
          <div className="mt-6 space-y-5">
            {group.services.map((service) => (
              <article key={service.title} className={cn(detailed ? "border-t border-line pt-5" : "")}> 
                <h3 className="font-display text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">{detailed ? service.detail : service.summary}</p>
                {detailed ? <p className="mt-3 text-xs font-medium text-brand">{service.keywords}</p> : null}
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export function ProcessDetail() {
  return (
    <ol className="grid gap-5">
      {processSteps.map((step) => (
        <li key={step.title} className="grid gap-5 rounded-3xl border border-line bg-surface p-6 md:grid-cols-[5rem_1fr] md:p-8">
          <div className="grid size-14 place-items-center rounded-2xl bg-brand/10 font-display text-xl font-bold text-brand">
            {step.step}
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold">{step.title}</h2>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-foreground/70">{step.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function PrinciplesGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {principles.map((principle) => (
        <article key={principle.title} className="rounded-3xl border border-line bg-surface p-6">
          <div className="grid size-10 place-items-center rounded-2xl bg-mint/10 text-mint">
            <CheckIcon className="size-5" />
          </div>
          <h2 className="mt-5 font-display text-xl font-semibold">{principle.title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-foreground/70">{principle.description}</p>
        </article>
      ))}
    </div>
  );
}

export function FaqList({ limit }: { limit?: number }) {
  const shown = typeof limit === "number" ? faqs.slice(0, limit) : faqs;

  return (
    <div className="divide-y divide-line rounded-3xl border border-line bg-surface">
      {shown.map((faq) => (
        <details key={faq.question} className="group p-6">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-5 font-display text-lg font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface">
            <span>{faq.question}</span>
            <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-background text-brand transition-transform group-open:rotate-45" aria-hidden="true">
              +
            </span>
          </summary>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-foreground/70">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}

export function AdvisoryCard() {
  return (
    <div className="rounded-3xl border border-line bg-surface p-8 shadow-match">
      <MatchMark className="size-12 text-brand" />
      <h2 className="mt-6 font-display text-2xl font-bold">One focused advisor across the whole decision.</h2>
      <p className="mt-4 text-sm leading-relaxed text-foreground/70">
        From finding the right providers to negotiating terms and navigating implementation, TechMatch does the legwork so your team can focus on the decision.
      </p>
      <div className="mt-8 border-t border-line pt-8">
        <p className="font-display text-5xl font-bold leading-none text-brand">500+</p>
        <p className="mt-3 text-sm text-foreground/55">Technology providers. One point of contact.</p>
      </div>
    </div>
  );
}
