import { Instagram, Github, Twitter } from "lucide-react";

export interface socialMedia {
  id: number;
  title: string;
  href: string;
  icon: React.ReactNode;
}

export const socialMedia: socialMedia[] = [
  {
    id: 1,
    title: "twitter",
    href: "https://x.com/vianismee/",
    icon: <Twitter className="stroke-primary/20 hover:stroke-primary" />,
  },
  {
    id: 2,
    title: "instagram",
    href: "https://www.instagram.com/vianismee.eth/",
    icon: <Instagram className="stroke-primary/20 hover:stroke-primary" />,
  },
  {
    id: 3,
    title: "github",
    href: "https://github.com/vianismee/",
    icon: <Github className="stroke-primary/20 hover:stroke-primary" />,
  },
];
