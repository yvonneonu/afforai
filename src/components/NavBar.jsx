import React from "react";
import Logo from "../asset/logo-new-violet.webp";
import { ArrowDown2, ArrowRight2, HambergerMenu, Add } from "iconsax-react";

function NavBar() {
  const [icon, setIcon] = React.useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 md:p-0 p-4  z-50 ">
      <div
        className={`mds:max-w-[1300px] md:max-w-full  max-w-[680px]  w-full  mx-auto  py-4 px-6 bg-[#FAFAFA80] backdrop-blur-md ${
          icon ? "" : "border border-solid"
        }  rounded-[16px] `}
      >
        <div className="flex justify-between gap-[40px] items-center ">
          <div className="flex flex-row gap-2 items-center">
            <img alt={Logo} src={Logo} className="w-6 h-6 object-contain" />
            <p className="text-center text-[#111111] font-medium text-lg">
              Afforai
            </p>
          </div>
          <div className="flex gap-6 flex-row items-center md:hidden ">
            <div className="text-[#111111] font-medium text-sm cursor-pointer">
              Affiliate
            </div>
            <div className="text-[#111111] font-medium text-sm cursor-pointer">
              Pricing
            </div>
            <div className="text-[#111111] font-medium text-sm cursor-pointer">
              Testimonials
            </div>
            <div className="text-[#111111] font-medium text-sm cursor-pointer">
              Help Center
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className="mds:w-full   ">
              <div className="flex flex-row gap-4">
                <button className="text-[#525252] text-base  border border-slate-400  rounded-xl p-2 mds:px-7 px-2  mds:max-w-[140px] cursor-pointer ">
                  Log in
                </button>
                <button
                  style={{
                    background:
                      "linear-gradient(135deg, #6004ff, #7f35ff 23.95%, #370097 60.11%, #8d4aff)",
                    border: "1px solid hsla(0,0%,100%,.2)",
                  }}
                  className="text-white  text-base rounded-xl p-2 mds:px-7 px-2  mds:max-w-[140px] cursor-pointer  "
                >
                  Try for free
                </button>
              </div>
            </div>
            <div
              className={`${
                icon ? "border border-[#8036FF] rounded-[10px]" : ""
              } mds:hidden flex ml-[10px]`}
              onClick={() => setIcon(!icon)}
            >
              <HambergerMenu size="32" color="#292D32" />
            </div>
          </div>
        </div>
      </div>

      {icon && (
        <div className="mds:max-w-[1300px] md:max-w-full  max-w-[680px]  w-full  mx-auto  py-4 px-6 bg-[#FAFAFA80] backdrop-blur-md  rounded-[16px] ">
          <div className="flex gap-6 flex-col items-start ">
            <div className="text-[#111111] font-medium text-sm cursor-pointer">
              Affiliate
            </div>
            <div className="text-[#111111] font-medium text-sm cursor-pointer">
              Pricing
            </div>
            <div className="text-[#111111] font-medium text-sm cursor-pointer">
              Testimonials
            </div>
            <div className="text-[#111111] font-medium text-sm cursor-pointer">
              Help Center
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
