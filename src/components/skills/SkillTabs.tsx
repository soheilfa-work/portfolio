import { useState } from "react";

type Props = {
  tabItems?: {
    title: string;
    tabIndex: number;
    tabContent: React.ReactNode;
  }[];
};

export const SkillTabs = ({ tabItems }: Props) => {
  const [activeTab, setActiveTab] = useState({ tabIndex: 0, title: "" });

  const handleTab = (
    e: React.MouseEvent<HTMLButtonElement>,
    title: string,
    tabIndex: number,
  ) => {
    e.preventDefault();
    setActiveTab({ tabIndex: tabIndex, title: title });
  };
  return (
    <div className="w-full h-fit md:p-[10px] flex flex-col items-end text-white md:border md:border-(--color-menu) corner_half">
      <div className="w-full flex items-center md:justify-end justify-between gap-2 ">
        {/* tab items part  */}
        {tabItems &&
          tabItems.length > 0 &&
          tabItems.map((tabItem, i) => {
            return (
              <button
                key={i}
                onClick={(e) => handleTab(e, tabItem.title, tabItem.tabIndex)}
                className={`w-full md:w-fit cursor-pointer flex items-center justify-center min-w-[100px] h-[40px] psmall !bg-[var(--color-menu)]/20 corner_half px-4 hover:!bg-[var(--color-menu)]/50 transition-all duration-300`}
                style={{
                  backgroundColor:
                    activeTab.tabIndex === tabItem.tabIndex
                      ? "var(--color-menu) !important"
                      : "var(--color-menu)/20",
                }}
              >
                {tabItem.title}
              </button>
            );
          })}
      </div>
      {/* tab items  */}
      <div className="w-full h-fit px-[10px] py-[20px]">
        {tabItems?.[activeTab.tabIndex]?.tabContent}
      </div>
    </div>
  );
};
