import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

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
export { CHAP, CONTACT, USER_INFORMATION, EDUCATION };
