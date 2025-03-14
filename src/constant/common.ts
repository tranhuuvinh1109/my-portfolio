import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import SvgTypeScript from "../assets/svg-components/SvgTypeScript";
import SvgJavaScript from "../assets/svg-components/SvgJavascript";
import SvgHtml from "../assets/svg-components/SvgHtml";
import SvgCSS from "../assets/svg-components/SvgCSS";
import SvgPython from "../assets/svg-components/SvgPython";
import SvgCPlusPlus from "../assets/svg-components/SvgCPlusPlus";
import SvgReact from "../assets/svg-components/SvgReact";
import SvgNextJS from "../assets/svg-components/SvgNextJS";
import SvgNestJS from "../assets/svg-components/SvgNestJS";
import SvgDjango from "../assets/svg-components/SvgDjango";
import SvgWordpress from "../assets/svg-components/SvgWordpress";
import SvgWebflow from "../assets/svg-components/SvgWebflow";
import { ProjectItemType } from "../type/common";
import { Position, ProjectType } from "../enum/common";
import SvgFirebase from "../assets/svg-components/SvgFirebase";
import SvgTailwindCSS from "../assets/svg-components/SvgTailwindCss";
import VCareLogo from "../assets/images/VCare.png";
import ZaylyAILogo from "../assets/images/ZaylyAi.webp";
import ZaylyAI1 from "../assets/images/zaylyAi (1).webp";
import ZaylyAI2 from "../assets/images/ZayluAi2 (1).webp";
import ZaylyAI3 from "../assets/images/ZayluAi3.webp";
import ZaylyAI4 from "../assets/images/ZayluAi4.webp";
import ZaylyAI5 from "../assets/images/ZayluAi5.webp";
import ZaylyAI6 from "../assets/images/ZayluAi2.webp";
const CHAP = [
  {
    label: "About",
    href: "about",
  },
  {
    label: "Experience",
    href: "experience",
  },
  {
    label: "Education",
    href: "education",
  },
  {
    label: "Skills",
    href: "skills",
  },
  {
    label: "Projects",
    href: "projects",
  },
];

const CONTACT = [
  {
    icon: FaGithub,
    value: "https://github.com/tranhuuvinh1109",
  },
  {
    icon: FaLinkedin,
    value: "https://www.linkedin.com/in/vinh-tran-huu",
  },
  {
    icon: FaFacebook,
    value: "https://www.facebook.com/vinhdeveloper2002",
  },
];

const EXPERIENCE = [
  {
    title: "Staff",
    position: "Frontend Developer",
    company: "NCC Asia",
    time: "Jan 2024 - Present",
    projects: [
      {
        name: "Project 1",
        descriptions: [
          "A mobile app that functions as a crypto wallet, allowing users to make transactions andexchange crypto currencies. It also supports multiple networks for development environments or the mainnet",
          "Develop a website to market the coin, allowing users to track its price, stay updated on events from the organization, and more.",
        ],
      },
    ],
    responsibilities: ["Implement the client's requirements and develop for both Android and iOS platforms."],
    programmingLanguages: [
      {
        icon: SvgTypeScript,
        label: "TypeScript",
      },
      {
        icon: SvgReact,
        label: "React Native",
      },
      {
        icon: SvgNextJS,
        label: "NextJS",
      },
      {
        icon: SvgWebflow,
        label: "Webflow",
      },
    ],
  },
  {
    title: "Intern",
    position: "Intern Frontend",
    company: " Sun Asterisk",
    time: "Jun 2022 - Sep 2022",
    projects: [],
    responsibilities: [
      "Created a project description specification for building the website. It was built to manage student’study processes and includes features such as creating study plans, allowing teachers to assign practice exercises to students, and more",
      "Create coding frames and design database based on project descriptions",
    ],
    programmingLanguages: [
      {
        icon: SvgJavaScript,
        label: "JavaScript",
      },
      {
        icon: SvgReact,
        label: "ReactJS",
      },
    ],
  },
];

