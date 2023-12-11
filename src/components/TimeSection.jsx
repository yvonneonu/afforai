import React from "react";
import MobileImage from "../asset/mobile-landing-16.png";

function TimeSection() {
  return (
    <div className="w-full  flex justify-center mdl:my-[160px] items-center mt-20 mb-28 px-4 mx-auto flex-col ">
      <div className="w-full relative bg-white max-w-[1600px] my-20 ">
        <div className=" pb-[204px]  relative  justify-center items-center z-[2] flex gap-6 flex-col">
          <p className="text-[#222222] font-semibold text-4xl">
            Start saving time today!
          </p>
          <p className="text-[#525252] font-normal text-base ">
            Join an ever-growing community, and get with Afforai started free of
            charge!
          </p>
          <button
            style={{
              background:
                "linear-gradient(135deg, #6004ff, #7f35ff 23.95%, #370097 60.11%, #8d4aff)",
              border: "1px solid hsla(0,0%,100%,.2)",
            }}
            className="text-white text-base rounded-xl p-2 px-7 w-full max-w-[200px] cursor-pointer hover:bg-black"
          >
            Get Started for Free
          </button>
        </div>

        <div className="overflow-hidden mdl:h-[300px] absolute z-[1] bottom-0 w-full max-w-[1600px] pr-4 ">
          <img
            className="w-full mx-auto rounded-[28px] h-full object-containr max-w-[1400px]"
            src={MobileImage}
            alt={MobileImage}
          />
        </div>
      </div>
    </div>
  );
}

export default TimeSection;
