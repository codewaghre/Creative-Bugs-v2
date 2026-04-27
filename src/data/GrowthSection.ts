import {
  SpeedOfWorkIcon,
  TrustOfbrandsIcon,
  RightTickIcon,
} from "@/assets/index";
import type { FeatureItemType, GrowthCardType } from "./data.type";

export const BrandContentData: GrowthCardType[] = [
  {
    id: 1,
    title: "Trust of brands",
    description: "BFSI HDFC Bank, ICICI Bank, HSBC, Motilal Oswal",
    icon: TrustOfbrandsIcon,
  },
  {
    id: 2,
    title: "Speed of work",
    description: "Turnaround 48–72 hours delivery, consistently",
    icon: SpeedOfWorkIcon,
  },
];

export const ServiceContentColoBoxData = [
  "bg-purple-500",
  "bg-purple-400",
  "bg-purple-300",
  "bg-purple-200",
  "bg-purple-100",
];

export const FeatureListData: FeatureItemType[] = [
  {
    id: 1,
    text: "Professional Post Production",
    icon: RightTickIcon,
  },
  {
    id: 2,
    text: "Color Grading & Cinematic Edits",
    icon: RightTickIcon,
  },
  {
    id: 3,
    text: "Sound Design & Audio Cleanup",
    icon: RightTickIcon,
  },
  {
    id: 4,
    text: "Fast Delivery & Revisions",
    icon: RightTickIcon,
  },
];

// Growth Section
import type { ComponentType } from "react";
import {
  ViewsCount,
  BrandContent,
  ServiceContent,
} from "@/components/GrowthCard";

export type StatsCardItem = {
  id: number;
  heading: string;
  paragraph: string;
  headingClassName?: string;
  content: ComponentType;
};

export const statsCards: StatsCardItem[] = [
  {
    id: 1,
    heading: "Total Views",
    paragraph: "Across video, podcast, andshort-form tracked,attributed, real",
    headingClassName: "card-md:w-[40%]",
    content: ViewsCount,
  },
  {
    id: 2,
    heading: "Happy Clients",
    paragraph: "From BFSI giants to founder-led brands across industries",
    headingClassName: "card-md:w-[40%]",
    content: BrandContent,
  },
  {
    id: 3,
    heading: "Videos Edited",
    paragraph: "Strategy, production, post end to end, no handholding needed",
    headingClassName: "card-md:w-[40%]",
    content: ServiceContent,
  },
];
