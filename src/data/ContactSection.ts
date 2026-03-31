import type { ContactActionBanner } from "./data.type";

export const BookAMeetingData: ContactActionBanner = {
  head: {
    heading: "Book when it works for you",
    subHeading:
      "Skip emails and delays. Choose a time that fits your schedule and connect with our team instantly",
  },

  cta: {
    text: "Book a Meeting",
    steps: "3 Steps only",
  },

  features: [
    {
      id: 1,
      text: "Live availability",
    },
    {
      id: 2,
      text: "30-60 Min focused meeting",
    },

    {
      id: 3,
      text: "Time Xone friendly ",
    },
  ],
};

export const AskAQuestionData: ContactActionBanner = {
  head: {
    heading: "Have a question first?",
    subHeading:
      "Not ready to book yet? Ask us anything about pricing, process, timelines, or custom needs",
  },

  cta: {
    text: "Ask a Question",
    steps: "1 Steps only",
  },

  features: [
    {
      id: 1,
      text: "replay within 24hrs",
    },
    {
      id: 2,
      text: "Human response support",
    },

    {
      id: 3,
      text: "Quick clarifications",
    },
  ],
};
