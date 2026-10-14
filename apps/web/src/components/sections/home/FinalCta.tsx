import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { enquiryHref } from "@/config/navigation";

function Arches({ side }: { side: "left" | "right" }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute bottom-0 hidden h-[30rem] w-[24rem] lg:block ${
        side === "left" ? "-left-28" : "-right-28"
      }`}
    >
      {[24, 19, 14].map((rem) => (
        <div
          key={rem}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-t-full border border-b-0 border-accent/20"
          style={{ width: `${rem}rem`, height: `${rem * 1.25}rem` }}
        />
      ))}
    </div>
  );
}

export function FinalCta() {
  return (
    <section id="contact" className="relative overflow-hidden bg-brand text-background">
      <Arches side="left" />
      <Arches side="right" />

      <Container className="relative py-24 text-center lg:py-32">
        <Reveal>
          <Eyebrow className="justify-center text-background/70">
            Begin the Journey
          </Eyebrow>
        </Reveal>
        <Reveal as="h2" delay={120} className="mx-auto mt-8 max-w-3xl font-display text-4xl leading-tight text-balance sm:text-5xl lg:text-6xl">
          Your journey in law starts with more than preparation.
        </Reveal>
        <Reveal delay={260} className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href={enquiryHref} variant="light" className="group">
            Talk to Us
            <Icon
              name="arrow"
              className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </ButtonLink>
          <ButtonLink href="/#courses" variant="outline-light">
            Explore CLAT UG
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}
