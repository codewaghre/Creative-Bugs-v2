import type { ReactNode } from "react";
import type { OrbitConfigProps, TimelineRowType } from "@/data/data.type";

//button Props
export type theme = "dark" | "light";
export type postion = "start" | "end";

export type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export type HeadingProps = {
  className?: string;
  heading: string;
  varient?: theme;
  paragraph?: string;
  as?: "h1" | "h2" | "h3";
};

export type CardHeadingProps = {
  className?: string;
  heading: string;
  paragraph: string;
  id?: number | string;
};

export interface TimelineBlockProps {
  rows: TimelineRowType[];
  boxHeight: string;
}

export type renderRingProps = {
  ring: OrbitConfigProps;
  keyPrefix: string;
};

export type ButtonProps = {
  text: string;
  icon?: ReactNode;
  iconPosition?: postion;
  className?: string;
  varient: theme;
  textLight?: boolean;
  onClick?: () => void;
};
