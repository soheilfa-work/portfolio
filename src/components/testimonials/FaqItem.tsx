import React, { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";

type Props = {
  title: string;
  description: string;
};

export const FaqItem = ({ title, description }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const faqHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  return (
    <div
      onClick={(e) => faqHandler(e as React.MouseEvent<HTMLDivElement>)}
      className=" cursor-pointer relative w-full flex flex-col gap-[20px] border border-[var(--color-menu)] corner_half md:p-[20px] p-[10px] bg-gradient-to-b from-[var(--color-menu)]/30 to-[var(--color-menu)]/5"
    >
      <h3 className="h3 font-bold">{title}</h3>

      <p
        className={`psmall max-w-[90%]  ${isOpen ? "max-h-[100px] overflow-y-hidden" : "max-h-0 overflow-y-hidden "} transition-all duration-300`}
      >
        {description}
      </p>
      <button
        onClick={(e) => faqHandler(e as any)}
        className="cursor-pointer absolute top-1/2 -translate-y-1/2 md:right-[20px] right-[10px] md:w-[40px] md:h-[40px] w-[30px] h-[30px] flex items-center justify-center rounded-full border border-[var(--color-menu)] bg-gradient-to-b from-[var(--color-menu)]/50 to-[var(--color-menu)]/5 hover:bg-gradient-to-b hover:from-[var(--color-menu)]/60 hover:to-[var(--color-menu)]/10 transition-all duration-300"
      >
        {isOpen ? (
          <BiMinus className="text-white w-[20px] h-[20px] object-cover" />
        ) : (
          <BiPlus className="text-white w-[20px] h-[20px] object-cover" />
        )}
      </button>
    </div>
  );
};
