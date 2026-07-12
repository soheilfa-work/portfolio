// import { FaGoogle } from "react-icons/fa";

import GoogleIcon from "../../assets/descktop/icons/google.svg";

type Props = {
  name: string;
  role: string;
  image: string;
  description: string;
  gridSize: "small" | "medium" | "large";
  height?: string;
};

export const TestimonialItem = ({
  name,
  role,
  image,
  description,
  gridSize,
  height = "h-[304px]",
}: Props) => {
  return (
    <div
      className={` cursor-pointer w-full flex flex-col gap-[20px] px-[20px] py-[20px] pb-[40px] border border-[var(--color-menu)] 
        corner_half bg-gradient-to-b from-[var(--color-menu)]/30 to-[var(--color-menu)]/5 hover:bg-gradient-to-b 
        hover:from-[var(--color-menu)]/40 hover:to-[var(--color-menu)]/10 transition-all duration-300 
        ${gridSize === "small" ? "lg:col-span-1" : gridSize === "medium" ? "lg:col-span-2" : "lg:col-span-3 "} ${height} transform hover:scale-101`}
    >
      <div className="flex w-full items-center justify-between p-[10px] border border-[var(--color-menu)] corner_half bg-gradient-to-b from-[var(--color-menu)]/40 to-[var(--color-menu)]/5">
        <div className="flex items-center gap-4">
          <img
            src={image as string}
            alt=""
            className="w-[60px] h-[60px] object-cover rounded-full border border-[var(--color-menu)] box-shadow-[0_0_10px_0_rgba(0,0,0,0.5)]"
          />
          <div className="flex flex-col gap-1">
            <span className="text-white text-sm font-bold">{name}</span>
            <span className="text-white text-sm font-bold">{role}</span>
          </div>
        </div>
        {/* google icon  */}
        {/* <FaGoogle className="text-white w-[40px] h-[40px] object-cover " /> */}
        <img
          src={GoogleIcon as string}
          alt="Google"
          className="w-[40px] h-[40px] object-cover "
        />
      </div>
      {/* description  */}
      <p className="text-white psmall">{description}</p>
    </div>
  );
};
