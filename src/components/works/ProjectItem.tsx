import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { ButtonPrimary, ButtonPrimaryNoBg } from "../globals/ButtonDefault";

type Props = {
  image?: React.ReactNode;
  title?: string;
  description?: string;
  technologies?: string[];
  //   link: string;
  //   github: string;
  rowDirection?: "row" | "row-reverse";
};

export const ProjectItem = ({
  image,
  title,
  description,
  technologies,
  rowDirection,
}: Props) => {
  return (
    <div
      className={`w-full flex items-center justify-between md:gap-[50px] gap-y-[20px] text-white ${rowDirection === "row" ? "lg:flex-row flex-col" : "lg:flex-row-reverse flex-col-reverse"} cursor-pointer`}
    >
      {/* image part  */}
      <div className="w-[450px] h-[450px]  px-[40px] hidden md:flex  items-center justify-center  relative ">
        {/* back border box  */}
        <div
          className={`z-10 absolute w-full h-[380px] top-1/2 -translate-y-[50%] left-0 corner_half  ${rowDirection === "row" ? "border border-[var(--color-menu)]" : "border border-[var(--color-main-red)]"} `}
        ></div>
        {/* back light  */}
        <div
          className={`w-full h-full z-10 absolute top-0 left-0 blur-[20px] corner_half ${rowDirection === "row" ? "bg-[var(--color-menu)]/20" : "bg-[var(--color-main-red)]/20"}`}
        ></div>
        <div className="w-full h-full z-20">{image}</div>
      </div>
      {/* text part  */}
      <div
        className={`flex-1 md:h-[380px] h-fit flex flex-col gap-[20px] ${rowDirection === "row" ? "border border-[var(--color-menu)] bg-gradient-to-b from-[var(--color-menu)]/10 to-transparent" : "border border-[var(--color-main-red)] bg-gradient-to-b from-[var(--color-main-red)]/10 to-transparent"} md:p-[20px] md:p-[10px] p-[10px] pb-[20px] corner_half`}
      >
        {/* image for mobile  */}
        <div
          className={`w-full h-[360px] md:hidden flex items-center justify-center p-[10px] corner_half ${rowDirection === "row" ? "border border-[var(--color-menu)]/30" : "border border-[var(--color-main-red)]/30"}`}
        >
          {image}
        </div>
        <h3 className="h2 font-bold">{title}</h3>
        <div className="flex gap-2">
          {technologies?.map((technology) => (
            <span
              key={technology}
              className={`${rowDirection === "row" ? "bg-[var(--color-menu)]/20 border border-[var(--color-menu)]" : "bg-[var(--color-main-red)]/20 border border-[var(--color-main-red)]"} text-white px-2 py-1 corner_half psmall w-[100px] h-[30px] flex items-center justify-center`}
            >
              {technology}
            </span>
          ))}
        </div>
        <p className="p">{description}</p>
        {/* links  */}
        <div className="flex gap-8 mt-auto justify-between md:justify-start ">
          <ButtonPrimary
            onClick={() => {}}
            className="!bg-[var(--color-main-red)]/10 !text-white"
          >
            View Github
          </ButtonPrimary>
          <ButtonPrimaryNoBg onClick={() => {}} className="min-w-[110px]">
            View Prject
            {/* arrow  */}
            <FaArrowRight className="text-[10px]" />
          </ButtonPrimaryNoBg>
        </div>
      </div>
    </div>
  );
};
