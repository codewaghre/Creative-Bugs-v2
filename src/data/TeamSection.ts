export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  profileLink: string;
}

export const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Dishant Shinde",
    role: "Co-founder",
    image:
      "https://ik.imagekit.io/creativebugs/Short%20Videos/Avatar%20/dishant.webp?updatedAt=1776689003155",
    profileLink: "https://www.linkedin.com/in/dishant-shinde/",
  },

  {
    id: 2,
    name: "Rohit Chavan",
    role: "Co-founder",
    image:
      "https://ik.imagekit.io/creativebugs/Short%20Videos/Avatar%20/rohit.webp?updatedAt=1776689002741",
    profileLink: "https://www.linkedin.com/in/rohit-chavan-703267234/",
  },

  {
    id: 3,
    name: "Yash Nandvikar",
    role: "Senior Video Editor",
    image:
      "https://ik.imagekit.io/creativebugs/Short%20Videos/Avatar%20/yash.webp?updatedAt=1776689003154",
    profileLink: "https://www.linkedin.com/in/yash-nandvikar-101124221/",
  },

  {
    id: 4,
    name: "Yash Shinde",
    role: "Head of Branding & Content Strategy",
    image:
      "https://ik.imagekit.io/creativebugs/Short%20Videos/Avatar%20/yash_s.webp?updatedAt=1776689002801",
    profileLink: "",
  },

  {
    id: 5,
    name: "Swapnil Biswas",
    role: "Video Editor",
    image:
      "https://ik.imagekit.io/creativebugs/Short%20Videos/Avatar%20/swapnil.webp?updatedAt=1776689002849",
    profileLink: "",
  },

  {
    id: 6,
    name: "Aniket Katkar",
    role: "Director of Photography",
    image:
      "https://ik.imagekit.io/creativebugs/Short%20Videos/Avatar%20/aniketKatkar.webp",
    profileLink: "",
  },
];
