import React from "react";
import fastforward from "../asset/fast-forward.svg";
import poweroff from "../asset/power-off.svg";
import searchplus from "../asset/search-plus.svg";
import Img2 from "../asset/mobile-landing-12.png";
function ModeSection() {
  return (
    <div className="w-full justify-center flex px-4 items-center py-20 mds:py-40">
      <div className="flex flex-col gap-6 mds:flex-row w-full max-w-[540px] mds:max-w-[1230px] justify-between  items-center text-start">
        <div className="flex mds:hidden flex-col gap-6  text-start">
          <div className="border border-[#8036FF] rounded-lg text-[#8036FF] w-[185px] text-xs py-[6px] px-4">
            Different Modes Available
          </div>
          <p className="font-semibold text-3xl text-[#222222]">
            Customize your assistant with a range of different modes
          </p>
          <p className="text-[#525252] font-normal text-base">
            Further power your questions with additional modes. Afforai allows
            you to switch between three different modes, each which have unique
            ways of utilising our AI tools to answer your question(s).
          </p>
        </div>
        <img
          src={Img2}
          alt={Img2}
          className="w-full mds:max-w-[40%] object-contain h-full "
        />

        <div className="flex flex-col w-full mds:max-w-[40%]">
          <div className=" mds:flex hidden flex-col gap-6 text-start w-[540px] mds:w-full ">
            <div className="border border-[#8036FF] rounded-lg text-[#8036FF] w-[185px] text-xs py-[6px] px-4">
              Different Modes Available
            </div>
            <p className="font-semibold text-3xl text-[#222222]">
              Customize your assistant with a range of different modes
            </p>
            <p className="text-[#525252] font-normal text-base">
              Further power your questions with additional modes. Afforai allows
              you to switch between three different modes, each which have
              unique ways of utilising our AI tools to answer your question(s).
            </p>
          </div>

          <div className="flex flex-col gap-4 mds:mt-[24px]">
            <div className="flex flex-row gap-3 items-start ">
              <img src={fastforward} alt={fastforward} />
              <div className="flex flex-col  gap-2">
                <div className="flex flex-row gap-3">
                  <p className="text-[#3A0299] text-base font-medium">
                    Fast Mode (default)
                  </p>

                  <p className="text-[#6004ff] bg-[#EFE6FF] rounded-[20px] text-sm font-medium h-[18px] py-1 px-2 text-center justify-center items-center flex">
                    1 credit
                  </p>
                </div>
                <p className="text-[#260266] text-sm text-start">
                  Quickly ask a question and receive an answer from the AI. This
                  mode is most suited for applications that require only a small
                  part of the documents to be scanned (ex. FAQ Chatbot, Search).
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-3 items-start ">
              <img src={poweroff} alt={poweroff} />
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-3">
                  <p className="text-[#3A0299] text-base font-medium">
                    Powerful Mode
                  </p>

                  <p className="text-[#6004ff] bg-[#EFE6FF] rounded-[20px] text-sm font-medium h-[18px] py-1 px-2 text-center justify-center items-center flex">
                    4 credits
                  </p>
                </div>
                <p className="text-[#260266] text-sm text-start">
                  Get answers of extra high quality from the AI. This mode is
                  most suited for applications that require inferences as well
                  as the full documents to be scanned (ex. Textual Data
                  Analysis, Search with Inference, Report Generation).
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-3 items-start ">
              <img src={searchplus} alt={searchplus} />
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-3">
                  <p className="text-[#3A0299] text-base font-medium">
                    Google Mode
                  </p>

                  <p className="text-[#6004ff] bg-[#EFE6FF] rounded-[20px] text-sm font-medium h-[18px] py-1 px-2 text-center justify-center items-center flex">
                    5 credits
                  </p>
                </div>
                <p className="text-[#260266] text-sm text-start">
                  Supplement your answers with the top 3 results from Google
                  Search. This adds extra reliability to back up our already
                  incredibly accurate answers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModeSection;
