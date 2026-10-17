import Image from "next/image";
import type { CSSProperties } from "react";
import { Container } from "@/components/layout/Container";
import { ArchitectureSketch } from "@/components/sections/home/ArchitectureSketch";
import {
  CourseExplorer,
  type ExplorerCourse,
} from "@/components/sections/home/CourseExplorer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { enquiryHref } from "@/config/navigation";
import { clatUg, courses } from "@/content/courses";
import { coursesPhotoSlot, getCoursesPhoto } from "@/content/courses-photo";
import { getCourseVisual } from "@/content/courses-visuals";

const coverageIcons: IconName[] = ["book", "globe", "scales", "branch", "calc"];

function Star({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M12 1l1.9 9.1L23 12l-9.1 1.9L12 23l-1.9-9.1L1 12l9.1-1.9z" />
    </svg>
  );
}

export function CourseShowcase() {
  const photo = getCoursesPhoto();

  const explorerCourses: ExplorerCourse[] = courses.map((course) => ({
    slug: course.slug,
    name: course.name,
    fullName: course.fullName,
    summary: course.summary,
    visual: getCourseVisual(course),
  }));

  return (
    <section id="courses" className="relative overflow-x-clip">
      {/* Overview: choose a path. A warm cream band separates it from the detail below. */}
      <div className="relative bg-[color-mix(in_srgb,var(--color-background)_55%,var(--color-border))] pt-16 pb-24 lg:pt-24 lg:pb-32">
        <CourseExplorer
          courses={explorerCourses}
          enquiryHref={enquiryHref}
          intro={
            <>
              <Reveal>
                <Eyebrow className="text-brand">Courses</Eyebrow>
              </Reveal>
              <Reveal
                as="h2"
                delay={100}
                className="mt-6 font-display text-[2.4rem] leading-[1.08] font-medium tracking-[-0.01em] text-brand sm:text-5xl lg:text-[2.75rem] xl:text-[3.4rem]"
              >
                Preparation built for your path in law
                <span className="text-[color-mix(in_srgb,var(--color-accent)_80%,var(--color-brand))]">
                  .
                </span>
              </Reveal>
              <Reveal
                as="p"
                delay={200}
                className="mt-6 max-w-[20rem] border-l border-accent/50 pl-5 text-sm leading-relaxed text-[#4a4640]"
              >
                Three course areas, guided by one mentorship-led approach.
              </Reveal>
            </>
          }
        />
      </div>

      <ArchitectureSketch className="pointer-events-none absolute right-0 bottom-6 hidden w-72 translate-x-[38%] opacity-30 xl:block" />

      <Container className="relative py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[47fr_53fr] lg:gap-14 xl:gap-16">
          <Reveal
            delay={150}
            className="relative isolate flex min-h-[42rem] flex-col overflow-hidden rounded-tl-[4.5rem] rounded-tr-[6rem] rounded-b-sm bg-brand text-background lg:min-h-[34rem] lg:rounded-tl-[5rem] lg:rounded-tr-[7rem] xl:-ml-14"
          >
            {/* Photograph (or placeholder), blending into the green panel */}
            <div className="absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,transparent_58%,#000_80%)] lg:[mask-image:linear-gradient(to_right,transparent_48%,#000_78%),linear-gradient(to_top,#000_0%,#000_16%,transparent_34%)]">
              {photo && (
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover [object-position:var(--courses-pos-mobile)] lg:[object-position:var(--courses-pos-desktop)]"
                  style={
                    {
                      "--courses-pos-mobile": photo.objectPosition.mobile,
                      "--courses-pos-desktop": photo.objectPosition.desktop,
                    } as CSSProperties
                  }
                />
              )}
            </div>

            {/* Thin gold arch lines and small stars */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 left-5 h-56 w-24 rounded-t-full border border-b-0 border-accent/35"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute bottom-28 left-[46%] hidden h-72 w-44 rounded-t-full border border-b-0 border-accent/25 lg:block"
            />
            <Star className="pointer-events-none absolute bottom-10 left-7 size-3.5 text-accent/70" />
            <Star className="pointer-events-none absolute top-[56%] left-[62%] hidden size-3.5 text-accent/60 lg:block" />

            {!photo && (
              <p
                aria-hidden="true"
                className="absolute right-6 bottom-6 max-w-[16rem] text-right text-[0.65rem] leading-relaxed tracking-[0.08em] text-background/45"
              >
                Courses photography placeholder
                <br />
                Add public/{coursesPhotoSlot.directory}/
                {coursesPhotoSlot.fileName}.webp
                <br />
                {coursesPhotoSlot.aspectRatio} ·{" "}
                {coursesPhotoSlot.recommendedSize} px
              </p>
            )}

            <div className="relative p-8 sm:p-10 lg:p-12">
              <p className="flex items-center gap-4 text-[0.7rem] font-semibold tracking-[0.28em] text-accent uppercase">
                Course detail
                <span aria-hidden="true" className="h-px w-14 bg-accent/70" />
              </p>
              <p className="mt-7 font-display text-[5.5rem] leading-none font-light text-accent lg:text-[6.5rem]">
                01
              </p>
              <span aria-hidden="true" className="mt-3 block h-px w-8 bg-accent" />
              <p className="mt-5 font-display text-5xl leading-none font-medium whitespace-nowrap text-background sm:text-[3.4rem]">
                {clatUg.name}
              </p>
              <p className="mt-6 max-w-[15rem] text-[0.9rem] leading-relaxed text-background/85">
                {clatUg.description}
              </p>
            </div>
          </Reveal>

          <div className="lg:pt-3">
            <h3 className="text-[0.7rem] font-semibold tracking-[0.3em] text-[#4a4640] uppercase">
              What {clatUg.name} covers
            </h3>
            <ol className="mt-5 border-t border-accent/30">
              {(clatUg.coverage ?? []).map((area, index) => (
                <Reveal
                  as="li"
                  key={area.title}
                  delay={250 + index * 90}
                  className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-accent/30 py-[1.15rem] sm:gap-5"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-accent/50 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-accent sm:size-14">
                    <Icon
                      name={coverageIcons[index]}
                      className="size-5 sm:size-6"
                      strokeWidth={1.25}
                    />
                  </span>
                  <div>
                    <p className="font-display text-[1.1rem] leading-snug text-brand sm:text-[1.2rem]">
                      {area.title}
                    </p>
                    <p className="mt-1 max-w-[24rem] text-[0.8rem] leading-snug text-[#4a4640]">
                      {area.description}
                    </p>
                  </div>
                  <span className="font-display text-lg text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
