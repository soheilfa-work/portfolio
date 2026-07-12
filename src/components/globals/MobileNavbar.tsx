import { ButtonPrimary } from "./ButtonDefault";
import { IconBox } from "./IconBox";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

type Props = {
  isMenuOpen: boolean;
  activeSection?: string;
  scrollToSection: (id: string) => void;
  handleMenuOpen?: () => void;
};

export const MobileNavbar = ({
  isMenuOpen,
  activeSection,
  scrollToSection,
  handleMenuOpen,
}: Props) => {
  return (
    <div
      className={`absolute top-[0px] left-0 w-full   bg-[var(--root-bg)]/90 backdrop-blur-2xl z-100 
         flex-col items-center justify-between gap-[20px] transition-all duration-600 text-white overflow-hidden  ${isMenuOpen ? " h-fit w-full opacity-100 " : "h-0 w-0 opacity-0"}`}
    >
      {/* top part 1  */}

      <div
        className={`w-full h-[50px] flex flex-row items-center justify-between gap-[20px]   pr-3 pl-5  ${isMenuOpen ? "" : "h-0 overflow-hidden"} `}
      >
        <a
          href="#home"
          className={`h3 font-bold transition text-white ${activeSection === "home" ? "!text-[var(--color-main-red)]" : "text-white"}`}
        >
          Soheil Farrokhi
        </a>

        {/* mobile haburger icon  */}
        <div
          className="md:hidden flex flex-col gap-y-1 cursor-pointer z-50 relative"
          onClick={handleMenuOpen}
        >
          <div
            className={`w-6 h-1 bg-white rounded-full transition-all duration-300  ${isMenuOpen ? "opacity-0 h-0 translate-y-0 w-0" : ""}`}
          ></div>
          <div
            className={`w-6 h-1 bg-white rounded-full transition-all duration-300 origin-center ${isMenuOpen ? "rotate-45  translate-y-1" : ""}`}
          ></div>
          <div
            className={`w-6 h-1 bg-white rounded-full transition-all duration-300 origin-center ${isMenuOpen ? "-rotate-45 -translate-y-1" : ""}`}
          ></div>
        </div>
      </div>
      {/* bottom part  */}
      <div className="w-full h-full flex flex-col items-center justify-between gap-[20px] px-5 py-10">
        <a
          href="#about"
          className={` transition font-[300] ${
            activeSection === "about"
              ? "!text-[var(--color-main-red)]"
              : "text-white"
          }`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("about");
          }}
        >
          Know me
        </a>

        <a
          href="#skills"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("skills");
          }}
          className={` transition font-[300] ${
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
          }}
          className={` transition font-[300] ${
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
          }}
          className={` transition font-[300] ${
            activeSection === "testimonials"
              ? "!text-[var(--color-main-red)]"
              : "text-white"
          }`}
        >
          Testimonials
        </a>
        <a
          href="#contact"
          className="font-[300]"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact");
          }}
        >
          <ButtonPrimary className="full-rounded" onClick={() => {}}>
            Book a call
          </ButtonPrimary>
        </a>
        {/* social icons part  */}
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
    </div>
  );
};
