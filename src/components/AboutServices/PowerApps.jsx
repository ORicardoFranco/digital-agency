import React from "react";
import teamImage from "../../assets/website/powerApps.jpg";

const PowerApps = () => {
  return (
    <div className="flex justify-center items-center min-h-[50vh] bg-white dark:bg-black">
      <div className="py-12  sm:grid sm:place-items-center w-5/6 ">
        <div className="md:w-8/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img
              className="max-w-lg"
              data-aos="fade-right"
              src={teamImage}
              alt="Team"
            />
          </div>
          <div className="md:w-3/5">
            <h2
              data-aos="fade-left"
              className="text-4xl text-neutral-950 font-semibold mb-4 ml-10"
            >
              PowerApps
            </h2>
            <p data-aos="fade-left" className="text-sm text-black mb-8 ml-10">
              <ul>
                <li>
                  <strong>Our Expertise:</strong> We specialize in developing
                  Power Apps solutions to optimize your business operations.
                </li>
                <li>
                  <strong>App Development:</strong> Crafting custom apps
                  designed to streamline processes and improve efficiency.
                </li>
                <li>
                  <strong>Integration:</strong> Seamless integration with
                  Microsoft 365, Dynamics 365, and other services to enhance
                  functionality.
                </li>
                <li>
                  <strong>Automation:</strong> Implementing process automation
                  to reduce manual tasks and increase productivity.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="900"
          data-aos-offset="0"
          className="text-center mt-4 sm:mt-8"
        >
          <button className="primary-btn">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default PowerApps;
