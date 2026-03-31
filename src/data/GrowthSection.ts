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
    description: "Credibility earned through work",
    icon: TrustOfbrandsIcon,
  },
  {
    id: 2,
    title: "Speed of work",
    description: "Fast and efficient delivery",
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
