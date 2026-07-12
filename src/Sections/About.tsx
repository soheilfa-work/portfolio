import AboutImage from "../assets/descktop/about.png";
import { ButtonPrimaryLight } from "../components/globals/ButtonDefault";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IconBox } from "../components/globals/IconBox";
import { PromotBoxAbout } from "../components/about/PromotBoxAbout";
import ReactIcon from "../assets/descktop/icons/react.svg";
import VueIcon from "../assets/descktop/icons/vue.svg";
import NextIcon from "../assets/descktop/icons/next.svg";
import NuxtIcon from "../assets/descktop/icons/nuxt.svg";
import { Experiences } from "../components/about/Experiences";
import { SectionIntro } from "../components/globals/SectionIntro";

const About = () => {
  return (
    <SectionIntro
      id="about"
      className="w-full h-content flex flex-col justify-center items-center text-white gap-[50px] relative md:pb-[100px] pb-[50px] "
    >
      {/* background poligon  */}
      <div className="w-1/2 h-1/2 about-gradient-poly absolute top-1/2 right-0 -translate-y-1/2 z-10 "></div>
      <div className="flex w-full h-fit lg:h-[550px] lg:flex-row flex-col justify-between lg:gap-[50px] gap-y-[20px] relative z-20">
        <h2 className="h2-main font-bold lg:text-left block lg:hidden">
          About Me
        </h2>
        {/* image part  */}
        <div className="w-full lg:w-1/3 h-full flex flex-col gap-y-4 lg:gap-y-0 justify-between about-gradient-bg corner border-1 border-[var(--color-menu)] p-2 lg:pb-4">
          <img
            className="w-full lg:h-[394px] h-fit object-cover corner_half"
            src={AboutImage}
            alt=""
          />
          {/* social icons  */}
          <div className="w-full justify-center gap-4 items-center hidden lg:flex">
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
          {/* button  */}
          <div className="w-full justify-center hidden lg:flex">
            <ButtonPrimaryLight
              onClick={() => {}}
              className="!w-full max-w-[200px] justify-center"
            >
              Lets Connect
            </ButtonPrimaryLight>
          </div>
        </div>
        {/* dvider  */}
        <div className="w-[1px] h-full dvider-gradient-bg hidden lg:block"></div>
        {/* text part  */}
        <div className="w-full lg:w-2/3 h-full flex flex-col  justify-between">
          <div className="flex w-full flex-col gap-[20px]">
            <h2 className="h2-main font-bold hidden lg:block">About Me</h2>
            <p className="p leading-7 pb-8 text-justify lg:text-left ">
              Senior Front-End Developer with 7 years of specialized experience
              in designing and implementing scalable and complex user
              interfaces. Expert in optimizing code architecture using
              React/Vue, focused on improving user experience (UX) and website
              performance. Successful track record in leading technical teams,
              reducing page load times, and imple menting modular architectures.
              Eager to solve complex technical challenges and collaborate on
              impactful projects.
            </p>
          </div>
          <div className="flex w-full flex-col gap-[20px]">
            {/* desctop promot boxes  */}
            <div className="w-full flex p-[20px] items-center justify-between border border-[var(--color-menu)] corner hidden lg:flex">
              <PromotBoxAbout number="1M" title="Coding hours" />
              <div className="w-[1px] h-full bg-[var(--color-menu)] opacity-30"></div>
              <PromotBoxAbout number="30" title="Completed Projects" />
              <div className="w-[1px] h-full bg-[var(--color-menu)] opacity-30"></div>
              <PromotBoxAbout number="50" title="Satisfied Clients" />
              <div className="w-[1px] h-full bg-[var(--color-menu)] opacity-30"></div>
              <PromotBoxAbout number="7" title="Years of experience" />
            </div>
            {/* mobile promot boxes  */}
            <div className="w-full grid grid-cols-2 gap-4 p-[20px] items-center justify-between border border-[var(--color-menu)] corner  lg:hidden">
              <PromotBoxAbout number="1M" title="Coding hours" />
              <PromotBoxAbout number="30" title="Completed Projects" />
              <PromotBoxAbout number="50" title="Satisfied Clients" />
              <PromotBoxAbout number="7" title="Years of experience" />
            </div>
            {/* my stacks part  */}
            <div className="w-full flex p-[20px]  items-center justify-between border border-[var(--color-menu)] corner stacks-gradient-bg">
              <h3 className="h3">My Stacks</h3>
              <div className="flex items-center md:gap-4 gap-2">
                <IconBox
                  icon={
                    <img
                      src={ReactIcon}
                      className="md:w-[40px] w-[20px] md:h-[40px] h-[20px]"
                    />
                  }
                  title="react"
                  widthAndHeight="md:w-[60px] w-[40px] md:h-[60px] h-[40px]"
                />
                <IconBox
                  icon={
                    <img
                      src={VueIcon}
                      className="md:w-[40px] w-[20px] md:h-[40px] h-[20px]"
                    />
                  }
                  title="react"
                  widthAndHeight="md:w-[60px] w-[40px] md:h-[60px] h-[40px]"
                />
                <IconBox
                  icon={
                    <img
                      src={NextIcon}
                      className="md:w-[40px] w-[20px] md:h-[40px] h-[20px]"
                    />
                  }
                  title="react"
                  widthAndHeight="md:w-[60px] w-[40px] md:h-[60px] h-[40px]"
                />
                <IconBox
                  icon={
                    <img
                      src={NuxtIcon}
                      className="md:w-[40px] w-[20px] md:h-[40px] h-[20px]"
                    />
                  }
                  title="react"
                  widthAndHeight="md:w-[60px] w-[40px] md:h-[60px] h-[40px]"
                />
              </div>
            </div>
            {/* mobile socials part  */}
            <div className="w-full lg:hidden flex items-center justify-between gap-8">
              {/* button  */}

              <ButtonPrimaryLight
                onClick={() => {}}
                className="w-full justify-center"
              >
                Lets Connect
              </ButtonPrimaryLight>

              {/* social icons  */}
              <div className="w-full justify-end gap-4 items-center  flex">
                <IconBox
                  icon={<FaInstagram />}
                  title="Instagram"
                  description="Follow me on Instagram"
                  widthAndHeight="w-[30px] h-[30px]"
                />
                <IconBox
                  icon={<FaGithub />}
                  title="Github"
                  description="Follow me on Github"
                  widthAndHeight="w-[30px] h-[30px]"
                />
                <IconBox
                  icon={<FaLinkedinIn />}
                  title="Linkedin"
                  description="Follow me on Linkedin"
                  widthAndHeight="w-[30px] h-[30px]"
                />
                <IconBox
                  icon={<FaTwitter />}
                  title="Twitter"
                  description="Follow me on Twitter"
                  widthAndHeight="w-[30px] h-[30px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* experiences part  */}
      <Experiences />
    </SectionIntro>
  );
};
<div className="w-full h-full flex flex-col gap-[20px] relative z-20">
  <div className="w-full h-full flex flex-col gap-[20px]">
    <h4 className="h4">Experience 2</h4>
    <p className="p">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
    </p>
  </div>
</div>;

export default About;
