type Props = {
  number: string;
  title: string;
};

export const PromotBoxAbout = ({ number, title }: Props) => {
  return (
    <div className="flex flex-col gap-2 justify-between text-white">
      <div className="h2">
        {number}
        <span className="text-[var(--color-main-red)]"> +</span>
      </div>
      <span className="psmall">{title}</span>
    </div>
  );
};
