import React from "react";

import BIImage from "../../assets/website/BI.jpg";

const BI = () => {
  return (
    <div className="flex justify-center items-center min-h-[50vh] bg-gray-100 dark:bg-black">
      <div className="py-12 sm:grid sm:place-items-center w-full">
        <div className="md:w-8/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="md:w-3/5">
            <h2
              data-aos="fade-left"
              className="text-4xl text-neutral-950 font-semibold mb-4 mr-10"
            >
              Business Intelligence
            </h2>
            <p data-aos="fade-left" className="text-lg text-black mb-10 ml-12">
              <ul>
                <li class="mb-2">
                  <strong>Our Expertise:</strong> We specialize in Business
                  Intelligence solutions to empower your decision-making.
                </li>
                <li class="mb-2">
                  <strong>Analytics and Reporting:</strong> Offering
                  comprehensive analytics and detailed reporting to uncover
                  actionable insights.
                </li>
                <li class="mb-2">
                  <strong>Data Management:</strong> Expert management of data ,
                  ensuring data integrity and accessibility.
                </li>

                <li class="mb-2">
                  <strong>Consultation:</strong> Professional consultation to
                  enhance your data strategies and business processes.
                </li>
              </ul>
            </p>
          </div>
          <div>
            <img
              className="max-w-lg"
              data-aos="fade-right"
              src={BIImage}
              alt="Team"
            />
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
export default BI;
