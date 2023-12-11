import React from "react";
import lockImg from "../asset/mobile-landing-9.png";
import docImg from "../asset/mobile-landing-10.png";
import dataCit from "../asset/mobile-landing-8.png";
import fileImage from "../asset/mobile-landing-7.png";
import LanImg from "../asset/mobile-landing-6.png";

function TechnicalSection() {
  return (
    <div className="w-full justify-center flex px-4 items-center py-20 mds:py-40">
      <div className="flex flex-col w-full mds:max-w-[1230px]">
        <div className="w-full flex justify-center items-center">
          <div className="w-full justify-center items-center max-w-[400px] flex gap-6 flex-col mb-10">
            <div className="border border-[#8036FF] rounded-lg text-[#8036FF] w-[128px] text-xs py-[6px] px-4">
              Why choose us?
            </div>
            <p className="text-[#222222] font-semibold text-4xl">
              Built for the user
            </p>
            <p className="text-[#525252] font-normal text-center text-base">
              Afforai is where exceptional customer focus meets exceptional
              technology.
            </p>
          </div>
        </div>

        <div className="flex gap-2 flex-col ">
          <div className=" flex flex-col mds:flex-row gap-2">
            <div className=" border border-slate-300 rounded-2xl">
              <div className="bg-gray-245 border-b border-gray-230 w-full">
                <img
                  src={LanImg}
                  alt={LanImg}
                  className="object-contain w-full"
                />
              </div>
              <div className="pt-2 px-3 pb-4">
                <div className="gap-2 flex flex-row">
                  <p className="text-[#222222] font-medium text-base">
                    Cross Language Querying
                  </p>
                  <p className="text-[#6004ff] bg-[#EFE6FF] rounded-[20px] text-sm font-medium h-[18px] py-1 px-2 text-center justify-center items-center flex">
                    New
                  </p>
                </div>

                <p className="text-[#525252] text-xs">
                  Afforai is able to translate your documents to more than 100
                  languages, meaning wherever you’re from, you can be assured we
                  can help.
                </p>
              </div>
            </div>

            <div className=" border border-slate-300 rounded-2xl">
              <div className="bg-gray-245 border-b border-gray-230 w-full">
                <img
                  src={fileImage}
                  alt={fileImage}
                  className="object-contain w-full"
                />
              </div>
              <div className="pt-2 px-3 pb-4">
                <p className="text-[#222222] font-medium text-base">
                  Multiple file types supported
                </p>
                <p className="text-[#525252] text-xs">
                  Afforai can extract data from a multitude of formats,
                  including; PDF, URL, DOCX, PPTX & XLSX, as well as your own
                  text & links from Websites. The possibilities are limitless!
                </p>
              </div>
            </div>
          </div>

          <div className=" flex flex-col mds:flex-row gap-2">
            <div className="flex flex-col gap-2">
              <div className=" border border-slate-300 rounded-2xl">
                <div className="bg-gray-245 border-b border-gray-230 w-full">
                  <img
                    src={dataCit}
                    alt={dataCit}
                    className="object-contain w-full h-[250px]"
                  />
                </div>
                <div className="pt-2 px-3 pb-4">
                  <div className="gap-2 flex flex-row">
                    <p className="text-[#222222] font-medium text-base">
                      Valuable Data Citation
                    </p>
                    <p className="text-[#6004ff] bg-[#EFE6FF] rounded-[20px] text-sm font-medium h-[18px] py-1 px-2 text-center justify-center items-center flex">
                      New
                    </p>
                  </div>
                  <p className="text-[#525252] text-xs">
                    Afforai is able to show exactly where your data has been
                    extracted from & highlight it for you, so you never loose
                    your time validating information again.
                  </p>
                </div>
              </div>
              <div className=" border border-slate-300 rounded-2xl ">
                <div className="bg-gray-245 border-b border-gray-230 w-full ">
                  <img
                    src={docImg}
                    alt={docImg}
                    className=" object-contain w-full"
                  />
                </div>
                <div className="pt-2 px-3 pb-4 ">
                  <p className="text-[#222222] font-medium text-base">
                    Built in Document Viewer
                  </p>
                  <p className="text-[#525252] text-xs">
                    Never Switch tabs again. Afforai’s document viewer means
                    that you can have your uploaded files right next to your
                    chatbot, giving you the ability to search the file, and
                    refer to it for data citations.
                  </p>
                </div>
              </div>
            </div>
            <div className=" border border-slate-300 rounded-2xl mds:flex flex-col justify-end">
              <div className="bg-gray-245 border-b border-gray-230 w-full">
                <img
                  src={lockImg}
                  alt={lockImg}
                  className="object-contain w-full mds:h-[550px] "
                />
              </div>
              <div className="pt-2 px-3 pb-4">
                <p className="text-[#222222] font-medium text-base">
                  Unbreakable Security
                </p>
                <p className="text-[#525252] text-xs">
                  Afforai uses Azure Server & Azure OpenAI API. In other words,
                  your data is more than safe with us.
                  <a href="https://afforai.com" className="text-[#0D6EFD]">
                    {" "}
                    Learn more.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnicalSection;
