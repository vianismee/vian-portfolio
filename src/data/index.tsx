import { Instagram, Github, Twitter } from "lucide-react";

export interface socialMedia {
  id: number;
  title: string;
  href: string;
  icon: React.ReactNode;
}

export interface myExperience {
  id: number;
  company: string;
  year: string;
  logo: string;
  title?: string;
  description?: string;
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

export const myExperience: myExperience[] = [
  {
    id: 1,
    company: "Kitoshindo",
    year: "2023 - Now",
    logo: "kitoshindo.svg",
    title: "Product Development Staff",
    description:
      "Create a new product development process, makin discuss, brinstorming",
  },
  {
    id: 2,
    company: "Kosmesia",
    year: "2021 - 2023",
    logo: "kosmesialogo.svg",
    title: "Research & Development",
    description:
      "Create a new product development process, makin discuss, brinstorming",
  },
];
