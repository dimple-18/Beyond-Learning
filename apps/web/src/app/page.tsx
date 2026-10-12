import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="font-display text-4xl font-semibold tracking-[0.12em] text-brand uppercase sm:text-6xl">
        {siteConfig.name}
      </h1>
      <span aria-hidden="true" className="mt-8 h-px w-16 bg-accent" />
      <p className="mt-8 text-sm font-medium tracking-[0.3em] text-brand uppercase">
        {siteConfig.tagline}
      </p>
      <p className="mt-3 font-display text-xl text-muted sm:text-2xl">
        {siteConfig.strapline}
      </p>
    </main>
  );
}
