import React from "react";

type Props = {
  children: React.ReactNode;
  type?: "footer" | "default";

  position: string;
};

export const PageTitle = ({ position, type = "default", children }: Props) => {
  return (
    <div
      className={`w-full md:h-[80px] h-fit flex pb-[20px]  relative after:absolute ${
        position === "left"
          ? "after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gradient-to-r md:after:from-[var(--color-menu)] md:after:to-transparent  after:from-[var(--color-menu)] after:to-transparent"
          : position === "center"
            ? "after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gradient-to-r md:after:from-transparent md:after:via-[var(--color-menu)] md:after:to-transparent  after:from-[var(--color-menu)] after:to-transparent"
            : "after:bottom-0 after:right-0 after:w-full after:h-[1px] md:after:bg-gradient-to-l md:after:from-[var(--color-menu)] md:after:to-transparent after:bg-gradient-to-b after:from-[var(--color-menu)] after:to-transparent"
      } ${type === "footer" ? "after:from-transparent after:via-[var(--color-menu)] after:to-transparent  " : ""}`}
    >
      <h2
        className={`w-full h2-main ${type === "footer" ? "text-center" : "text-left"} font-bold ${position === "left" ? "md:text-left" : position === "center" ? "md:text-center" : "md:text-right"}`}
      >
        {children}
      </h2>
    </div>
  );
};
