import React from "react";
import profileImage from "../asset/0-5.webp";
import rating from "../asset/ph-review.webp";

function Users() {
  const testimonialList = [
    {
      id: 1,
      name: "The platform is free to use with a pay-as-you-go option, and there are no subscriptions required. The platform's Comprehension Model is highly recommended for tasks like document comprehension, reasoning, report writing, and research.",
      describe: "Henry Sipchen, Marketing Coordinator",
      image: profileImage,
      item: "View on Product Hunt",
    },
    {
      id: 2,
      name: "The platform is free to use with a pay-as-you-go option, and there are no subscriptions required. The platform's Comprehension Model is highly recommended for tasks like document comprehension, reasoning, report writing, and research.",
      describe: "Henry Sipchen, Marketing Coordinator",
      image: profileImage,
      item: "View on Product Hunt",
    },

    {
      id: 3,
      name: "The platform is free to use with a pay-as-you-go option, and there are no subscriptions required. The platform's Comprehension Model is highly recommended for tasks like document comprehension, reasoning, report writing, and research.",
      describe: "Henry Sipchen, Marketing Coordinator",
      image: profileImage,
      item: "View on Product Hunt",
    },
    {
      id: 4,
      name: "The platform is free to use with a pay-as-you-go option, and there are no subscriptions required. The platform's Comprehension Model is highly recommended for tasks like document comprehension, reasoning, report writing, and research.",
      describe: "Henry Sipchen, Marketing Coordinator",
      image: profileImage,
      item: "View on Product Hunt",
    },
    {
      id: 5,
      name: "The platform is free to use with a pay-as-you-go option, and there are no subscriptions required. The platform's Comprehension Model is highly recommended for tasks like document comprehension, reasoning, report writing, and research.",
      describe: "Henry Sipchen, Marketing Coordinator",
      image: profileImage,
      item: "View on Product Hunt",
    },
    {
      id: 6,
      name: "The platform is free to use with a pay-as-you-go option, and there are no subscriptions required. The platform's Comprehension Model is highly recommended for tasks like document comprehension, reasoning, report writing, and research.",
      describe: "Henry Sipchen, Marketing Coordinator",
      image: profileImage,
      item: "View on Product Hunt",
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center px-3 py-20 mds:py-40 mds:pb-[260px] ">
      <div className=" justify-center flex text-center flex-col items-center gap-2">
        <img src={rating} alt="rating" className="w-[170px]" />
        <div className="font-semibold text-3xl text-[#222222]">
          See what our users say
        </div>
        <div className="text-[#525252] font-normal text-base">
          Loved by thousands, all around the World
        </div>
      </div>
      <div className="footer w-full  flex justify-start p-4 mds:p-8 flex-col">
        {" "}
        <div className="relative name overflow-x-hidden ">
          <div className="grid gap-5 grid-flow-col auto-cols-[414px] md:auto-cols-[600px] overflow-x-auto overscroll-auto snap-mandatory snap-x snap-start no-scrollbar w-[6280px]  md:w-[7820px] slide-track">
            {testimonialList.map((testData) => (
              <div
                className="py-6 slide border border-slate-300  h-[250px] p-8"
                key={testData.id}
              >
                <div className="flex test-card flex-col ">
                  <div className="h-[144px] border-b border-slate-300">
                    {testData.name}
                  </div>
                  <div className="flex justify-between mt-[20px]">
                    <div className="">
                      <div className="flex items-center flex-row gap-3">
                        {" "}
                        <img
                          src={testData.image}
                          alt=""
                          className="w-[32px] h-[32px] rounded-full"
                        ></img>
                        <span>{testData.describe}</span>
                      </div>
                    </div>
                    <div className="border border-[#FF3A02] rounded-lg text-[#FF3A02]  text-xs py-[6px] px-4">
                      {testData.item}
                    </div>{" "}
                  </div>
                </div>
              </div>
            ))}

            {/* second set */}

            {testimonialList.map((testData) => (
              <div
                className="py-6 slide border border-slate-300 h-[250px] p-8"
                key={testData.id}
              >
                <div className="flex test-card flex-col ">
                  <div className="h-[144px] border-b border-slate-300">
                    {testData.name}
                  </div>
                  <div className="flex justify-between mt-[20px]">
                    <div className="">
                      <div className="flex items-center flex-row gap-3">
                        <img
                          src={testData.image}
                          alt=""
                          className="w-[32px] h-[32px] rounded-full"
                        ></img>

                        <span>{testData.describe}</span>
                      </div>
                    </div>
                    <div className="border border-[#FF3A02] rounded-lg text-[#FF3A02]  text-xs py-[6px] px-4">
                      {testData.item}
                    </div>{" "}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative name overflow-x-hidden mt-[20px]">
          <div className="grid gap-5 grid-flow-col auto-cols-[414px] md:auto-cols-[600px] overflow-x-auto overscroll-auto snap-mandatory snap-x snap-start no-scrollbar w-[6280px]  md:w-[7820px] slide-track-reverse">
            {testimonialList.map((testData) => (
              <div
                className="py-6 slide border border-slate-300  h-[250px] p-8"
                key={testData.id}
              >
                <div className="flex test-card flex-col ">
                  <div className="h-[144px] border-b border-slate-300">
                    {testData.name}
                  </div>
                  <div className="flex justify-between mt-[20px]">
                    <div className="">
                      <div className="flex items-center flex-row gap-3">
                        {" "}
                        <img
                          src={testData.image}
                          alt=""
                          className="w-[32px] h-[32px] rounded-full"
                        ></img>
                        <span>{testData.describe}</span>
                      </div>
                    </div>
                    <div className="border border-[#FF3A02] rounded-lg text-[#FF3A02]  text-xs py-[6px] px-4">
                      {testData.item}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* second set */}

            {testimonialList.map((testData) => (
              <div
                className="py-6 slide border border-slate-300 h-[250px] p-8"
                key={testData.id}
              >
                <div className="flex test-card flex-col ">
                  <div className="h-[144px] border-b border-slate-300">
                    {testData.name}
                  </div>
                  <div className="flex justify-between mt-[20px]">
                    <div className="">
                      <div className="flex items-center flex-row gap-3">
                        <img
                          src={testData.image}
                          alt=""
                          className="w-[32px] h-[32px] rounded-full"
                        ></img>

                        <span>{testData.describe}</span>
                      </div>
                    </div>
                    <div className="border border-[#FF3A02] rounded-lg text-[#FF3A02]  text-xs py-[6px] px-4">
                      {testData.item}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
