import Link from "next/link";
import { LinkButton } from "@/components/Button";

const navItems = [{ href: "/timeline", label: "Timeline" }];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-spruce/10 bg-cream/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-full">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-xl font-bold text-spruce shadow-soft">
            K
          </span>
          <span className="text-xl font-bold text-spruce">Kindle</span>
        </Link>
        <div className="flex items-center gap-3">
          <nav aria-label="Main navigation" className="hidden sm:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring rounded-full px-4 py-2 text-sm font-bold text-spruce transition hover:bg-white/70"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <LinkButton href="/start" className="min-h-11 px-5 py-2 text-sm">
            Start My Story
          </LinkButton>
        </div>
      </div>
    </header>
  );
}
