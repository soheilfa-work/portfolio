import { ExperienceItem } from "./ExperienceItem";

type Props = {};

export const Experiences = ({}: Props) => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Dream Farm Studio",
      date: "2026 - Present",
    },
    {
      title: "Frontend Developer",
      company: "Dream Farm Studio",
      date: "2026 - Present",
    },
    {
      title: "Frontend Developer",
      company: "Dream Farm Studio",
      date: "2026 - Present",
    },
    {
      title: "Frontend Developer",
      company: "Dream Farm Studio",
      date: "2026 - Present",
    },
    {
      title: "Frontend Developer",
      company: "Dream Farm Studio",
      date: "2026 - Present",
    },
    {
      title: "Frontend Developer",
      company: "Dream Farm Studio",
      date: "2026 - Present",
    },
    {
      title: "Frontend Developer",
      company: "Dream Farm Studio",
      date: "2026 - Present",
    },
    {
      title: "Frontend Developer",
      company: "Dream Farm Studio",
      date: "2026 - Present",
    },
    {
      title: "Frontend Developer",
      company: "Dream Farm Studio",
      date: "2026 - Present",
    },
    {
      title: "Frontend Developer",
      company: "Dream Farm Studio",
      date: "2026 - Present",
    },
    {
      title: "Frontend Developer",
      company: "Dream Farm Studio",
      date: "2026 - Present",
    },
    {
      title: "Frontend Developer",
      company: "Dream Farm Studio",
      date: "2026 - Present",
    },
    {
      title: "Frontend Developer",
      company: "Dream Farm Studio",
      date: "2026 - Present",
    },
    {
      title: "Frontend Developer",
      company: "Dream Farm Studio",
      date: "2026 - Present",
    },
    {
      title: "Frontend Developer",
      company: "Dream Farm Studio",
      date: "2026 - Present",
    },
    {
      title: "Frontend Developer",
      company: "Dream Farm Studio",
      date: "2026 - Present",
    },
    {
      title: "Frontend Developer",
      company: "Dream Farm Studio",
      date: "2026 - Present",
    },
  ];
  return (
    <div className="w-full h-[461px] flex flex-col  text-white gap-[20px] md:p-[40px] p-[10px] border border-[var(--color-menu)] corner overflow-x-visible pb-[20px] md:pb-0">
      <h3 className="h3 mt-4 md:mt-0">Experiences</h3>
      {/* experiences part  */}
      <div className="w-full md:h-[351px] h-full flex flex-col gap-[20px]  md:pl-[30px] md:pl-[20px] md:pr-[20px]  scrollable md:border-l border-[var(--color-menu)] relative overflow-x-visible ">
        {experiences.map((experience, i) => (
          <ExperienceItem key={i} {...experience} keyIndex={i} />
        ))}
      </div>
    </div>
  );
};
