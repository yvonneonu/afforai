import React from "react";
import Product from "../asset/mobile-landing-5.png";
import Laptop from "../asset/laptop-landing-5.png";

function ProductSection() {
  return (
    <div className="w-full justify-center flex px-4 items-center py-20 mds:py-40">
      <div className="flex flex-col w-full justify-center items-start mds:items-center mds:max-w-[1230px]">
        <div className="w-full flex justify-center items-center">
          <div className="w-full justify-center items-center max-w-[400px] mds:max-w-[556px] flex gap-6 flex-col mb-10">
            <div className="border border-[#8036FF] rounded-lg text-[#8036FF] w-[157px]  text-xs py-[6px] px-4">
              10x your productivity
            </div>
            <p className="text-[#222222] text-center font-semibold text-4xl">
              Save yourself from stress & streamline your workflow
            </p>
            <p className="text-[#525252] font-normal text-center text-base">
              The average worker spends 9 hours per week looking through &
              gathering information from thick stacks of documents. With
              Afforai, you can save yourself 8 hours per week (plus a lot of
              headaches).
            </p>
          </div>
        </div>

        <img
          src={Product}
          alt={Product}
          className="w-full mds:hidden flex mt-10"
        />
        <img
          src={Laptop}
          alt={Laptop}
          className="w-full hidden mds:flex mt-20"
        />
      </div>
    </div>
  );
}

export default ProductSection;
