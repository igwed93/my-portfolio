import { Project } from "@/types/types";

export const projects: Project[] = [
  {
    title: "Blog API",
    description:
      "RESTful blog API with auth, role-based permissions, comments & reactions. Secure coding practices and clean service layer.",
    tech: ["Node.js", "Express.js", "PostgreSQL/Prisma", "JWT"],
    repo: "https://github.com/your-username/blog-api",
  },
  {
    title: "Task Manager API",
    description:
      "Tasks CRUD, deadlines, categories, JWT auth, and RBAC. Production-ready structure with services & validators.",
    tech: ["Node.js", "Express.js", "PostgreSQL", "Joi/Zod"],
    repo: "https://github.com/your-username/task-manager-api",
  },
  {
    title: "E-commerce API",
    description:
      "Products, categories, cart → order flow, and address model. Designed for secure payments integration later.",
    tech: ["Node.js", "Express.js", "PostgreSQL", "Prisma"],
    repo: "https://github.com/your-username/ecommerce-api",
  },
  {
    title: "UNN Website Clone",
    description:
      "Pixel-accurate clone emphasizing responsive design, accessibility, and performance.",
    tech: ["Next.js", "Tailwind CSS"],
    repo: "https://github.com/your-username/unn-clone",
    href: "https://unn-clone-demo.vercel.app",
  },
];
