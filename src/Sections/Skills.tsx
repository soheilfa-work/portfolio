import { PageTitle } from "../components/globals/PageTitle";
import { SkillTabs } from "../components/skills/SkillTabs";
import { SectionIntro } from "../components/globals/SectionIntro";

type Props = {};

const Skills = ({}: Props) => {
  const tabItems = [
    {
      title: "ui/ux",
      tabIndex: 0,
      tabContent: (
        <div className="w-full h-fit flex flex-col gap-8">
          <div className="w-full flex flex-col gap-4">
            <div className="w-full flex justify-between psmall">
              <span>Figma</span>
              <span>90%</span>
            </div>
            <div className="w-full corner bg-white h-[5px] relative overflow-hidden">
              <div className="w-[90%] h-full bg-(--color-menu-2) absolute top-0 left-0 corner_half"></div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="w-full flex justify-between psmall">
              <span>Adobe XD</span>
              <span>90%</span>
            </div>
            <div className="w-full corner bg-white h-[5px] relative overflow-hidden">
              <div className="w-[90%] h-full bg-(--color-menu-2) absolute top-0 left-0 corner_half"></div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="w-full flex justify-between psmall">
              <span>HTML & CSS</span>
              <span>90%</span>
            </div>
            <div className="w-full corner bg-white h-[5px] relative overflow-hidden">
              <div className="w-[90%] h-full bg-(--color-menu-2) absolute top-0 left-0 corner_half"></div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "frontend",
      tabIndex: 1,
      tabContent: (
        <div className="w-full h-fit flex flex-col gap-8">
          <div className="w-full flex flex-col gap-4">
            <div className="w-full flex justify-between psmall">
              <span>React & Next Js</span>
              <span>90%</span>
            </div>
            <div className="w-full corner bg-white h-[5px] relative overflow-hidden">
              <div className="w-[90%] h-full bg-(--color-menu-2) absolute top-0 left-0 corner_half"></div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="w-full flex justify-between psmall">
              <span>Vue & Nuxt Js</span>
              <span>90%</span>
            </div>
            <div className="w-full corner bg-white h-[5px] relative overflow-hidden">
              <div className="w-[90%] h-full bg-(--color-menu-2) absolute top-0 left-0 corner_half"></div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="w-full flex justify-between psmall">
              <span>TypeScript</span>
              <span>90%</span>
            </div>
            <div className="w-full corner bg-white h-[5px] relative overflow-hidden">
              <div className="w-[90%] h-full bg-(--color-menu-2) absolute top-0 left-0 corner_half"></div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "backend",
      tabIndex: 2,
      tabContent: (
        <div className="w-full h-fit flex flex-col gap-8">
          <div className="w-full flex flex-col gap-4">
            <div className="w-full flex justify-between psmall">
              <span>Node js & Express</span>
              <span>90%</span>
            </div>
            <div className="w-full corner bg-white h-[5px] relative overflow-hidden">
              <div className="w-[90%] h-full bg-(--color-menu-2) absolute top-0 left-0 corner_half"></div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="w-full flex justify-between psmall">
              <span>Python & Django</span>
              <span>90%</span>
            </div>
            <div className="w-full corner bg-white h-[5px] relative overflow-hidden">
              <div className="w-[90%] h-full bg-(--color-menu-2) absolute top-0 left-0 corner_half"></div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="w-full flex justify-between psmall">
              <span>MongoDB & Mongoose</span>
              <span>90%</span>
            </div>
            <div className="w-full corner bg-white h-[5px] relative overflow-hidden">
              <div className="w-[90%] h-full bg-(--color-menu-2) absolute top-0 left-0 corner_half"></div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <SectionIntro
      id="skills"
      className="w-full h-content md:min-h-[600px] flex flex-col text-white md:gap-[50px] gap-y-[20px] relative md:pb-[100px] pb-[50px]"
    >
      {/* background poligon  */}
      <div className="w-1/2 h-[500px] skills-gradient-poly absolute top-1/2 -left-100 -translate-y-1/2 z-10 "></div>
      <PageTitle position="left">Skills</PageTitle>
      <p className="p leading-7 pb-8">
        Strong expertise in modern front-end technologies including React,
        Next.js, Vue.js, TypeScript, JavaScript (ES6+), and responsive web
        development principles.
      </p>
      {/* the skills tab part  */}
      <SkillTabs tabItems={tabItems} />
    </SectionIntro>
  );
};

export default Skills;
