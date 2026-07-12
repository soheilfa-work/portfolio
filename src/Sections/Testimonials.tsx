import { PageTitle } from "../components/globals/PageTitle";
import { TestimonialItem } from "../components/testimonials/TestimonialItem";
import { FaqItem } from "../components/testimonials/FaqItem";
import { SectionIntro } from "../components/globals/SectionIntro";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "CEO",
      image: "./testimonials/user_one.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      gridSize: "small",
    },
    {
      name: "Jane Doe",
      role: "CTO",
      image: "./testimonials/user_two.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      gridSize: "medium",
    },
    {
      name: "John Doe",
      role: "CEO",
      image: "./testimonials/user_one.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      gridSize: "small",
    },
    {
      name: "John Doe",
      role: "CEO",
      image: "./testimonials/user_two.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      gridSize: "small",
    },
    {
      name: "John Doe",
      role: "CEO",
      image: "./testimonials/user_one.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      gridSize: "small",
    },
    {
      name: "John Doe",
      role: "CEO",
      image: "./testimonials/user_two.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      gridSize: "small",
    },
    {
      name: "John Doe",
      role: "CEO",
      image: "./testimonials/user_one.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      gridSize: "small",
    },
  ];
  const faqItems = [
    {
      title: "What is the purpose of this website?",
      description:
        "A selection of projects showcasing my experience in building scalable, high-performance, and user-centric web applications. These projects highlight my expertise in modern front-end technologies, architecture design, performance optimization, and delivering impactful digital solutions across diverse domains.",
    },
    {
      title: "What is the purpose of this website?",
      description:
        "A selection of projects showcasing my experience in building scalable, high-performance, and user-centric web applications. These projects highlight my expertise in modern front-end technologies, architecture design, performance optimization, and delivering impactful digital solutions across diverse domains.",
    },
    {
      title: "What is the purpose of this website?",
      description:
        "A selection of projects showcasing my experience in building scalable, high-performance, and user-centric web applications. These projects highlight my expertise in modern front-end technologies, architecture design, performance optimization, and delivering impactful digital solutions across diverse domains.",
    },
  ];
  return (
    <SectionIntro
      id="testimonials"
      className="w-full h-content md:min-h-[600px]  flex flex-col text-white md:gap-[50px] gap-y-[20px]"
    >
      <PageTitle position="center">Testimonials</PageTitle>
      <p className="p leading-7 pb-8 md:text-center">
        Here is some feedbacks from clients and colbaraitors that i worked with
        in recent years
      </p>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
        {testimonials.map((testimonial: any, i: number) => (
          <TestimonialItem key={i} {...testimonial} />
        ))}
      </div>
      {/* faq part  */}
      <div className="w-full flex flex-col gap-[20px]">
        {/* faq goes here  */}
        {faqItems.map((faqItem: any, i: number) => (
          <FaqItem key={i} {...faqItem} />
        ))}
      </div>
    </SectionIntro>
  );
};

export default Testimonials;
