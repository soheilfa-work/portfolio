type Props = {
  title: string;
  company: string;
  date: string;
  keyIndex: number;
};

export const ExperienceItem = ({ title, company, date, keyIndex }: Props) => {
  const checkkey = () => {
    console.log(keyIndex);
  };

  return (
    <>
      <div
        onMouseEnter={checkkey}
        className="group relative w-full md:h-[40px] h-fit md:py-0 py-2 flex items-center justify-between md:px-10 px-5 rounded-full shrink-0 experiences-gradient-bg cursor-pointer"
      >
        <div
          className={`absolute top-1/2 -translate-y-1/2 -left-[25px]
                  w-4 h-4 rounded-full dot-icon
                  opacity-0 group-hover:opacity-100
                  transition-opacity ${keyIndex % 2 === 0 ? "bg-[var(--color-menu)]" : "bg-[var(--color-main-red)]"} transition-all duration-300`}
        />

        <span className="hidden md:block">{title}</span>
        <span>{company}</span>
        <span className="hidden md:block">{date}</span>
        <span className="block md:hidden">{date.slice(0, 4)}</span>
      </div>
    </>
  );
};
