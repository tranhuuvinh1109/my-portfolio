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
    label: "Interests",
    href: "interests",
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

export { CHAP, CONTACT, USER_INFORMATION, EDUCATION, LANGUAGE_PROGRAMINGS, FRAMEWORKS };
