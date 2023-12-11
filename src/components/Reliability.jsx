import React from "react";
import Trusted from "../asset/mobile-landing-17.png";
import Information from "../asset/mobile-landing-18.png";
import Model from "../asset/mobile-landing-19.png";

function Reliability() {
  return (
    <div className="w-full flex justify-center px-4  py-20 mds:py-40 items-center">
      <div className="w-full max-w-[1250px]  text-start">
        <div className="w-full flex justify-center">
          <div className="flex gap-6 flex-col mb-8 w-full mds:justify-center mds:items-center max-w-[500px] mds:max-w-[900px]">
            <p className="text-[#222222] font-semibold text-4xl">
              Unquestionable accuracy & reliability
            </p>
            <p className="text-[#525252] font-normal text-base mds:text-center  mds:max-w-[500px]">
              We pride ourselves on the quality of our chatbot’s responses, and
              go the extra mile to ensure the accuracy & reliability of our
              answers.
            </p>
          </div>
        </div>
        <div className="flex gap-2 flex-col mds:flex-row">
          <div className=" border border-slate-300 rounded-2xl">
            <div className="bg-gray-245 border-b border-gray-230 w-full">
              <img
                src={Trusted}
                alt={Trusted}
                className="object-contain w-full h-[250px]"
              />
            </div>
            <div className="pt-2 px-3 pb-4">
              <p className="text-[#222222] font-medium text-base">
                Trusted by users all over the World
              </p>
              <p className="text-[#525252] text-xs">
                Afforai is used all around the World, saving thousands of people
                time and money with our speed & accuracy.
              </p>
            </div>
          </div>
          <div className=" border border-slate-300 rounded-2xl">
            <div className="bg-gray-245 border-b border-gray-230 w-full">
              <img
                src={Information}
                alt={Information}
                className=" object-contain w-full"
              />
            </div>
            <div className="pt-2 px-3 pb-4">
              <p className="text-[#222222] font-medium text-base">
                Information filtering
              </p>
              <p className="text-[#525252] text-xs">
                Afforai gives you the highest quality answers, and filters out
                any irrelevant information.
              </p>
            </div>
          </div>
          <div className=" border border-slate-300 rounded-2xl">
            <div className="bg-gray-245 border-b border-gray-230 w-full">
              <img src={Model} alt={Model} className="object-contain w-full" />
            </div>
            <div className="pt-2 px-3 pb-4">
              <p className="text-[#222222] font-medium text-base">
                Built in Comprehension Model
              </p>
              <p className="text-[#525252] text-xs">
                Our powerful comprehension model increases the power of our data
                retrieval.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reliability;
