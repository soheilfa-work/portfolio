import { useState } from "react";
import { PageTitle } from "./PageTitle";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IconBox } from "./IconBox";

type Props = {};

export const Footer = ({}: Props) => {
  const [activeSection, setActiveSection] = useState<string>("home");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="w-full  flex flex-col justify-between  items-center text-white relative gap-[30px] lg:gap-[50px] py-[100px]">
      <div className="w-1/2 h-[300px] footer-gradient-poly absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 "></div>

      <PageTitle position="center" type="footer">
        SOHEIL FARROKHI
      </PageTitle>
      <div className="flex items-center gap-x-4 p">
        <a
          href="#about"
          className={`transition font-[300] ${
            activeSection === "about"
              ? "!text-[var(--color-main-red)]"
              : "text-white"
          }`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("about");
            setActiveSection("about");
          }}
        >
          Know me
        </a>

        <a
          href="#skills"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("skills");
            setActiveSection("skills");
          }}
          className={`transition font-[300] ${
            activeSection === "skills"
              ? "!text-[var(--color-main-red)] "
              : "text-white"
          }`}
        >
          Skills
        </a>

        <a
          href="#works"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("works");
            setActiveSection("works");
          }}
          className={`transition font-[300] ${
            activeSection === "works"
              ? "!text-[var(--color-main-red)]"
              : "text-white"
          }`}
        >
          Works
        </a>

        <a
          href="#testimonials"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("testimonials");
            setActiveSection("testimonials");
          }}
          className={`transition font-[300] ${
            activeSection === "testimonials"
              ? "!text-[var(--color-main-red)]"
              : "text-white"
          }`}
        >
          Testimonials
        </a>
      </div>
      {/* social icons par  */}
      <div className="w-full flex items-center justify-center gap-x-4">
        <IconBox
          icon={<FaInstagram />}
          title="Instagram"
          description="Follow me on Instagram"
        />
        <IconBox
          icon={<FaGithub />}
          title="Github"
          description="Follow me on Github"
        />
        <IconBox
          icon={<FaLinkedinIn />}
          title="Linkedin"
          description="Follow me on Linkedin"
        />
        <IconBox
          icon={<FaTwitter />}
          title="Twitter"
          description="Follow me on Twitter"
        />
      </div>
    </div>
  );
};
