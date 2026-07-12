type Props = {
  number: string;
  title: string;
};

export const Promotbox = (props: Props) => {
  return (
    <div className="w-content md:min-w-[150px] min-w-[100px] border-1 border-[var(--color-main-red)] rounded-2xl p-2 md:p-4 flex flex-col gap-1 md:gap-2 backdrop-blur-sm bg-[var(--color-main-red)]/10 shadow-sm shadow-black/20">
      <div className="text-white h3 font-bold text-center md:text-left items-center justify-center">
        {props.number}+
      </div>
      <div className="text-white psmall md:font-bold">{props.title}</div>
    </div>
  );
};
