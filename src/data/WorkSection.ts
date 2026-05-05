export interface CreatorProfile {
  id: number;
  username: string;
  profileLink: string;
  description: string;
}

export interface MediaItem {
  id: number;
  title: string;
  views: string;
  link: string;
  thumbnail?: string;
  type: "long" | "short";
}

export interface CreatorSectionData {
  id: number;
  profile: CreatorProfile;
  videosHeading: string;
  shortsHeading: string;
  videos: MediaItem[];
  shorts: MediaItem[];
}

export const creatorDataList: CreatorSectionData[] = [
  {
    id: 1,
    profile: {
      id: 1,
      username: "@deepakpareek",
      profileLink: "https://youtube.com/@deepakpareek",
      description:
        "Was starting from scratch cave subscriber numbers, no distribution system. What we did: Built his content operation from the ground up. He now sits at 1 lakh+ on his main channel and 2 lakh+ on his clips channel which pulls 5 million+ views every month. The clips channel is the real outlie.",
    },

    videosHeading: "Videos",
    shortsHeading: "Shorts",

    videos: [
      {
        id: 1,
        type: "long",
        title:
          "Vishal Jethwa UNFILTERED: Homebound, Gujarati at Cannes 2025, Love Life, Money in TV | TCH 122",
        views: "17K views",
        link: "https://www.youtube.com/watch?v=uVV-blYEMZE",
        thumbnail: "https://img.youtube.com/vi/uVV-blYEMZE/hqdefault.jpg",
      },

      {
        id: 2,
        type: "long",
        title:
          "Manya Singh Podcast: Miss India Reality, Bigg Boss House, Toxic Family & Harrassment | TCH 140",
        views: "2.5K views",
        link: "https://www.youtube.com/watch?v=ewCWQuxb-TQ",
        thumbnail: "https://img.youtube.com/vi/ewCWQuxb-TQ/hqdefault.jpg",
      },
    ],

    shorts: [
      {
        id: 1,
        type: "short",
        title: "Money Mindset Short",
        views: "30K views",
        link: "https://www.youtube.com/shorts/Z_7SRwrX7tI",
        thumbnail: "https://youtube.com/watch?v=video1",
      },

      {
        id: 2,
        type: "short",
        title: "Money Mindset Short",
        views: "265K views",
        link: "https://www.youtube.com/shorts/bO4qohvbGK0",
        thumbnail: "https://youtube.com/watch?v=video1",
      },

      {
        id: 3,
        type: "short",
        title: "Money Mindset Short",
        views: "1.8K views",
        link: "https://www.youtube.com/shorts/RdN0XDwq_tI",
        thumbnail: "https://youtube.com/watch?v=video1",
      },
    ],
  },

  {
    id: 2,
    profile: {
      id: 1,
      username: "@SourabhSisodiya",
      profileLink: "https://www.youtube.com/@SourabhSisodiya",
      description:
        "Had strong market credibility regular appearances on Money Times and stock news channels but no personal brand IP to convert that authority into a business. What we did: Built a stock discussion IP from scratch. The traction it generated directly fed his course sales and community membership growth.",
    },

    videosHeading: "Videos",
    shortsHeading: "Shorts",

    videos: [
      {
        id: 1,
        type: "long",
        title:
          "SME Investing MasterClass | How early stage companies create massive wealth | Ft. Rajesh Singla",
        views: "7.8K views",
        link: "https://www.youtube.com/watch?v=RH9dW3wrdCI",
        thumbnail: "https://img.youtube.com/vi/RH9dW3wrdCI/maxresdefault.jpg",
      },

      {
        id: 2,
        type: "long",
        title:
          "Never Miss an IPO move again | Simple Strategy to Trade IPO’s | The Trader’s BluePrint EP 03",
        views: "39K views",
        link: "https://www.youtube.com/watch?v=tt21OVDUcQo",
        thumbnail: "https://img.youtube.com/vi/tt21OVDUcQo/maxresdefault.jpg",
      },
    ],

    shorts: [
      {
        id: 1,
        type: "short",
        title: "Money Mindset Short",
        views: "1.3K views",
        link: "https://www.youtube.com/shorts/GY6sZGj-8uw",
        thumbnail: "https://youtube.com/watch?v=video1",
      },

      {
        id: 2,
        type: "short",
        title: "Money Mindset Short",
        views: "2K views",
        link: "https://www.youtube.com/shorts/p8YEmhWphxE",
        thumbnail: "https://youtube.com/watch?v=video1",
      },

      {
        id: 3,
        type: "short",
        title: "Money Mindset Short",
        views: "2.7K views",
        link: "https://www.youtube.com/shorts/6l_Jz4WmFY4",
        thumbnail: "https://youtube.com/watch?v=video1",
      },
    ],
  },

  {
    id: 3,
    profile: {
      id: 1,
      username: "@KushalLodha548",
      profileLink: "https://www.youtube.com/@KushalLodha548",
      description:
        "Had built a solid base with explanation and comparison videos, but wanted to ride the podcast wave and scale his output significantly. What we did: Helped him go from 4 podcasts a month to 12 — without dropping quality. This is where we learned how to handle volume and consistency at the same time.",
    },

    videosHeading: "Videos",
    shortsHeading: "Shorts",

    videos: [
      {
        id: 1,
        type: "long",
        title:
          "SME Investing MasterClass | How early stage companies create massive wealth | Ft. Rajesh Singla",
        views: "46K views",
        link: "https://www.youtube.com/watch?v=bT43G906_W8",
        thumbnail: "https://img.youtube.com/vi/bT43G906_W8/maxresdefault.jpg",
      },

      {
        id: 2,
        type: "long",
        title:
          "Never Miss an IPO move again | Simple Strategy to Trade IPO’s | The Trader’s BluePrint EP 03",
        views: "137K views",
        link: "https://www.youtube.com/watch?v=atDWD2-K1dM",
        thumbnail: "https://img.youtube.com/vi/atDWD2-K1dM/maxresdefault.jpg",
      },
    ],

    shorts: [
      {
        id: 1,
        type: "short",
        title: "Money Mindset Short",
        views: "55K views",
        link: "https://www.youtube.com/shorts/hqaVFSJf8FA",
        thumbnail: "https://youtube.com/watch?v=video1",
      },

      {
        id: 2,
        type: "short",
        title: "Money Mindset Short",
        views: "15K views",
        link: "https://www.youtube.com/shorts/S2AW8S02EZ0",
        thumbnail: "https://youtube.com/watch?v=video1",
      },

      {
        id: 3,
        type: "short",
        title: "Money Mindset Short",
        views: "20K views",
        link: "https://www.youtube.com/shorts/BuIvdzNzm-g",
        thumbnail: "https://youtube.com/watch?v=video1",
      },
    ],
  },

  {
    id: 4,
    profile: {
      id: 1,
      username: "@aclr8",
      profileLink: "https://www.youtube.com/@aclr8",
      description:
        "Wanted to champion their portfolio companies in a way that felt genuine, not promotional. What we did: Built a Podcast IP around their investment thesis a repeatable, authentic format where real founders talk about real problems. Content that their audience could actually connect with.",
    },

    videosHeading: "Videos",
    shortsHeading: "Shorts",

    videos: [
      {
        id: 1,
        type: "long",
        title:
          "From multiple failed startups to 450 crore brand! The Sirona story. Ft. Deep Bajaj | EP 19 ACLR8",
        views: "500 views",
        link: "https://www.youtube.com/watch?v=ImFUDk4Z8lc",
        thumbnail: "https://img.youtube.com/vi/ImFUDk4Z8lc/maxresdefault.jpg",
      },

      {
        id: 2,
        type: "long",
        title:
          "E-commerce for Bharat! Ft. Swati Bhargava, CashKaro | EP 4 ACLR8",
        views: "1K views",
        link: "https://www.youtube.com/watch?v=SNlgtiuol84",
        thumbnail: "https://img.youtube.com/vi/SNlgtiuol84/maxresdefault.jpg",
      },
    ],

    shorts: [
      {
        id: 1,
        type: "short",
        title: "Money Mindset Short",
        views: "600 views",
        link: "https://www.youtube.com/shorts/F2AOwIdXBeA",
        thumbnail: "https://youtube.com/watch?v=video1",
      },

      {
        id: 2,
        type: "short",
        title: "Money Mindset Short",
        views: "400 views",
        link: "https://www.youtube.com/shorts/G39PrbASXu4",
        thumbnail: "https://youtube.com/watch?v=video1",
      },

      {
        id: 3,
        type: "short",
        title: "Money Mindset Short",
        views: "800 views",
        link: "https://www.youtube.com/shorts/bL8J7pxx6zw",
        thumbnail: "https://youtube.com/watch?v=video1",
      },
    ],
  },
];
