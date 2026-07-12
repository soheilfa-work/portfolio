import React from "react";
import { PageTitle } from "../components/globals/PageTitle";
import SampleProjectOne from "../assets/descktop/sample project 1.png";
import SampleProjectTwo from "../assets/descktop/sample project 2.png";
import { ProjectItem } from "../components/works/ProjectItem";
import { SectionIntro } from "../components/globals/SectionIntro";

const Works = () => {
  const projectItems: {
    title: string;
    description: string;
    technologies: string[];
    link: string;
    github: string;
    image: React.ReactNode;
    rowDirection: "row" | "row-reverse";
  }[] = [
    {
      title: "Project 1",
      description:
        "A selection of projects showcasing my experience in building scalable, high-performance, and user-centric web applications. These projects highlight my expertise in modern front-end technologies, architecture design, performance optimization, and delivering impactful digital solutions across diverse domains.",
      technologies: ["React", "Next.js", "TypeScript"],
      link: "https://example.com",
      github: "https://github.com/example/project1",
      image: (
        <div className="w-full h-full flex  gap-[20px]">
          <img
            className="w-full h-full object-cover object-top"
            src={SampleProjectOne}
            alt="Project 1"
          />{" "}
          <img
            className="w-full h-full object-cover object-top"
            src={SampleProjectTwo}
            alt="Project 1"
          />
        </div>
      ),
      rowDirection: "row",
    },
    {
      title: "Project 2",
      description:
        "A selection of projects showcasing my experience in building scalable, high-performance, and user-centric web applications. These projects highlight my expertise in modern front-end technologies, architecture design, performance optimization, and delivering impactful digital solutions across diverse domains.",
      technologies: ["React", "Next.js", "TypeScript"],
      link: "https://example.com",
      github: "https://github.com/example/project2",
      image: (
        <div className="w-full h-full flex  gap-[20px]">
          <img
            className="w-full h-full object-cover object-top"
            src={SampleProjectOne}
            alt="Project 2"
          />{" "}
          <img
            className="w-full h-full object-cover object-top"
            src={SampleProjectTwo}
            alt="Project 2"
          />
        </div>
      ),
      rowDirection: "row-reverse",
    },

    {
      title: "Project 3",
      description:
        "A selection of projects showcasing my experience in building scalable, high-performance, and user-centric web applications. These projects highlight my expertise in modern front-end technologies, architecture design, performance optimization, and delivering impactful digital solutions across diverse domains.",
      technologies: ["React", "Next.js", "TypeScript"],
      link: "https://example.com",
      github: "https://github.com/example/project2",
      image: (
        <div className="w-full h-full flex  gap-[20px]">
          <img
            className="w-full h-full object-cover object-top"
            src={SampleProjectOne}
            alt="Project 3"
          />{" "}
          <img
            className="w-full h-full object-cover object-top"
            src={SampleProjectTwo}
            alt="Project 3"
          />
        </div>
      ),
      rowDirection: "row",
    },
  ];

  return (
    <SectionIntro
      id="works"
      className="w-full h-content md:min-h-[600px] flex flex-col text-white md:gap-[50px] gap-y-[20px] relative md:pb-[100px] pb-[50px]"
    >
      <PageTitle position="center">Works</PageTitle>
      <p className="p leading-7 pb-8 md:text-center text-left">
        A selection of projects showcasing my experience in building scalable,
        high-performance, and user-centric web applications. These projects
        highlight my expertise in modern front-end technologies, architecture
        design, performance optimization, and delivering impactful digital
        solutions across diverse domains.
      </p>

      {/* the projects list  */}
      <div className="w-full flex flex-col gap-[50px]">
        {/* the project items  */}
        {projectItems.map((projectItem, i) => (
          <ProjectItem key={i} {...projectItem} />
        ))}
      </div>
    </SectionIntro>
  );
};

export default Works;
