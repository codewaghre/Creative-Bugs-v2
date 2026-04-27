import type { ComponentType } from "react";

// GrowthCard data props
export type GrowthCardType = {
  id: number;
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
};

export type FeatureItemType = {
  id: number;
  text: string;
  icon: ComponentType<{ className?: string }>;
};

//end

// Workflow data props
export interface TimelineRowType {
  number: number;
  titleWidth: string;
  lineWidth: string;
}

export interface TimelineBlockType {
  id: number;
  rows: TimelineRowType[];
  boxHeight: string;
}

export type TimelineDataType = TimelineBlockType[];
//end

//Orbit ring props
export type OrbitIconComponent = ComponentType<{
  className?: string;
}>;

export type OrbitItem = {
  icon: OrbitIconComponent;
};

export type OrbitRingConfig = {
  radius: number;
  duration: number;
  offset?: number;
  direction?: "clockwise" | "counter-clockwise";
  items: OrbitItem[];
};

export type OrbitConfigProps = {
  inner: OrbitRingConfig;
  outer: OrbitRingConfig;
};

export type renderRingProps = {
  ring: OrbitRingConfig;
  keyPrefix: string;
};
//end

//Contact Section

// Book a Meeting and Ask a question
// Common feature item
export type FeatureItem = {
  id: number;
  text: string;
};

// Common header structure
export type BannerHead = {
  heading: string;
  subHeading: string;
};

//end

//FAQ's Section
export type FAQItem = {
  id: number;
  question: string;
  ans: string;
};
