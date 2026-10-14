import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { enquiryHref, mainNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { clatUg } from "@/content/courses";

const headingClass =
  "text-xs font-semibold tracking-[0.25em] text-brand uppercase";
const linkClass = "text-sm text-muted transition-colors hover:text-brand";

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-accent bg-background">
      <Container className="grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Link
            href="/"
            className="font-display text-2xl font-semibold tracking-[0.14em] text-brand uppercase"
          >
            {siteConfig.name}
          </Link>
          <p className="mt-6 text-xs font-semibold tracking-[0.25em] text-brand uppercase">
            {siteConfig.tagline}
          </p>
          <p className="mt-1 font-display text-xl text-muted">
            {siteConfig.strapline}
          </p>
        </div>

        <nav aria-label="Footer" className="md:col-span-3 md:col-start-7">
          <h2 className={headingClass}>Explore</h2>
          <ul className="mt-5 space-y-3">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <h2 className={headingClass}>Courses</h2>
          <ul className="mt-5 space-y-3">
            <li>
              <Link href="/#courses" className={linkClass}>
                {clatUg.name}
              </Link>
            </li>
          </ul>
          <Link
            href={enquiryHref}
            className="mt-8 inline-block text-sm font-medium text-brand underline decoration-accent decoration-2 underline-offset-8 transition-colors hover:text-accent"
          >
            Talk to a mentor
          </Link>
        </div>
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col gap-2 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="font-display">{siteConfig.strapline}</p>
        </Container>
      </div>
    </footer>
  );
}
