import { Approach } from "@/components/sections/home/Approach";
import { BeyondTheExam } from "@/components/sections/home/BeyondTheExam";
import { CourseShowcase } from "@/components/sections/home/CourseShowcase";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { Hero } from "@/components/sections/home/Hero";
import { Journey } from "@/components/sections/home/Journey";
import { Mentorship } from "@/components/sections/home/Mentorship";
import { Ribbon } from "@/components/sections/home/Ribbon";

export default function Home() {
  return (
    <>
      <Hero />
      <Ribbon />
      <BeyondTheExam />
      <CourseShowcase />
      <Approach />
      <Mentorship />
      <Journey />
      <FinalCta />
    </>
  );
}
