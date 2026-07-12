import React, { useState } from "react";
import { ButtonPrimaryLight } from "../components/globals/ButtonDefault";
import { SectionIntro } from "../components/globals/SectionIntro";

const Contact = () => {
  const [formData, setFormData] = useState<any>({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <SectionIntro id="contact" className="w-full">
      <form
        className="w-full lg:h-[520px] h-fit flex flex-col lg:flex-row gap-[20px] justify-between items-center text-white relative"
        onSubmit={handleSubmit}
      >
        {/* background poligon  */}
        <div className="lg:w-1/2 w-[300px] lg:h-[200px] h-[300px]  skills-gradient-poly absolute lg:top-1/2 top-1/3 lg:-left-100 left-1/2 -translate-x-1/2  -translate-y-1/2 z-10 bg-red-500"></div>
        {/* text part  */}
        <div
          className="w-full lg:w-1/2 flex-1 flex flex-col gap-[40px] lg:gap-[20px] relative z-20 
        before:content-[''] py-[50px]
        before:absolute before:top-0 before:left-0 before:w-full before:h-[5px] lg:before:bg-gradient-to-r before:from-[var(--color-main-red)] before:to-transparent before:opacity-40
        before:blur-[2px]
        after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[5px] lg:after:bg-gradient-to-r after:from-[var(--color-main-red)] after:to-transparent after:opacity-40
        after:blur-[2px]
        "
        >
          <h2 className="h2-main font-bold text-center lg:text-left ">
            Have A project in mind?
          </h2>
          <h2 className="h2-main font-bold text-center lg:text-left">
            Lets Talk
          </h2>
          <ButtonPrimaryLight
            type="submit"
            className="w-full lg:w-fit flex justify-center lg:justify-start !rounded-md !h-10 !hidden lg:!block"
            onClick={() => {}}
          >
            Submit
          </ButtonPrimaryLight>
        </div>
        {/* form part  */}
        <div className="w-full lg:w-1/2 flex-1 flex flex-col gap-[20px] relative z-20">
          <div className="w-full flex flex-col gap-[20px]">
            <input
              type="text"
              placeholder="Name"
              className="input"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              type="email"
              placeholder="Email"
              className="input"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <textarea
              placeholder="Message"
              className="input"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
            <ButtonPrimaryLight
              type="submit"
              className="w-full lg:w-fit flex justify-center lg:justify-start !rounded-md !h-10 !block lg:!hidden"
              onClick={() => {}}
            >
              Submit
            </ButtonPrimaryLight>
          </div>
        </div>
      </form>
    </SectionIntro>
  );
};

export default Contact;