const USER_INFORMATION = {
  email: "vinhhuutran.developer@gmail.com",
  phone: "(+84) 915 905 138",
  address: "DaNang, VietNam",
  birthday: "11/09/2002",
};

const EDUCATION = [
  {
    school: "Da Nang University of Science and Technology",
    gpa: "3.1 / 4.0",
    major: "Information Technology",
    time: "Oct 2020 - Feb 2025",
  },
];

const LANGUAGE_PROGRAMINGS = [
  {
    icon: SvgTypeScript,
    label: "TypeScript",
  },
  {
    icon: SvgJavaScript,
    label: "JavaScript",
  },
  {
    icon: SvgHtml,
    label: "HTML",
  },
  {
    icon: SvgCSS,
    label: "CSS",
  },
  {
    icon: SvgPython,
    label: "Python",
  },
  {
    icon: SvgCPlusPlus,
    label: "C++",
  },
];

const FRAMEWORKS = [
  {
    icon: SvgReact,
    label: "ReactJS",
  },
  {
    icon: SvgReact,
    label: "React Native",
  },
  {
    icon: SvgNextJS,
    label: "NextJS",
  },
  {
    icon: SvgNestJS,
    label: "NestJS",
  },
  {
    icon: SvgDjango,
    label: "Django",
  },
  {
    icon: SvgWordpress,
    label: "Wordpress",
  },
  {
    icon: SvgWebflow,
    label: "Webflow",
  },
];

const PROJECTS: ProjectItemType[] = [
  {
    name: "V-Care",
    description:
      "This project is a web-based platform designed to assist users in identifying skin conditions and diseases using advanced AI technology. By leveraging a trained AI model, the system provides detailed insights and treatment recommendations to enhance user health and well-being.",
    time: "June 2024",
    numberOfMembers: 1,
    logo: VCareLogo,
    videoUrl: "https://www.youtube.com/embed/Ez1Kl3vqr4w?si=9yb2OfXkaRoGasIJ",
    type: ProjectType.PRIVATE,
    linkToProject: "https://vcare-seven.vercel.app/",
    position: [Position.FE_DEVELOPER, Position.BE_DEVELOPER, Position.DEVOPS],
    technologies: {
      backend: [
        {
          name: "Django",
          icon: SvgDjango,
        },
        {
          name: "Firebase",
          icon: SvgFirebase,
        },
        {
          name: "YOLO V5",
          icon: SvgFirebase,
        },
        {
          name: "Chat GPT API",
          icon: SvgFirebase,
        },
      ],
      frontend: [
        {
          name: "ReactJS",
          icon: SvgReact,
        },
        {
          name: "TailwindCSS",
          icon: SvgTailwindCSS,
        },
      ],
    },
  },
  {
    name: "Zay AI",
    description:
      "ZaylyAI provides businesses with customized chatbots powered by OpenAI, tailored to each company's knowledge base, enhancing customer interactions and automating support.",
    time: "June 2024",
    numberOfMembers: 2,
    logo: ZaylyAILogo,
    type: ProjectType.PRIVATE,
    position: [Position.FE_DEVELOPER],
    technologies: {
      backend: [
        {
          name: "Django",
          icon: SvgDjango,
        },
        {
          name: "Chat GPT API",
          icon: SvgFirebase,
        },
      ],
      frontend: [
        {
          name: "ReactJS",
          icon: SvgReact,
        },
        {
          name: "TailwindCSS",
          icon: SvgTailwindCSS,
        },
      ],
    },
    imageUrl: [
      {
        link: ZaylyAI1,
      },
      {
        link: ZaylyAI2,
      },
      {
        link: ZaylyAI3,
      },
      {
        link: ZaylyAI5,
      },
      {
        link: ZaylyAI4,
      },
      {
        link: ZaylyAI6,
      },
    ],
  },
];

export { CHAP, CONTACT, USER_INFORMATION, EDUCATION, LANGUAGE_PROGRAMINGS, FRAMEWORKS, PROJECTS, EXPERIENCE };
