import { useState } from "react";
import { Play } from "lucide-react";
import customerStoriesBg from "../images/CustomerStories-BG.avif";
import caseStudyThumbnail from "../images/CaseStudy.avif";
import lenovoLogo from "../images/lenovo.avif";

const CustomerStories = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div
      className="py-20 px-4 relative"
      style={{
        backgroundImage: `url(${customerStoriesBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-16">
          <div>
            <p className="text-gray-600 uppercase tracking-wider text-sm font-medium mb-4">
              CUSTOMER STORIES
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Real customers, real results
            </h2>
          </div>
          <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors duration-200">
            Browse all customer stories
          </button>
        </div>

        {/* Case Study Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-dotted border-gray-300 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Content Section */}
            <div className="p-8 lg:p-12 flex flex-col justify-between">
              <div>
                {/* Lenovo Logo */}
                <div className="mb-8">
                  <img src={lenovoLogo} alt="Lenovo" className="h-12" />
                </div>

                {/* Case Study Text */}
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 leading-tight">
                  Lenovo reduces handling time by 20% with Copilot in Dynamics
                  365 Customer Service and Copilot in Dynamics 365 Contact
                  Center.
                </h3>

                {/* Products */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">
                    Products
                  </h4>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-blue-600 font-medium">
                        Dynamics 365 Contact Center
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">
                        Dynamics 365 Customer Service
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-medium w-fit transition-colors duration-200">
                Read the story
              </button>
            </div>

            {/* Video/Image Section */}
            <div className="relative bg-gray-100">
              {!isVideoPlaying ? (
                <div className="relative h-full min-h-[400px]">
                  <img
                    src={caseStudyThumbnail}
                    alt="Lenovo case study video thumbnail"
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={handlePlayVideo}
                    className="absolute inset-0 flex items-center justify-center group"
                  >
                    <div className="bg-blue-600 hover:bg-blue-700 rounded-full p-6 transition-colors duration-200 group-hover:scale-110 transform">
                      <Play className="w-8 h-8 text-white ml-1" fill="white" />
                    </div>
                  </button>
                </div>
              ) : (
                <div className="h-full min-h-[400px] flex items-center justify-center bg-black">
                  {/* Video player will go here - commented out for now */}
                  {/* 
                  <video 
                    controls 
                    autoPlay 
                    className="w-full h-full"
                    src="/path/to/your/video.mp4"
                  >
                    Your browser does not support the video tag.
                  </video> 
                  */}
                  <div className="text-white text-center">
                    <p className="text-xl mb-4">Video Player Placeholder</p>
                    <p className="text-gray-300">
                      Video will be loaded here when you uncomment the video
                      code
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerStories;
