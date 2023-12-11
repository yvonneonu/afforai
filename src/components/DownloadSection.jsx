import React from "react";
import Download from "../asset/download.png";

function DownloadSection() {
  return (
    <div className="w-full flex-col flex justify-center  px-4 py-20 mds:py-10 mds:pt-[190px] items-center ">
      <div>
        <div className="w-full mb-10 gap-6 text-start mds:text-center mds:items-center flex flex-col max-w-[440px] mds:max-w-[640px]">
          <div className="border border-[#8036FF] rounded-lg text-[#8036FF] w-[240px] text-xs py-[6px] px-4">
            Seamless Integrations - Coming Soon
          </div>
          <div className="text-[#222222] font-semibold text-4xl">
            Upload Files directly from Google Drive, One Drive & Dropbox
          </div>
          <div className="text-[#525252] font-normal text-base">
            Afforai allows you to upload files directly from Google Drive, One
            Drive & Dropbox, meaning your experience will be smooth sailing
            regardless of your preferred
          </div>
        </div>
      </div>
      <img
        src={Download}
        alt={Download}
        className="max-w-[640px] w-[80%] object-contain"
      />
    </div>
  );
}

export default DownloadSection;
