export type TechStackCategory = {
  category: string;
  items: string[];
};

export const techStack: TechStackCategory[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript"],
  },

  { category: "Exploring", items: ["Rust", "Java"] },
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "Angular",
      "Tailwind CSS",
      "PrimeNG",
      "Chakra UI",
      "Material UI",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "NestJS"],
  },
  {
    category: "Databases & ORM",
    items: ["PostgreSQL", "MongoDB", "TypeORM"],
  },
  {
    category: "Testing & API Tools",
    items: ["Jest", "Postman", "Insomnia", "Swagger"],
  },
  {
    category: "Tools & Libraries",
    items: ["Git", "Figma", "RxJS", "Chart.js", "Google Maps"],
  },
];
