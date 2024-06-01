import type { NavMenuConfig } from "@/types";

export const navMenuConfig: NavMenuConfig = {
  pagesNav: [
    {
      title: "Get Started",
      items: [
        {
          title: "Documentation",
          href: "#",
          description: "Learn how to get started with Zora.",
          image: "",
        },
        {
          title: "Download",
          href: "/download",
          description: "Download Zora Now!",
          image: "#",
        },
        {
          title: "About",
          href: "/#",
          description: "Learn more about us.",
          image: "#",
        },
      ],
    },
  ],
  examplesNav: [
    {
      title: "Contribute",
      items: [
        {
          title: "Contribute",
          href: "/#",
          description: "Become a Zora contributor.",
          image: "#",
        },
      ],
    },
  ],
  links: [
    {
      title: "Download",
      href: "/#",
      description: "Download Zora",
      image: "#",
    },
  ],
};
