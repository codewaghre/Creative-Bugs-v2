export interface AboutContent {
  description: string[];
  ctaText: string;
}

export interface SocialItem {
  id: number;
  name: string;
  value: string;
  to: string;
  type: "instagram" | "linkedin" | "email";
}

export interface FooterData {
  about: AboutContent;
  socialsHeading: string;
  socials: SocialItem[];
}

export const AboutData: FooterData = {
  about: {
    description: [
      "CreativeBugs Media was founded in 2022 by Dishant and Rohit with a specific belief that most brands are underrepresented by their content",

      "Over four years, we've built production infrastructure for brands that don't have time to manage agencies: end-to-endstrategy, production, post, and distribution handled by a team thattreats your brand like it's their own. Our clients include some of India's most trusted financial institutions and a growing roster of founder-led brandsbuilding for the long term",

      "We’re dedicated to transforming your vision into captivating videos and podcasts, driving impressive growth and engagement",
    ],
    ctaText: "Contact Us",
  },

  socialsHeading: "Socials .//",

  socials: [
    {
      id: 1,
      name: "Instagram",
      value: "@creativebugs.media",
      to: "https://instagram.com/creativebugs.media",
      type: "instagram",
    },
    {
      id: 2,
      name: "LinkedIn",
      value: "creative bugs media",
      to: "https://www.linkedin.com/company/creative-bugs-media/",
      type: "linkedin",
    },
    {
      id: 3,
      name: "Email",
      value: "ops.creativebugs@gmail.com",
      to: "https://mail.google.com/mail/?view=cm&fs=1&to=ops.creativebugs@gmail.com",
      type: "email",
    },
  ],
};
