import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { ArrowRightIcon, CloseIcon, MenuIcon } from "./icons";
import { company, navItems } from "./content";

export function TechMatchLayout({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-body text-foreground antialiased">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-background"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-50 border-b border-line bg-background/85 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6" aria-label="Primary navigation">
          <Link to="/" className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
            <span className="grid size-8 place-items-center rounded-lg bg-foreground font-display text-sm font-bold text-background">
              M
            </span>
            <span className="font-display text-lg font-bold">TechMatch</span>
          </Link>

          <div className="hidden items-center gap-8 text-sm font-medium text-foreground/70 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                activeProps={{ className: "text-foreground" }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Button asChild variant="brand" size="pill">
              <Link to="/contact">
                Get a Match
                <ArrowRightIcon className="size-4" />
              </Link>
            </Button>
          </div>

          <Button
            type="button"
            variant="outline"
            size="icon"
            className="inline-grid size-10 rounded-full border-line bg-surface text-foreground shadow-none hover:bg-muted md:hidden"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
          </Button>
        </nav>

        {isOpen ? (
          <div className="border-t border-line bg-background md:hidden">
            <div className="mx-auto grid max-w-6xl gap-2 px-6 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="rounded-2xl px-3 py-3 text-sm font-semibold text-foreground/75 transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  activeProps={{ className: "bg-muted text-foreground" }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild variant="brand" size="pill" className="mt-2 justify-center">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Get a Match
                  <ArrowRightIcon className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        ) : null}
      </header>

      <main id="main-content">{children}</main>

      <footer className="border-t border-line bg-surface">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface">
              <span className="grid size-8 place-items-center rounded-lg bg-foreground font-display text-sm font-bold text-background">
                M
              </span>
              <span className="font-display text-lg font-bold">TechMatch</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-foreground/60">
              A trusted technology advisor for organizations of {company.employeeRange} across the {company.geography}.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground/40">Explore</p>
            <ul className="mt-4 space-y-2 text-sm text-foreground/70">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground/40">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-foreground/70">
              <li>
                <Link to="/contact" className="transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface">
                  Get a Match
                </Link>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface">
                  {company.email}
                </a>
              </li>
              <li>
                <Link to="/privacy" className="transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-line">
          <p className="mx-auto max-w-6xl px-6 py-5 text-xs text-foreground/45">© 2026 TechMatch LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return <span className={cn("font-display font-bold", className)}>TechMatch</span>;
}
