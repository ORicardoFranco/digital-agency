import React from "react";
import BIImage from "../../assets/website/website.jpg";

const Website = () => {
  return (
    <div className="flex justify-center items-center min-h-[50vh] bg-gray-100 dark:bg-black">
      <div className="py-12 sm:grid sm:place-items-center w-full">
        <div className="md:w-8/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="md:w-3/5">
            <h2
              data-aos="fade-left"
              className="text-4xl text-neutral-950 font-semibold mb-4 mr-10"
            >
              Website
            </h2>
            <p data-aos="fade-left" className="text-sm text-black mb-8 ml-10">
              <ul>
                <li>
                  <strong>Our Expertise:</strong> We specialize in creating
                  innovative website solutions that enhance your online
                  presence.
                </li>
                <li>
                  <strong>Web Design:</strong> Designing responsive and visually
                  appealing websites tailored to meet your business needs.
                </li>
                <li>
                  <strong>SEO Optimization:</strong> Implementing SEO strategies
                  to improve your site’s visibility and search engine rankings.
                </li>
                <li>
                  <strong>Content Management:</strong> Providing robust content
                  management solutions to streamline content creation and
                  maintenance.
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
export default Website;
