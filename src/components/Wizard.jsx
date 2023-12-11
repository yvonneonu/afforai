import React from "react";
import Tech from "../asset/mobile-landing-14.png";

function Wizard() {
  return (
    <div className="w-full flex-col flex justify-center px-4 py-20 mds:py-40 items-center">
      <div className="flex-col gap-[110px] mds:flex-row-reverse mds:max-w-[1230px] items-center flex w-full">
        <div className="w-full mds:w-[50%] flex  flex-col justify-start items-start">
          <div className="w-full max:w-[550px]">
            <div className="border mb-6 border-[#8036FF] rounded-lg text-[#8036FF] w-[180px] text-xs py-[6px] px-4">
              Get more out of your files
            </div>
          </div>

          <div className="text-start w-full mds:w-[482px] text-[#222222] font-semibold text-3xl mds:text-4xl mb-6">
            File Wizard - a game-changing new feature
          </div>
          <div className="text-start text-[#525252] font-normal mds:w-[500px] text-base mb-6">
            Convert your files with less effort than ever. Afforai’s File Wizard
            feature allows you to transform your files in limitless different
            ways. We can translate, summarize, or explain your upload in no
            time.
          </div>
        </div>

        <img
          alt={Tech}
          src={Tech}
          className="w-full mds:w-[40%] md:w-[60%]  mb-8 mds:mb-0"
        />
      </div>
    </div>
  );
}

export default Wizard;
