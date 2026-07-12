import React from "react";
import Profile from "../../assets/descktop/profile.png";
import { Promotbox } from "./Promotbox";

type Props = {};

const ORBIT_PROMPTS = [
  {
    number: "1M",
    title: "Coding Hours",
    start: 0,
    duration: 72,
    delay: 0,
  },
  {
    number: "20K",
    title: "Satisfied Clients",
    start: 60,
    duration: 72,
    delay: 0,
  },
  {
    number: "30K",
    title: "Projects Completed",
    start: 180,
    duration: 72,
    delay: 0,
  },
  {
    number: "7",
    title: "Years of Experience",
    start: 260,
    duration: 72,
    delay: 0,
  },
] as const;

export const HeroLight = ({}: Props) => {
  return (
    <div
      className="hero-light-scene relative mx-auto shrink-0"
      style={{ width: "var(--hero-size)", height: "var(--hero-size)" }}
    >
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[55%] h-[55%] bg-[var(--color-main-red)]/20 z-10 blur-[80px] sm:blur-[100px] rounded-full" />
      <div className="absolute top-0 right-[5%] w-[110%] h-[110%] bg-[var(--color-main-red)]/20 z-10 blur-[100px] sm:blur-[150px] rounded-full" />
      <div className="absolute bottom-0 left-[10%] w-[35%] h-[35%] bg-[var(--color-main-red)]/50 z-10 blur-[80px] sm:blur-[150px] rounded-full" />

      <div className="absolute inset-0 z-20 rounded-full pointer-events-none">
        <div className="absolute inset-0 z-40 pointer-events-none">
          {ORBIT_PROMPTS.map((prompt) => (
            <div
              key={prompt.title}
              className="hero-orbit-arm absolute inset-0"
              style={
                {
                  "--orbit-start": `${prompt.start}deg`,
                  "--orbit-duration": `${prompt.duration}s`,
                  "--orbit-delay": `${prompt.delay}s`,
                } as React.CSSProperties
              }
            >
              <div className="absolute left-1/2 top-1/2 hero-orbit-offset">
                <div
                  className="hero-orbit-counter"
                  style={
                    {
                      "--orbit-start": `${prompt.start}deg`,
                      "--orbit-duration": `${prompt.duration}s`,
                      "--orbit-delay": `${prompt.delay}s`,
                    } as React.CSSProperties
                  }
                >
                  <Promotbox number={prompt.number} title={prompt.title} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute inset-0 z-20 rounded-full overflow-hidden">
          <div className="gradient-bg" />
          <img
            className="w-full h-full object-contain absolute -bottom-[8%] left-1/2 -translate-x-1/2 z-30"
            src={Profile}
            alt="Soheil Farrokhi"
          />
        </div>
      </div>

      <div className="w-[5%] min-w-[12px] aspect-square border-2 border-[var(--color-main-red)]/20 absolute top-[2%] left-[0%] z-10 rounded-full animate-flicker animate-pulse" />
      <div className="w-[10%] min-w-[28px] aspect-square border-2 border-[var(--color-main-red)]/80 absolute bottom-[0%] left-[2%] z-10 rounded-full animate-flicker animate-pulse" />
      <div className="w-[4%] min-w-[12px] aspect-square border-2 border-[var(--color-main-red)]/80 absolute top-[0%] right-[0%] z-10 rounded-full animate-flicker animate-pulse" />
      <div className="w-[7%] min-w-[20px] aspect-square border-2 border-[var(--color-main-red)]/40 absolute bottom-[0%] right-[0%] z-10 rounded-full animate-flicker animate-pulse" />
    </div>
  );
};
