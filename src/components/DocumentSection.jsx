import React from "react";
import DocumentImg from "../asset/mobile-landing-4.png";
import circle from "../asset/check-circle.svg";

function DocumentSection() {
  return (
    <div className="w-full justify-center flex px-4 items-center py-20 mds:py-40">
      <div className="flex flex-col mds:flex-row w-full justify-center mds:gap-10 text-center center items-start mds:items-center mds:max-w-[1230px]">
        <div className="w-full flex justify-center items-center mds:w-[50%]">
          <div className="w-full justify-center items-center max-w-[540px] mds:max-w-[556px] flex  flex-col mb-10">
            <p className="text-[#222222]  font-semibold text-3xl mb-3 text-start">
              Say goodbye to long, tiresome documents{" "}
            </p>
            <p className="text-[#525252] font-normal text-start text-base mb-4 ">
              Afforai seamlessly translates documents, files, spreadsheets &
              websites, filtering out what you don’t need & answering your
              specific questions within seconds.
            </p>
            <div className="flex gap-3 flex-col w-full">
              <div className="flex flex-row">
                <div className="mr-3">
                  {" "}
                  <img src={circle} alt={circle} />
                </div>
                <span className="text-[#03CC3B] text-base font-medium">
                  A whip smart research assistant
                </span>
              </div>
              <div className="flex flex-row">
                <div className="mr-3">
                  <img src={circle} alt={circle} />
                </div>
                <span className="text-[#03CC3B] text-base font-medium">
                  We speak every language
                </span>
              </div>
              <div className="flex flex-row">
                <div className="mr-3">
                  {" "}
                  <img src={circle} alt={circle} />
                </div>
                <span className="text-[#03CC3B] text-base font-medium">
                  Reliable data citation for answers
                </span>
              </div>
              <div className="flex flex-row">
                <div className="mr-3">
                  {" "}
                  <img src={circle} alt={circle} />
                </div>
                <span className="text-[#03CC3B] text-base font-medium">
                  Fort-Knox level data security
                </span>
              </div>
            </div>
          </div>
        </div>

        <img
          src={DocumentImg}
          alt={DocumentImg}
          className="w-full flex mt-10 mds:w-[50%]"
        />
      </div>
    </div>
  );
}

export default DocumentSection;
