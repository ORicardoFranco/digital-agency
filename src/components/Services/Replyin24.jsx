import React from "react";

const Replyin24 = () => {
  return (
    <div className="relative flex min-h-3/4 flex-col justify-center bg-gray-100  overflow-hidden  py-6 sm:py-12">
      <div className="relative  mx-auto max-w-4xl rounded-3xl p-10 text-center bg-gray-100border-t border-b border-black">
        <h2 className="text-4xl font-bold leading-tight text-CGreen">
          Expect a Response Within 24 Hours
        </h2>
        <p className="mt-5 text-xl leading-8 text-black">
          Your IT department is just one click away.
        </p>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button className="primary-btn">
            <span>Chat With Us</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Replyin24;
