import { useEffect, useState } from "react";
import { ButtonPrimary } from "./ButtonDefault";
import { MobileNavbar } from "./MobileNavbar";

type Props = {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
};

const sections = [
  "home",
  "about",
  "skills",
  "works",
  "testimonials",
  "contact",
];

const Navbar = ({ isMenuOpen, setIsMenuOpen }: Props) => {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        console.log(entries);
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2,
      },
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      console.log(element);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    const y = element.getBoundingClientRect().top + window.scrollY - 100;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  // track the screen width
  const trackScreenWidth = () => {
    if (window.innerWidth > 768) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", trackScreenWidth);
    return () => window.removeEventListener("resize", trackScreenWidth);
  }, []);

  return (
    <div
      className="navbar md:container  md:pr-3 md:pl-5  p-4"
      onClick={(e) => e.stopPropagation()}
    >
      <a
        href="#home"
        className={`h3 font-bold transition text-white ${activeSection === "home" ? "!text-[var(--color-main-red)]" : "text-white"}`}
      >
        Soheil Farrokhi
      </a>

      <div className="flex items-center gap-x-4 p">
        <a
          href="#about"
          className={`nav-link transition font-[300] ${
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
          className={`nav-link transition font-[300] ${
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
          className={`nav-link transition font-[300] ${
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
          className={`nav-link transition font-[300] ${
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
          <ButtonPrimary
            onClick={() => {}}
            className="full-rounded"
            // disabled={activeSection === "contact"}
          >
            Book a call
          </ButtonPrimary>
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
      <MobileNavbar
        isMenuOpen={isMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        handleMenuOpen={handleMenuOpen}
      />
    </div>
  );
};

export default Navbar;
