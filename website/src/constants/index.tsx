import {
  FaYoutube,
  FaLinkedinIn,
  FaFacebookF,
  FaTelegramPlane,
  FaInstagram,
} from "react-icons/fa";

export const baseurl = "https://cms.anahataaconnections.com/api";

export const navElemObj: { title: string; link: string }[] = [
  { title: "Home", link: "/Home" },
  { title: "Our Story", link: "/Our-story" },
  { title: "Blog", link: "/Blog" },
  { title: "FAQs", link: "/Home#faq" },
  { title: "Sign In", link: "/Signin" },
];
interface FooterElemProp {
  [key: string]: { title: string; link: string }[];
}
export const footerElem: FooterElemProp = {
  overview: navElemObj.filter(({ link }) => link !== "/Signin"),
  "privacy & Legal Terms": [
    { title: "Privacy Policy", link: "/Privacy" },
    { title: "Terms Of Use", link: "/Terms" },
    { title: "Refund Policy", link: "/Refund" },
  ],
  more: [
    { title: "Events", link: "/Events" },
    { title: "Partner With Us", link: "/collaboration" },
    { title: "Career", link: "/career" },
    { title: "Help Center", link: "none" },
  ],
};

export const socialObj: {
  title: string;
  link: string;
  icon: React.ReactNode;
}[] = [
  { title: "youtube", link: "https://www.youtube.com/channel/UCn84wLcqIeOq_h_X9aB9d7A", icon: <FaYoutube /> },
  { title: "linkedIn", link: "https://www.linkedin.com/company/anahata-connections/", icon: <FaLinkedinIn /> },
  { title: "facebook", link: "", icon: <FaFacebookF /> },
  { title: "telegram", link: "", icon: <FaTelegramPlane /> },
  { title: "instagram", link: "https://www.instagram.com/anahataaconnections/?hl=en", icon: <FaInstagram /> },
];

export const monthsArray = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
