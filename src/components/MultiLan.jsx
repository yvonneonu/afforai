import React from "react";
import Lng from "../asset/mobile-landing-13.png";
import Lng2 from "../asset/secondLand.png";

export default function MultiLan() {
  return (
    <div className="w-full flex-col flex  justify-center px-4 py-20 mds:py-40 items-center">
      <div className="w-full mds:h-[600px]  mds:max-w-[1230px] overflow-hidden flex-col mds:gap-[90px] flex mds:flex-row justify-between items-center">
        <div className="w-full mds:ml-[40px] max-w-[540px]  ">
          <div className="flex gap-6 flex-col text-start">
            <div className="border mb-6 border-[#8036FF] rounded-lg text-[#8036FF] w-[206px] text-xs py-[6px] px-4">
              Multiple Language Supported
            </div>
            <div className="mds:hidden flex text-[#222222] font-semibold text-3xl">
              Enjoy Afforai, regardless of where you're from
            </div>
            <div className="mds:flex hidden text-[#222222] font-semibold text-3xl">
              Regardless of where you are from, Afforai is for you
            </div>
            <p className="text-[#525252] font-normal text-base">
              We support more than 100 Languages, meaning you can seamlessly use
              our services regardless of where you are from. Our Cross Language
              Querying feature also allows flawless translation of documents.
            </p>
          </div>
        </div>
        <div className="w-full my-8 mds:justify-end mds:flex">
          <img src={Lng} alt={Lng} className="w-full mds:hidden flex" />
          <img
            src={Lng2}
            alt={Lng2}
            className="w-full object-contain mds:flex hidden"
          />
        </div>
      </div>
    </div>
  );
}
