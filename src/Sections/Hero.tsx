import {
  ButtonPrimary,
  ButtonSecondary,
} from "../components/globals/ButtonDefault";
import { HeroLight } from "../components/hero/HeroLight";
import { SectionIntro } from "../components/globals/SectionIntro";

const Hero = () => {
  return (
    <SectionIntro
      id="home"
      className="w-full h-fit lg:h-screen flex flex-col justify-center items-center text-white py-[150px] lg:py-0"
    >
      <div className="w-full h-fit lg:h-[600px]  flex flex-col lg:flex-row items-center gap-[20px] lg:p-0 p-4 gap-y-10 lg:gap-y-0">
        {/* TEXT PART  */}
        <div className="w-full lg:w-1/2 flex flex-col gap-y-4 items-center lg:items-start">
          <h1
            className="w-full relative h1 font-bold pb-2 after:absolute  after:bottom-0 after:left-0 after:h-[1px] after:w-full text-center lg:text-left
          after:bg-gradient-to-r after:from-transparent after:via-white  after:to-transparent lg:after:from-white lg:after:to-transparent "
          >
            Hello <span className="text-[var(--color-main-red)]">.</span>
          </h1>
          <p className="h2 font-medium">I'm Soheil Farrokhi</p>
          <p className="h2-main font-bold w-full text-center lg:text-left">
            Frontend Developer
          </p>
          <div className="hidden lg:flex gap-2 items-center ">
            <ButtonPrimary className="full-rounded" onClick={() => {}}>
              Lets Connect
            </ButtonPrimary>
            <ButtonSecondary className="full-rounded" onClick={() => {}}>
              See my work
            </ButtonSecondary>
          </div>
        </div>
        {/* Image part  */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-center min-h-[min(72vw,280px)] sm:min-h-[340px] md:min-h-[450px] lg:min-h-[550px] py-20 lg:py-0">
          <HeroLight />
        </div>
        <div className="flex flex-row md:hidden gap-2 items-center w-full justify-center  ">
          <ButtonPrimary onClick={() => {}}>Lets Connect</ButtonPrimary>
          <ButtonSecondary onClick={() => {}}>See my work</ButtonSecondary>
        </div>
      </div>
    </SectionIntro>
  );
};

export default Hero;
