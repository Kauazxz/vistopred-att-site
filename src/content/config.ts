// src/content/config.ts
import { defineCollection, z } from "astro:content";

export const collections = {
  blog: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      excerpt: z.string(),
      category: z.enum([
        "Tecnologia",
        "Guias",
        "Manutenção",
        "Gestão",
        "Novidades",
        "Segurança"
      ]),
      tags: z.array(z.string()).min(1),
      author: z.string(),
      date: z.string(),
      cover: z.string(),

      // SEO opcional
      seo: z
        .object({
          title: z.string().optional(),
          description: z.string().optional(),
          keywords: z.string().optional(),
          canonical: z.string().optional(),
        })
        .optional(),
    }),
  }),
};
