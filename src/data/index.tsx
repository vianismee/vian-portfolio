import { Instagram, Github, Twitter } from "lucide-react";
import { StaticImageData } from "next/image";
export interface socialMedia {
  id: number;
  title: string;
  href: string;
  icon: React.ReactNode;
}

export interface meOnNumber {
  id: number;
  number: number;
  desc: string;
}

export interface jobDesk {
  id: number;
  date: string;
  title: string;
  desc: string;
}

export interface myExperience {
  id: number;
  profile: string;
  company: string;
  year: string;
  logo: string;
  jobdesk: jobDesk[];
}

export interface myStack {
  id: number;
  title: string;
  design: designTools[];
  coding: codingTools[];
}

export interface designTools {
  id: number;
  title: string;
  desc: string;
  icon: StaticImageData | string;
  link: string;
}
export interface codingTools {
  id: number;
  title: string;
  desc?: string;
  icon: StaticImageData | string;
  link: string;
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

export const meOnNumber: meOnNumber[] = [
  {
    id: 1,
    number: 4,
    desc: "Year of Experience",
  },
  {
    id: 2,
    number: 70,
    desc: "Complate Project",
  },
  {
    id: 3,
    number: 2,
    desc: "Formulation",
  },
];

export const myExperience: myExperience[] = [
  {
    id: 1,
    profile: "Kosmesia",
    company: "PT. Kosmetika Global Indonesia",
    year: "2021 - 2023",
    logo: "kosmesialogo.png",
    jobdesk: [
      {
        id: 1,
        date: "January 2021 - March 2021",
        title: "In Process Control (IPC) Staff",
        desc: "Check Filling Weight & Finishing Good every product with sampling method for ensure weight, coding, BPOM Number, shrink & Packaging neatness variation every product accordance with spesification.",
      },
      {
        id: 2,
        date: "March 2021 - Descember 2021",
        title: "Quality Control Analyst Staff",
        desc: "Check & make sure the product can be released accordance spesification from pH, Viscous, Apparance & Color of product, Creating IK (Work Intruction) and Product Specification.",
      },
      {
        id: 3,
        date: "January 2022 - September 2023",
        title: "Research & Development Staff",
        desc: "Upscaling product from trial to large scale laboratory, Manage & monitor stability test each product to make sure ED of Product, create batch record & product spesification for mesh production.",
      },
    ],
  },
  {
    id: 2,
    profile: "Kitoshindo",
    company: "PT. Kitoshindo international Biotech",
    year: "2023 - Now",
    logo: "kitoshindo.svg",
    jobdesk: [
      {
        id: 1,
        date: "September 2023 - January 2025",
        title: "Product Development Staff",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet officia, et debitis vel perspiciatis amet, fuga deleniti provident porro rem beatae neque laboriosam ab at consequuntur quibusdam voluptatem tenetur. Est.",
      },
      {
        id: 2,
        date: "January 2025 - Now",
        title: "Designer Staff",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum sint deleniti atque doloremque similique culpa eligendi ipsa repudiandae sapiente sunt ducimus, suscipit ea voluptatibus at ad repellendus vel aliquam optio.",
      },
    ],
  },
];

export const myStack: myStack[] = [
  {
    id: 1,
    title: "My Stack",
    design: [
      {
        id: 1,
        title: "Adobe Illustrator",
        desc: "Graphic Design Tools",
        icon: "ailogo.svg",
        link: "adobeillustrator.com",
      },
      {
        id: 2,
        title: "Figma",
        desc: "Graphic Design Tools",
        icon: "figma.svg",
        link: "figma.com",
      },
      {
        id: 3,
        title: "Photoshop",
        desc: "Graphic Design Tools",
        icon: "pslogo.svg",
        link: "photoshop.com",
      },
    ],
    coding: [
      {
        id: 1,
        title: "Next JS",
        desc: "Front End Tools",
        icon: "next.svg",
        link: "next.js",
      },
      {
        id: 2,
        title: "Tailwind CSS",
        desc: "Graphic Design Tools",
        icon: "tailwindcss.svg",
        link: "tailwindcss.com",
      },
      {
        id: 3,
        title: "React JS",
        desc: "Graphic Design Tools",
        icon: "tailwindcss.svg",
        link: "react.dev",
      },
      {
        id: 4,
        title: "Astro",
        desc: "Programing Language",
        icon: "astro.svg",
        link: "astro.build",
      },
    ],
  },
];
