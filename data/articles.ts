import type { ArticleItem } from "@/types/articles";

export function getArticles(t: (key: string) => string): ArticleItem[] {
  return [
    {
      title: t("articles.rehab.title"),
      description: t("articles.rehab.description"),
      category: t("articles.rehab.category"),
      date: t("articles.rehab.date"),
      author: t("articles.rehab.author"),
      image: "/service1.svg",
      href: "#",
    },
    {
      title: t("articles.medicalTourism.title"),
      description: t("articles.medicalTourism.description"),
      category: t("articles.medicalTourism.category"),
      date: t("articles.medicalTourism.date"),
      author: t("articles.rehab.author"),
      image: "/service2.svg",
      href: "#",
    },
    {
      title: t("articles.nutrition.title"),
      description: t("articles.nutrition.description"),
      category: t("articles.nutrition.category"),
      date: t("articles.nutrition.date"),
      author: t("articles.rehab.author"),
      image: "/service3.svg",
      href: "#",
    },
  ];
}
