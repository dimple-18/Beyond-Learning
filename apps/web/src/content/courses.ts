export type CourseArea = {
  title: string;
  description: string;
};

export type Course = {
  slug: string;
  name: string;
  fullName: string;
  /** One-line overview shown in the course index. */
  summary: string;
  /** Short description shown on the detail panel. */
  description: string;
  /**
   * Subject coverage. Only add this once the client supplies it: do not
   * invent syllabus details. Courses without it are shown without a coverage list.
   */
  coverage?: CourseArea[];
};

export const clatUg: Course = {
  slug: "clat-ug",
  name: "CLAT UG",
  fullName: "Common Law Admission Test — Undergraduate",
  summary:
    "A focused, structured program designed to strengthen every section of the CLAT UG examination.",
  description:
    "A comprehensive program to build strong concepts, sharpen reasoning and prepare you for success in CLAT UG.",
  coverage: [
    {
      title: "English Language",
      description:
        "Reading comprehension, vocabulary, grammar and critical reasoning.",
    },
    {
      title: "Current Affairs, including General Knowledge",
      description:
        "National, international, legal and static GK with conceptual clarity.",
    },
    {
      title: "Legal Reasoning",
      description:
        "Understand legal principles and apply them to real-world scenarios.",
    },
    {
      title: "Logical Reasoning",
      description:
        "Develop analytical and problem-solving skills with varied question types.",
    },
    {
      title: "Quantitative Techniques",
      description:
        "Build accuracy and speed with fundamental mathematical concepts.",
    },
  ],
};

// CLAT PG and Judiciary: conservative labels only. No fees, dates, durations,
// results, eligibility or syllabus details have been supplied by the client.
export const clatPg: Course = {
  slug: "clat-pg",
  name: "CLAT PG",
  fullName: "Common Law Admission Test — Postgraduate",
  summary: "Guided preparation and mentorship for the CLAT PG examination.",
  description: "Guided preparation and mentorship for the CLAT PG examination.",
};

export const judiciary: Course = {
  slug: "judiciary",
  name: "Judiciary",
  fullName: "Judiciary Examinations",
  summary: "Guided preparation and mentorship for judiciary examinations.",
  description: "Guided preparation and mentorship for judiciary examinations.",
};

/** The three course areas offered, in display order. */
export const courses: readonly Course[] = [clatUg, clatPg, judiciary];
