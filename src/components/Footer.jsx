import React from "react";
import Logo from "../asset/logo-new-violet.webp";
import Badge from "../asset/top-post-badge.svg";
import Sputnikatx from "../asset/sputnikatx.png";

function Footer() {
  return (
    <div className="w-full flex justify-center px-3 pb-16 ">
      <div className="footer w-full max-w-[1250px] flex justify-start p-4 mds:p-8 border rounded-[16px] border-slate-300 flex-col">
        <div className="flex flex-row justify-between">
          <div className="flex gap-6 xsm:w-[350px] flex-col mb-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-2 items-center">
                <img alt={Logo} src={Logo} className="w-6 h-6 object-contain" />
                <p className="text-center text-[#111111] font-medium text-lg">
                  Afforai
                </p>
              </div>

              <p className="text-xs text-start text-[#525252]">
                Afforai is your research tool in to damn near anything. Helping
                you summarise, translate, and withdraw data from documents.
              </p>
              <p className="text-xs text-start text-[#525252]">
                Copyright © 2023 Afforai Inc. All rights reserved.
              </p>
            </div>

            <img
              src={Badge}
              alt={Badge}
              className="w-[195px] cursor-pointer object-contain"
            />
            <div className="flex flex-col gap-2">
              <p className="text-[#111111] text-base font-medium text-start">
                Backed by
              </p>
              <img
                src={Sputnikatx}
                alt={Sputnikatx}
                className="w-[137px] h-[48px] object-contain"
              />
            </div>
          </div>

          <div className="mb-6 md:w-[160px] xsm:mb-0  gap-4 flex-col text-start md:flex hidden">
            <p className="text-[#111111] text-base font-medium">Company</p>

            <p className="text-[#525252] text-xs  cursor-pointer">Our Story</p>
            <p className="text-[#525252] text-xs  cursor-pointer">Affiliate</p>
            <p className="text-[#525252] text-xs  cursor-pointer">Securiity</p>
            <p className="text-[#525252] text-xs  cursor-pointer">Roadmap</p>

            <p className="text-[#525252] text-xs  cursor-pointer">Contact Us</p>
          </div>

          <div className="mb-6 xsm:mb-0 md:w-[160px] mds:flex w-full gap-4  flex-col text-start hidden">
            <p className="text-[#111111] text-base font-medium">Resources</p>

            <p className="text-[#525252] text-xs  cursor-pointer">
              Help Center
            </p>
            <p className="text-[#525252] text-xs  cursor-pointer">API Docs</p>
            <p className="text-[#525252] text-xs  cursor-pointer">
              Terms of Use
            </p>
            <p className="text-[#525252] text-xs  cursor-pointer">
              Privacy Policy
            </p>
          </div>
          <div className="mb-6 w-full md:w-[160px] xsm:mb-0 hidden  gap-4 mdl:flex flex-col text-start">
            <p className="text-[#111111] text-base font-medium">Follow Us</p>

            <p className="text-[#525252] text-xs  cursor-pointer">
              Facebook Group
            </p>
            <p className="text-[#525252] text-xs  cursor-pointer">LinkedIn</p>
            <p className="text-[#525252] text-xs  cursor-pointer">Twitter</p>
            <p className="text-[#525252] text-xs cursor-pointer">Medium Blog</p>
          </div>

          <div className="mb-6 xsm:mb-0 md:w-[160px] w-full gap-4 hidden flex-col text-start lgs:flex">
            <p className="text-[#111111] text-base font-medium">Language</p>

            <p className="text-[#6004ff] text-xs  cursor-pointer">English</p>
            <p className="text-[#525252] text-xs  cursor-pointer">Vietnamese</p>
          </div>
        </div>

        <div className="flex flex-col lgs:hidden ">
          <div className="flex-col xsm:flex-row xsm:mb-6 flex justify-between  md:hidden ">
            <div className="mb-6  w-full xsm:mb-0  gap-4 flex flex-col text-start">
              <p className="text-[#111111] text-base font-medium">Company</p>

              <p className="text-[#525252] text-xs  cursor-pointer">
                Our Story
              </p>
              <p className="text-[#525252] text-xs  cursor-pointer">
                Affiliate
              </p>
              <p className="text-[#525252] text-xs  cursor-pointer">
                Securiity
              </p>
              <p className="text-[#525252] text-xs  cursor-pointer">Roadmap</p>

              <p className="text-[#525252] text-xs cursor-pointer">
                Contact Us
              </p>
            </div>

            <div className="mb-6 xsm:mb-0  w-full gap-4 flex flex-col text-start">
              <p className="text-[#111111] text-base font-medium">Resources</p>

              <p className="text-[#525252] text-xs  cursor-pointer">
                Help Center
              </p>
              <p className="text-[#525252] text-xs  cursor-pointer">API Docs</p>
              <p className="text-[#525252] text-xs  cursor-pointer">
                Terms of Use
              </p>
              <p className="text-[#525252] text-xs  cursor-pointer">
                Privacy Policy
              </p>
            </div>
          </div>
          <div className="flex-col xsm:flex-row xsm:mb-6 flex justify-between">
            <div className="mb-6 xsm:mb-0 mds:hidden w-full gap-4 md:flex flex-col text-start hidden">
              <p className="text-[#111111] text-base font-medium">Resources</p>

              <p className="text-[#525252] text-xs  cursor-pointer">
                Help Center
              </p>
              <p className="text-[#525252] text-xs  cursor-pointer">API Docs</p>
              <p className="text-[#525252] text-xs  cursor-pointer">
                Terms of Use
              </p>
              <p className="text-[#525252] text-xs  cursor-pointer">
                Privacy Policy
              </p>
            </div>
            <div className="mb-6 w-full xsm:mb-0  gap-4 flex flex-col text-start mdl:hidden">
              <p className="text-[#111111] text-base font-medium">Follow Us</p>

              <p className="text-[#525252] text-xs  cursor-pointer">
                Facebook Group
              </p>
              <p className="text-[#525252] text-xs  cursor-pointer">LinkedIn</p>
              <p className="text-[#525252] text-xs cursor-pointer">Twitter</p>
              <p className="text-[#525252] text-xs cursor-pointer">
                Medium Blog
              </p>
            </div>
            <div className="mb-6 xsm:mb-0 w-full gap-4 flex flex-col text-start ">
              <p className="text-[#111111] text-base font-medium">Language</p>

              <p className="text-[#6004ff] text-xs cursor-pointer">English</p>
              <p className="text-[#525252] text-xs cursor-pointer">
                Vietnamese
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
