// Contact Page

export interface FeatureItem {
  id: number;
  text: string;
}

export interface CTAData {
  text: string;
  steps: string;
}

export interface HeadingData {
  heading: string;
  subHeading: string;
}

export interface BannerCardData {
  id: number;
  head: HeadingData;
  cta: CTAData;
  route: string;
  type: "meeting" | "question";
  features: FeatureItem[];
}

export const bannerCardsData: BannerCardData[] = [
  {
    id: 1,
    type: "meeting",
    route: "/bookameetingform",

    head: {
      heading: "Book when it works for you",
      subHeading:
        "30 minutes. We'll tell you exactly what we'd do for your brand and whether we're the right fit",
    },

    cta: {
      text: "Book a Meeting",
      steps: "3 Steps only",
    },

    features: [
      { id: 1, text: "Live availability" },
      { id: 2, text: "30-60 Min focused meeting" },
      { id: 3, text: "Time Xone friendly " },
    ],
  },

  {
    id: 2,
    type: "question",
    route: "/contactform",

    head: {
      heading: "Have a question first?",
      subHeading:
        "Ask what you actually want to know. Pricing, process, timelines. We reply within 24 hours, no sales email follows",
    },

    cta: {
      text: "Ask a Question",
      steps: "1 Steps only",
    },

    features: [
      { id: 1, text: "replay within 24hrs" },
      { id: 2, text: "Human response support" },
      { id: 3, text: "Quick clarifications" },
    ],
  },
];
