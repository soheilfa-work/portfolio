import React from "react";

type Props = {
  icon: React.ReactNode;
  title: string;
  description?: string;
  widthAndHeight?: string;
};

export const IconBox = ({
  icon,
  title,
  widthAndHeight = "w-[40px] h-[40px]",
}: Props) => {
  return (
    <div
      className={`flex items-center justify-center gradient-icon-box rounded-full border border-[var(--color-menu)] cursor-pointer ${widthAndHeight}`}
      title={title}
      // style={{
      //   width: `${widthAndHeight}px`,
      //   height: `${widthAndHeight}px`,
      // }}
    >
      {icon}
    </div>
  );
};
