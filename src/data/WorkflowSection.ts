import {
  CameraIcon,
  CameraLenseIcon,
  CutRoundIcon,
  FourKIcon,
  MicIcon,
  StudioIcon,
} from "@/assets/index";
import type { OrbitConfigProps, TimelineBlockType } from "./data.type";

export const timelineData: TimelineBlockType[] = [
  {
    id: 1,
    rows: [
      { number: 1, titleWidth: "w-20", lineWidth: "w-80" },
      { number: 2, titleWidth: "w-40", lineWidth: "w-60" },
    ],
    boxHeight: "h-20",
  },
  {
    id: 2,
    rows: [
      { number: 3, titleWidth: "w-30", lineWidth: "w-70" },
      { number: 4, titleWidth: "w-60", lineWidth: "w-40" },
      { number: 5, titleWidth: "w-50", lineWidth: "w-50" },
    ],
    boxHeight: "h-30",
  },
  {
    id: 3,
    rows: [
      { number: 6, titleWidth: "w-80", lineWidth: "w-20" },
      { number: 7, titleWidth: "w-60", lineWidth: "w-40" },
    ],
    boxHeight: "h-20",
  },
];

export const orbitConfig: OrbitConfigProps = {
  inner: {
    radius: 160,
    duration: 14,
    items: [{ icon: CameraIcon }, { icon: MicIcon }, { icon: CutRoundIcon }],
  },
  outer: {
    radius: 220,
    duration: 14,
    offset: 60,
    items: [
      { icon: CameraLenseIcon },
      { icon: FourKIcon },
      { icon: StudioIcon },
    ],
  },
};
