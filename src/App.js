import "./App.css";
import Footer from "./components/Footer";
import FaqSection from "./components/FaqSection";

import TimeSection from "./components/TimeSection";
import Guaranteed from "./components/Guaranteed";
import Reliability from "./components/Reliability";
import DownloadSection from "./components/DownloadSection";
import Wizard from "./components/Wizard";
import MultiLan from "./components/MultiLan";
import ModeSection from "./components/ModeSection";
import ChatbotSectiom from "./components/ChatbotSectiom";
import TechnicalSection from "./components/TechnicalSection";
import ProductSection from "./components/ProductSection";
import DocumentSection from "./components/DocumentSection";
import profimg from "./asset/laptop-landing-2.png";
import appsumo from "./asset/appsumo.png";
import landing from "./asset/laptop-landing-1.png";
import MobileImage from "./asset/mobile-landing-16.png";
import "./styles.css";
import Users from "./components/Users";
import NavBar from "./components/NavBar";

function App() {
  const testimonialList = [
    { id: 1, name: "Compare Documents" },
    { id: 2, name: "Search For Answers" },
    { id: 3, name: "Ask in Any Language" },
    { id: 4, name: "Summarize Findings" },
  ];
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <NavBar />
      <div className="w-full  flex-col flex justify-center  px-4 py-32 mds:py-40 items-center ">
        <div className=" flex flex-col gap-8  w-full mds:max-w-[1230px] md:justify-normal md:items-center">
          <div className="flex items-center md:w-[310px] gap-[6px] p-[6px] bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-300 border-2 border-gray-700 rounded-[12px] shadow-md backdrop-blur-md text-gray-700 text-sm font-semibold">
            <img src={appsumo} alt="AppSumo" width="26" height="20" />
            <span className="text-[#333333]">Now on AppSumo</span>
            <a
              href="https://appsumo.8odi.net/3eR3xn"
              target="_blank"
              className="flex items-center justify-center gap-[2px] py-[6px] pr-[2px] pl-[6px]  border border-gray-700 rounded-[6px] text-inherit bg-gradient-to-r from-transparent to-opacity-50"
              rel="noreferrer"
            >
              <span>Get Lifetime Deal</span>
              <div className="transform -rotate-90">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.3338 5.99981C5.50446 5.99981 5.67515 6.06512 5.80515 6.19512L8.00046 8.39044L10.1958 6.19512C10.4564 5.93446 10.8778 5.93446 11.1385 6.19512C11.3992 6.45579 11.3992 6.87717 11.1385 7.13783L8.47182 9.8045C8.21115 10.0652 7.78978 10.0652 7.52911 9.8045L4.86244 7.13783C4.60178 6.87717 4.60178 6.45579 4.86244 6.19512C4.99244 6.06512 5.16313 5.99981 5.3338 5.99981Z"
                    fill="#333"
                  ></path>
                </svg>
              </div>
            </a>
          </div>

          <span className="w-[343px] flex md:hidden text-[#222222] text-start text-[40px] font-semibold">
            Your second brain for maximizing productivity
          </span>
          <span className="text-[#525252] flex md:hidden text-base font-normal">
            Afforai is an AI chatbot that searches, summarizes, and translates
            info from multiple sources to produce trustworthy research. Feed
            lengthy research documents to stacks of dry compliance requirements
            and extract the key findings you need.
          </span>
          <div className="flex md:hidden">
            <div className="relative name overflow-x-hidden ">
              <div className="grid gap-5 grid-flow-col auto-cols-[260px] md:auto-cols-[600px] overflow-x-auto overscroll-auto snap-mandatory snap-x snap-start no-scrollbar w-[6280px]  md:w-[7820px] slide-track">
                {testimonialList.map((testData) => (
                  <div
                    className=" slide border border-slate-300 rounded-[4px]"
                    key={testData.id}
                  >
                    <div className="flex test-card flex-col ">
                      <div className="flex flex-row items-center gap-2 ml-2 rounded-[4px]">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="check">
                            <path
                              id="check_2"
                              d="M7.49999 14.7915C7.49916 14.7915 7.49832 14.7915 7.49749 14.7915C7.33082 14.7906 7.17166 14.724 7.05416 14.6048L3.72083 11.2198C3.47833 10.974 3.48166 10.5782 3.72749 10.3357C3.97333 10.094 4.36999 10.0965 4.61166 10.3423L7.5025 13.279L15.3908 5.39064C15.635 5.14648 16.0308 5.14648 16.275 5.39064C16.5192 5.63481 16.5192 6.03067 16.275 6.27484L7.94166 14.6082C7.82499 14.7257 7.66583 14.7915 7.49999 14.7915Z"
                              fill="#525252"
                            ></path>
                          </g>
                        </svg>

                        {testData.name}
                      </div>
                    </div>
                  </div>
                ))}

                {/* second set */}

                {testimonialList.map((testData) => (
                  <div
                    className=" slide border border-slate-300 rounded-[4px]"
                    key={testData.id}
                  >
                    <div className="flex test-card flex-col ">
                      <div className="flex flex-row items-center gap-2 ml-2 rounded-[4px]">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="check">
                            <path
                              id="check_2"
                              d="M7.49999 14.7915C7.49916 14.7915 7.49832 14.7915 7.49749 14.7915C7.33082 14.7906 7.17166 14.724 7.05416 14.6048L3.72083 11.2198C3.47833 10.974 3.48166 10.5782 3.72749 10.3357C3.97333 10.094 4.36999 10.0965 4.61166 10.3423L7.5025 13.279L15.3908 5.39064C15.635 5.14648 16.0308 5.14648 16.275 5.39064C16.5192 5.63481 16.5192 6.03067 16.275 6.27484L7.94166 14.6082C7.82499 14.7257 7.66583 14.7915 7.49999 14.7915Z"
                              fill="#525252"
                            ></path>
                          </g>
                        </svg>

                        {testData.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full relative bg-white max-w-[1600px]  md:flex justify-center hidden">
            <div className=" pb-[304px]  relative  justify-center items-center  flex gap-6 flex-col">
              <p className="text-[#222222] w-[659px] text-center font-semibold text-5xl">
                Your second brain for maximizing productivity
              </p>
              <p className="text-[#525252] font-normal w-[671px] text-center text-base ">
                Afforai is an AI chatbot that searches, summarizes, and
                translates info from multiple sources to produce trustworthy
                research. Feed lengthy research documents to stacks of dry
                compliance requirements and extract the key findings you need.
              </p>

              <div className="md:flex hidden gap-2">
                {testimonialList.map((testData) => (
                  <div
                    className=" slide border border-slate-300 w-full rounded-[4px] pr-2"
                    key={testData.id}
                  >
                    <div className="flex test-card flex-col w-full">
                      <div className="flex flex-row items-center gap-2 text-xs ml-2 max-w-[600px] w-full rounded-[4px] p-1">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="check">
                            <path
                              id="check_2"
                              d="M7.49999 14.7915C7.49916 14.7915 7.49832 14.7915 7.49749 14.7915C7.33082 14.7906 7.17166 14.724 7.05416 14.6048L3.72083 11.2198C3.47833 10.974 3.48166 10.5782 3.72749 10.3357C3.97333 10.094 4.36999 10.0965 4.61166 10.3423L7.5025 13.279L15.3908 5.39064C15.635 5.14648 16.0308 5.14648 16.275 5.39064C16.5192 5.63481 16.5192 6.03067 16.275 6.27484L7.94166 14.6082C7.82499 14.7257 7.66583 14.7915 7.49999 14.7915Z"
                              fill="#525252"
                            ></path>
                          </g>
                        </svg>

                        {testData.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-row gap-4">
                <button
                  style={{
                    background:
                      "linear-gradient(135deg, #6004ff, #7f35ff 23.95%, #370097 60.11%, #8d4aff)",
                    border: "1px solid hsla(0,0%,100%,.2)",
                  }}
                  className="text-white text-base rounded-xl p-2 px-7 max-w-[140px] cursor-pointer hover:bg-black"
                >
                  Try for free
                </button>
                <button className="text-[#525252] text-base bg-white  border border-slate-300  rounded-xl p-2 px-7  max-w-[140px]cursor-pointer ">
                  View pricing
                </button>
              </div>
            </div>

            <div className="overflow-hidden mdl:h-[300px] absolute bottom-0 w-full max-w-[1600px] pr-4 ">
              <img
                className="w-full mx-auto rounded-[28px] h-full object-containr max-w-[1400px]"
                src={MobileImage}
                alt={MobileImage}
              />
            </div>
          </div>

          <img
            src={landing}
            alt={landing}
            className="md:flex hidden w-[90%] mt-[-200px] z-0"
          />

          <div className="flex flex-col gap-4 w-full md:hidden">
            <button
              style={{
                background:
                  "linear-gradient(135deg, #6004ff, #7f35ff 23.95%, #370097 60.11%, #8d4aff)",
                border: "1px solid hsla(0,0%,100%,.2)",
              }}
              className="text-white text-base rounded-xl p-2 px-7  cursor-pointer hover:bg-black"
            >
              Get Started
            </button>
            <button className="text-[#525252] text-base  border border-slate-300  rounded-xl p-2 px-7   cursor-pointer ">
              View pricing
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="flex gap-6  mb-[64px] flex-col justify-center items-center">
          <div className="text-[#525252] text-base">
            Loved by <span className="text-[#8036FF]">20,000+ </span>
            users around the world
          </div>
          <img src={profimg} alt={profimg} className="w-[336px] h-[48px]" />
        </div>
      </div>

      {/* Document Section */}
      <DocumentSection />

      {/* Product Section */}
      <ProductSection />

      {/* Technical Section */}
      <TechnicalSection />

      {/* Chatbot Sectiom */}
      <ChatbotSectiom />

      {/* >Modes section */}
      <ModeSection />

      {/* multu Language section */}
      <MultiLan />

      {/* wizard section */}
      <Wizard />

      {/* download section */}
      <DownloadSection />

      {/* reliability section */}
      <Reliability />

      {/* floating section not done */}

      <Users />

      {/* Guaranteed section*/}
      <Guaranteed />

      {/* >time section */}
      <TimeSection />

      {/* FAQs section */}
      <div className=" py-20 mds:py-40">
        <div className="flex justify-center flex-col items-center">
          <p className="mb-3 text-[#222222] font-semibold text-4xl"> FAQs</p>
          <div className="px-4">
            <p className="font-normal text-[#525252] text-base">
              For more information, check out our{" "}
              <a href="https://" className="text-[#6004FF] underline">
                Help Center
              </a>
              .
            </p>
          </div>
        </div>
        <FaqSection />
      </div>

      {/* >Footer section */}
      <Footer />
    </div>
  );
}

export default App;
