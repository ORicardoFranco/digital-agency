import React from "react";
import { FaWindows } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { PiMicrosoftPowerpointLogoDuotone } from "react-icons/pi";
import { TbWorldWww } from "react-icons/tb";

const skillsData = [
  {
    name: "Windows Solutions",
    icon: <FaWindows className="text-4xl text-primary" />,
    link: "#",
    description:
      "We specialize in resolving all your Windows and Microsoft-related challenges. From troubleshooting errors to optimizing performance, our dedicated team is committed to providing expert solutions tailored to your needs. Focus on your business while we take care of the tech.",
    aosDelay: "0",
  },
  {
    name: "Business Intelligence",
    icon: <FaChartBar className="text-4xl text-primary" />,
    link: "#",
    description:
      "We specialize in Business Intelligence and Data Analytics services designed to transform complex data into actionable insights. Partner with us to unlock the full potential of your data and propel your business forward.",
    aosDelay: "300",
  },
  {
    name: "Power Apps",
    icon: (
      <PiMicrosoftPowerpointLogoDuotone className="text-4xl text-primary" />
    ),
    link: "#",
    description:
      "We harness the capabilities of Microsoft Power Apps to create custom applications that drive efficiency and automation within your organization. Whether you need a simple app to streamline tasks or a complex system for enterprise-wide use, we provide tailored solutions that transform your operational productivity.",
    aosDelay: "500",
  },
  {
    name: "Website",
    icon: <TbWorldWww className="text-4xl text-primary" />,
    link: "#",
    description:
      "We craft bespoke websites that blend exceptional design with robust functionality. We focus on user-centric designs, ensuring that every site is intuitive, responsive, and tailored to meet the unique needs of your audience. We provide end-to-end solutions to help you achieve your digital objectives and engage your customers more effectively.",
    aosDelay: "700",
  },
];
const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
        <div className="container">
          {/* Header */}
          <div className="pb-12 text-center space-y-3">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-primary"
            >
              Explore Our Services
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-600 dark:text-gray-400 text-sm"
            >
              Your IT department
            </p>
          </div>

          {/* services cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4"
              >
                <div>{skill.icon}</div>
                <h1 className="text-lg font-semibold">{skill.name}</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>

          {/* button */}
        </div>
      </div>
    </>
  );
};

export default Services;
