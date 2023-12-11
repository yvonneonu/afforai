import React from "react";
import chatbotImg from "../asset/chatbot.png";
import chatbotimg2 from "../asset/laptop-landing-11.png";
function ChatbotSectiom() {
  return (
    <div className="w-full z-0 flex-col flex justify-center  px-4 py-20 mds:py-40 items-center ">
      <div className="flex flex-col mds:flex-row w-full max-w-[1230px] gap-[40px] justify-between items-center">
        <div className="gap-6 flex flex-col w-full max-w-[508px] mds:max-w-[554px]">
          <div className="w-full">
            <div className="border border-[#8036FF] rounded-lg text-[#8036FF] w-[115px] text-xs py-[6px] px-4">
              Most versatile
            </div>
          </div>
          <div className="text-start flex text-[#222222] font-semibold text-3xl mds:text-4xl">
            Create multiple chatbots for different purposes
          </div>

          <p className="text-[#525252] font-normal text-base text-start">
            Legal documents? Summarising a book? Extracting data from a website?
            We allow you to create multiple chatbots at one time, so you can use
            Afforai for a whole range of purposes.
          </p>
          <div className="w-full hidden mds:flex">
            <div className="flex flex-row gap-4">
              <button
                style={{
                  background:
                    "linear-gradient(135deg, #6004ff, #7f35ff 23.95%, #370097 60.11%, #8d4aff)",
                  border: "1px solid hsla(0,0%,100%,.2)",
                }}
                className="text-white text-base rounded-xl p-2 px-7 max-w-[140px] cursor-pointer hover:bg-black"
              >
                Get Started
              </button>
              <button className="text-[#525252] text-base  border border-slate-300  rounded-xl p-2 px-7  max-w-[140px]cursor-pointer ">
                View pricing
              </button>
            </div>
          </div>
        </div>
        <div className="mt-5  md:hidden flex">
          <img
            src={chatbotImg}
            alt={chatbotImg}
            className="w-full object-contain"
          />
        </div>

        <img
          src={chatbotimg2}
          alt={chatbotimg2}
          className="w-[45%]  hidden mds:flex object-contain"
        />
      </div>
    </div>
  );
}

export default ChatbotSectiom;
