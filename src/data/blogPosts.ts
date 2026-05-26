export type BlogCategory = "Tecnologia" | "Guias" | "Manutenção" | "Novidades" | "Gestão";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;   // texto curto pro card + modal
  content: string;   // conteúdo completo (HTML simples ou markdown convertido depois)
  category: BlogCategory;
  tags: string[];
  author: string;
  dateISO: string;   // "2026-01-15"
  cover: string;     // "/images/blog/..."
};

export const blogPosts = [
  {
    slug: "teste",
    title: "Post Teste",
    excerpt: "Resumo teste",
    content: "<p>Conteúdo completo teste</p>",
    category: "Tecnologia",
    tags: ["teste"],
    author: "Vistopred",
    dateISO: "2026-01-15",
    cover: "/images/blog/tech.jpg",
  },  
];