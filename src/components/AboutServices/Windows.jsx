import React from "react";
import teamImage from "../../assets/website/team.jpg";

const Windows = () => {
  return (
    <div className="flex justify-center items-center min-h-[50vh]  dark:bg-black">
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
              className="text-4xl text-neutral-950 font-semibold mb-6 ml-10"
            >
              Windows Solutions
            </h2>
            <p data-aos="fade-left" className="text-lg text-black mb-10 ml-12">
              <ul>
                <li class="mb-2">
                  <strong>Our Expertise:</strong> We resolve all your Windows
                  and Microsoft-related challenges.
                </li>
                <li class="mb-2">
                  <strong>Common Issues:</strong> From software glitches to
                  system updates and security concerns.
                </li>

                <li class="mb-2">
                  <strong>Service Guarantee:</strong> We ensure your Microsoft
                  systems operate smoothly and securely.
                </li>
                <li class="mb-2">
                  <strong>Focus:</strong> Allowing you to focus on what matters
                  most.
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

export default Windows;
