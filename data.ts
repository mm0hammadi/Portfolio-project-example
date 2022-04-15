import { BsCircleFill } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import { IProject, Iservice, Iskill } from "./type";
import img1 from "./images/avator.jpg";
export const services: Iservice[] = [
  {
    title: "Front-End Developer",
    Icon: RiComputerLine,
    about:
      "reprehenderit in voluptate velit <b>Html</b> cillum  <b>Css</b>  <b>Javascript</b>  ",
  },
  {
    title: "SEO",
    Icon: RiComputerLine,
    about:
      "reprehenderit in voluptate velit <b>Google Analytics</b> cillum  <b>Google Algorithm</b>  <b>Google Search Console </b> ",
  },
  {
    title: "React Developer",
    Icon: RiComputerLine,
    about:
      "reprehenderit in voluptate velit <b>Nextjs</b> cillum  <b>TypeScript</b>  <b>Tailwind</b> ",
  },
  {
    title: "Wordpress",
    Icon: RiComputerLine,
    about:
      "reprehenderit in voluptate velit <b>Html</b> cillum  <b>Css</b>  <b>Javascript</b> ",
  },
];

export const langueges: Iskill[] = [
  {
    name: "Html/Css/Scss",
    level: "100%",
    Icon: BsCircleFill,
  },
  {
    name: "Bootstrap/Tailwind/Styled-Components",
    level: "100%",
    Icon: BsCircleFill,
  },
  {
    name: "Javascript",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "Reactjs/Nextjs",
    level: "60%",
    Icon: BsCircleFill,
  },
  {
    name: "Typescript",
    level: "40%",
    Icon: BsCircleFill,
  },
];

export const tools: Iskill[] = [
  {
    name: "Git",
    level: "60%",
    Icon: BsCircleFill,
  },
  {
    name: "Jira/Trello",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "Figma/Zeplin",
    level: "50%",
    Icon: BsCircleFill,
  },
  {
    name: "Yarn/Npm",
    level: "50%",
    Icon: BsCircleFill,
  },
  {
    name: "Redux",
    level: "50%",
    Icon: BsCircleFill,
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "Ui Design",
    description: "design ui with html,css,bootstrap",
    image_path: "/images/project1.jpg",
    deployed_url: "www.google.com",
    github_url: "www.google.com",
    category: ["Ui-Design"],
    key_techs: ["html", "css", "bootstrap"],
  },
  {
    id: 2,
    name: "projects2",
    description:
      "reprehenderit in voluptate velit reprehenderit in voluptate velit",
    image_path: "/images/2.png",
    deployed_url: "www.google.com",
    github_url: "www.google.com",
    category: ["React"],
    key_techs: ["react", "chartjs", "materialui"],
  },
  {
    id: 3,
    name: "projects3",
    description: "description5",
    image_path: "/images/1.jpg",
    deployed_url: "www.google.com",
    github_url: "www.google.com",
    category: ["React"],
    key_techs: ["react", "next", "materialui"],
  },
  {
    id: 4,
    name: "projects3",
    description:
      "reprehenderit in voluptate velit reprehenderit in voluptate velit",
    image_path: "/images/3.png",
    deployed_url: "www.google.com",
    github_url: "www.google.com",
    category: ["React"],
    key_techs: ["react", "chartjs", "materialui"],
  },
  {
    id: 5,
    name: "projects4",
    description: "description5",
    image_path: "/images/4.png",
    deployed_url: "www.google.com",
    github_url: "www.google.com",
    category: ["React"],
    key_techs: ["react", "next", "materialui"],
  },
  {
    id: 5,
    name: "projects5",
    description:
      "reprehenderit in voluptate velit reprehenderit in voluptate velit",
    image_path: "/images/7.png",
    deployed_url: "www.google.com",
    github_url: "www.google.com",
    category: ["React", "StyledComponents"],
    key_techs: ["react", "StyledComponents"],
  },
];
