import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon, type IconName } from "@/components/ui/Icon";
import { DrawPath, Reveal } from "@/components/ui/Reveal";

const VIEW_W = 480;
const VIEW_H = 440;

const JOURNEY_PATH =
  "M40 420C140 420 160 340 240 330C320 320 345 290 330 220C315 150 200 190 230 120C260 50 330 90 388 56";

const pct = (value: number, total: number) => `${(value / total) * 100}%`;

const nodes: {
  label: string;
  icon: IconName;
  x: number;
  y: number;
  side: "left" | "right";
}[] = [
  { label: "Law school", icon: "columns", x: 330, y: 220, side: "left" },
  { label: "Habits", icon: "book", x: 230, y: 120, side: "left" },
];

function ExamPath() {
  return (
    <div className="relative mx-auto aspect-[480/440] w-full max-w-md lg:max-w-none">
      <svg
        aria-hidden="true"
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="absolute inset-0 size-full"
        fill="none"
      >
        <g className="stroke-accent">
          <circle cx="388" cy="52" r="34" strokeOpacity="0.45" />
          <circle cx="388" cy="52" r="62" strokeOpacity="0.28" />
          <circle cx="388" cy="52" r="92" strokeOpacity="0.16" />
          <circle cx="388" cy="52" r="124" strokeOpacity="0.09" />
        </g>

        {[0, 1.2, 2.4].map((delay) => (
          <circle
            key={delay}
            cx="388"
            cy="52"
            r="34"
            style={{ animationDelay: `${3.4 + delay}s` }}
            className="animate-ripple stroke-accent opacity-0 [transform-box:fill-box] origin-center"
          />
        ))}

        <g className="stroke-accent" strokeOpacity="0.1">
          <path d="M0 436H480" />
          <path d="M0 400H480" />
        </g>

        <DrawPath
          d="M40 420C140 420 160 340 240 330"
          className="stroke-background"
          strokeWidth={3}
          duration={800}
        />
        <DrawPath
          d="M240 330C320 320 345 290 330 220C315 150 200 190 230 120C260 50 330 90 388 56"
          className="stroke-accent"
          strokeWidth={2.5}
          dashed
          delay={700}
          duration={1800}
        />

        <path d="M240 298V362" className="stroke-accent" strokeWidth="3" />
        <path d="M240 298l26 9-26 9z" className="fill-accent stroke-accent" />

        <circle
          r="5"
          style={{ offsetPath: `path("${JOURNEY_PATH}")` }}
          className="animate-trek fill-background opacity-0 drop-shadow-[0_0_8px_rgb(250_247_240)]"
        />
      </svg>

      <div
        className="absolute"
        style={{ left: pct(240, VIEW_W), top: pct(300, VIEW_H) }}
      >
        <Reveal
          variant="fade"
          delay={500}
          className="-translate-x-[calc(100%+1.25rem)] -translate-y-1/2 border border-background/30 px-3 py-1.5 text-[0.65rem] font-semibold tracking-[0.25em] text-background uppercase"
        >
          The exam
        </Reveal>
      </div>

      {nodes.map((node, index) => (
        <div
          key={node.label}
          className="absolute"
          style={{ left: pct(node.x, VIEW_W), top: pct(node.y, VIEW_H) }}
        >
          <Reveal
            variant="scale"
            delay={1000 + index * 500}
            className="relative -translate-x-1/2 -translate-y-1/2"
          >
            <span
              style={{ animationDelay: `${-index * 2.5}s` }}
              className="relative block animate-float"
            >
              <span className="flex size-12 items-center justify-center rounded-full border border-accent bg-brand text-accent shadow-[0_0_0_6px_var(--color-brand)]">
                <Icon name={node.icon} />
              </span>
              <span
                className={`absolute top-1/2 -translate-y-1/2 text-xs font-semibold tracking-[0.2em] whitespace-nowrap text-background uppercase ${
                  node.side === "left" ? "right-full mr-4" : "left-full ml-4"
                }`}
              >
                {node.label}
              </span>
            </span>
          </Reveal>
        </div>
      ))}

      <div
        className="absolute"
        style={{ left: pct(388, VIEW_W), top: pct(52, VIEW_H) }}
      >
        <Reveal
          variant="scale"
          delay={2200}
          className="relative -translate-x-1/2 -translate-y-1/2"
        >
          <span
            style={{ animationDelay: "-1.5s" }}
            className="relative block animate-float"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 animate-ping rounded-full bg-accent/50 [animation-delay:3.4s] [animation-duration:2.8s]"
            />
            <span className="relative flex size-16 items-center justify-center rounded-full bg-accent text-brand ring-8 ring-accent/20">
              <Icon name="door" className="size-8" />
            </span>
            <span className="absolute top-full left-1/2 mt-3 -translate-x-1/2 text-xs font-semibold tracking-[0.2em] whitespace-nowrap text-background uppercase">
              Direction
            </span>
          </span>
        </Reveal>
      </div>
    </div>
  );
}

export function BeyondTheExam() {
  return (
    <section
      id="about"
      data-motion
      className="relative overflow-hidden bg-brand text-background"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 right-[4%] size-96 animate-drift rounded-full bg-accent/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-16 size-72 animate-drift rounded-full bg-background/5 blur-3xl [animation-delay:-7s]"
      />
      <Container className="relative grid items-center gap-16 py-24 lg:grid-cols-12 lg:gap-8 lg:py-32">
        <div className="lg:col-span-6">
          <Reveal>
            <Eyebrow className="text-background/70">Beyond the Exam</Eyebrow>
          </Reveal>

          <Reveal
            as="blockquote"
            delay={120}
            className="mt-10 font-display text-3xl leading-snug text-balance sm:text-4xl lg:text-[2.9rem] lg:leading-[1.2]"
          >
            We don’t just prepare students for an examination.{" "}
            <span className="text-accent">
              We mentor them for the journey beyond it.
            </span>
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:pl-8">
          <ExamPath />
        </div>
      </Container>
    </section>
  );
}
