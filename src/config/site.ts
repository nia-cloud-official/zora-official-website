import type { SidebarNavItem, SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Zora",
  description:
    "all-in-one database solution for everyone..",
  url: "https://wwww.zoralumin.com/",
  ogImage: "#",
  links: {
    twitter: "https://twitter.com/zora",
    github: "https://github.com/nia-cloud-official/zora",
  },
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Company",
    items: [
      { title: "About", href: "#" },
      { title: "Enterprise", href: "#" },
      { title: "Partners", href: "#" },
      { title: "Jobs", href: "#" },
    ],
  },
  {
    title: "Product",
    items: [
      { title: "Security", href: "#" },
      { title: "Customization", href: "#" },
      { title: "Customers", href: "#" },
      { title: "Changelog", href: "#" },
    ],
  },
  {
    title: "Docs",
    items: [
      { title: "Introduction", href: "#" },
      { title: "Installation", href: "#" },
      { title: "Components", href: "#" },
      { title: "Code Blocks", href: "#" },
    ],
  },
];