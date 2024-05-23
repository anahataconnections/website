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
  { title: "Out Story", link: "/Our_story" },
  { title: "Blog", link: "/Blog" },
  { title: "FAQs", link: "/Home#faq" },
  { title: "Sign In", link: "/Signin" },
];
interface FooterElemProp {
  [key: string]: { title: string; link: string }[];
}
export const footerElem: FooterElemProp = {
  overview: navElemObj.filter(({ link }) => link !== "/Signin"),
  privacyPolicy: [
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
  { title: "youtube", link: "", icon: <FaYoutube /> },
  { title: "linkedIn", link: "", icon: <FaLinkedinIn /> },
  { title: "facebook", link: "", icon: <FaFacebookF /> },
  { title: "telegram", link: "", icon: <FaTelegramPlane /> },
  { title: "instagram", link: "", icon: <FaInstagram /> },
];
