import React from "react";
import Afforia from "../asset/Afforia.png";

function Guaranteed() {
  return (
    <div className="w-full justify-center flex px-4  py-20 mds:py-[70px]">
      <div className=" w-full max-w-[1200px] gap-[100px] items-center flex flex-col mds:flex-row  mds:mx-[40px] ">
        <div className="bg-white w-full flex flex-col justify-center items-center gap-6 ">
          <div className="w-full max-w-[508px] mds:max-w-[650px] flex justify-center items-start gap-6 flex-col ">
            <div className="border border-[#8036FF] rounded-lg text-[#8036FF] w-[145px] text-xs py-[6px] px-4">
              My promise to you
            </div>
            <p className="text-[#222222] font-semibold text-3xl text-start mds:w-[600px] mds:text-4xl">
              100% money back guaranteed if you are not satisfied
            </p>
            <p className="text-[#525252]  text-start font-normal text-base ">
              We crafted Afforai with total belief in our ability to make a
              chatbot that is not only powerful and reliable, but able to
              maximise your satisfaction as a user. This is why we have
              implemented a money back guarantee if you find yourself not
              satisfied with the capabilities of Afforai.
            </p>
          </div>
        </div>
        <div className="w-full mds:hidden flex">
          <img
            src={Afforia}
            alt={Afforia}
            className="mt-10 mds:mt-0 object-contain"
          />
        </div>
        <div className="w-full mds:flex justify-end hidden ">
          <img
            src={Afforia}
            alt={Afforia}
            className="mt-10 mds:mt-0 object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Guaranteed;
