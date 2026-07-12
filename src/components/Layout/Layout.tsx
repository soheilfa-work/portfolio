import React, { useState } from "react";
import Navbar from "../globals/Navbar";
import { Footer } from "../globals/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  // close navbar from outside
  const handleClickOutside = () => {
    setIsMenuOpen(false);
  };
  return (
    <div
      className="w-full min-h-screen md:py-10 px-[10px] lg:px-0 md:px-[50px]  overflow-x-hidden"
      onClick={handleClickOutside}
    >
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="container mx-auto flex flex-col gap-y-10">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
