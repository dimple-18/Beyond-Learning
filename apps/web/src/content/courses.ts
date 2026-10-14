export type CourseArea = {
  title: string;
  description: string;
};

export type Course = {
  slug: string;
  name: string;
  fullName: string;
  /** One-line overview shown beside the section heading. */
  summary: string;
  /** Short description shown on the flagship panel. */
  description: string;
  coverage: CourseArea[];
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
