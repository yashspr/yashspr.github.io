import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
    website: "https://yashspr.github.io/", // replace this with your deployed domain
    author: "Yashas Reddy",
    desc: "My blog",
    title: "My Blog",
    ogImage: undefined,
    lightAndDarkMode: true,
    postPerPage: 3,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
    enable: false,
    svg: true,
    width: 216,
    height: 46,
};

export const SOCIALS: SocialObjects = [
    {
        name: "Github",
        href: "https://github.com/yashspr",
        linkTitle: ` ${SITE.title} on Github`,
        active: false,
    },
];
