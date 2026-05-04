//Brand - Client Logo

type BrandItem = {
  id: number;
  src: string;
  alt: string;
};

export const brandgridOne: BrandItem[] = [
  {
    id: 1,
    src: "https://ik.imagekit.io/creativebugs/Short%20Videos/Client%20logo/iciciBank_LG1.webp?updatedAt=1776689048376",
    alt: "ICICI Bank Logo",
  },
  {
    id: 2,
    src: "https://ik.imagekit.io/creativebugs/Short%20Videos/Client%20logo/betterplace_LG1.webp?updatedAt=1776689048379",
    alt: "BetterPlace Logo",
  },
  {
    id: 3,
    src: "https://ik.imagekit.io/creativebugs/Short%20Videos/Client%20logo/mamaEarth_LG1.webp?updatedAt=1776689048310",
    alt: "Mama Earth Logo",
  },
  {
    id: 4,
    src: "https://ik.imagekit.io/creativebugs/Short%20Videos/Client%20logo/ekaCare_LG1.webp?updatedAt=1776689048143",
    alt: "Eka Care Logo",
  },
  {
    id: 5,
    src: "https://ik.imagekit.io/creativebugs/Short%20Videos/Client%20logo/pitchground_LG1.webp?updatedAt=1776689048207",
    alt: "Pitch Ground logo",
  },

  {
    id: 6,
    src: "https://ik.imagekit.io/creativebugs/Short%20Videos/Client%20logo/aiSensy_LG1.webp?updatedAt=1776689048333",
    alt: "Ai Sensy logo",
  },

  {
    id: 7,
    src: "https://ik.imagekit.io/creativebugs/Short%20Videos/Client%20logo/growthSchool_LG2.webp?updatedAt=1776689048313",
    alt: "Growth School Logo",
  },
  {
    id: 8,
    src: "https://ik.imagekit.io/creativebugs/Short%20Videos/Client%20logo/ACLR8_LG2.webp?updatedAt=1776689048021",
    alt: "ACLR9 logo",
  },
  {
    id: 9,
    src: "https://ik.imagekit.io/creativebugs/Short%20Videos/Client%20logo/mSwipe_LG2.webp?updatedAt=1776689048314",
    alt: "MSwipe logo",
  },
  {
    id: 10,
    src: "https://ik.imagekit.io/creativebugs/Short%20Videos/Client%20logo/moke_LG2.webp?updatedAt=1776689048004",
    alt: "Moke logo",
  },
  {
    id: 11,
    src: "https://ik.imagekit.io/creativebugs/Short%20Videos/Client%20logo/manforce_LG2.webp?updatedAt=1776689048249",
    alt: "Manforce logo",
  },
  {
    id: 12,
    src: "https://ik.imagekit.io/creativebugs/Short%20Videos/Client%20logo/Atlys_LG2.webp?updatedAt=1776689047929",
    alt: "Atlys",
  },

  {
    id: 13,
    src: "https://ik.imagekit.io/creativebugs/Short%20Videos/Client%20logo/motilalOswal_LG3.webp?updatedAt=1776689048332",
    alt: "Motilal Oswal Logo",
  },
  {
    id: 14,
    src: "https://ik.imagekit.io/creativebugs/Short%20Videos/Client%20logo/alyf_LG3.webp?updatedAt=1776689048339",
    alt: "Alyf logo",
  },
  {
    id: 15,
    src: "https://ik.imagekit.io/creativebugs/Short%20Videos/Client%20logo/emsme_LG3.webp?updatedAt=1776689048081",
    alt: "Emsme logo",
  },
  {
    id: 16,
    src: "https://ik.imagekit.io/creativebugs/Short%20Videos/Client%20logo/tetrationVentures_LG3.webp?updatedAt=1776689048063",
    alt: "Tetration Venture logo",
  },
  {
    id: 17,
    src: "https://ik.imagekit.io/creativebugs/Short%20Videos/Client%20logo/swisse_LG3.webp?updatedAt=1776689048079",
    alt: "Swwisse logo",
  },
  {
    id: 18,
    src: "https://ik.imagekit.io/creativebugs/Short%20Videos/Client%20logo/SDABocconiAsiaCentre_LG3.webp?updatedAt=1776689047876",
    alt: "SDA Bocconi Asia Center Logo",
  },
];

// Button
import type { ComponentType } from "react";
import { CallIcon, WorkIcon } from "@/assets/svg/Incos";

export type CTAButtonItem = {
  id: number;
  to: string;
  variant: "dark" | "light";
  text: string;
  icon: ComponentType;
  className: string;
  iconPosition: "start" | "end";
};

export const heroButtons: CTAButtonItem[] = [
  {
    id: 1,
    to: "/bookameetingform",
    variant: "dark",
    text: "Book a Meeting",
    icon: CallIcon,
    className: "w-40",
    iconPosition: "end",
  },
  {
    id: 2,
    to: "/work",
    variant: "light",
    text: "Our Work",
    icon: WorkIcon,
    className: "w-40",
    iconPosition: "end",
  },
];
