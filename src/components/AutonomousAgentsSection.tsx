import { useState } from "react";
import { Play, X } from "lucide-react";

import backgroundImage from "../images/agents-bg-Banner.avif";
import thumbnailImage from "../images/combined-agents_tbmnl.avif";
import videoPlayback from "../images/videoplayback.mp4";

const AutonomousAgentsSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div
      id="agents-section"
      className="min-h-screen relative overflow-hidden bg-cover bg-center bg-no-repeat flex items-center py-12 md:py-16 lg:py-20"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-blue-900 bg-opacity-40 z-10"></div>

      {/* Video Modal/Overlay */}
      {isVideoPlaying && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsVideoPlaying(false)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute -top-8 md:-top-12 right-0 text-white hover:text-gray-300 z-10 transition-colors"
              aria-label="Close video"
            >
              <X size={24} className="md:w-8 md:h-8" />
            </button>
            {/* Video Player */}
            <video
              src={videoPlayback}
              autoPlay
              controls
              className="w-full aspect-video rounded-lg shadow-2xl"
              onEnded={() => setIsVideoPlaying(false)}
            />
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16 xl:gap-20">
          {/* Left Side - Video Thumbnail */}
          <div className="w-full lg:flex-1 order-2 lg:order-1">
            <div
              className="relative rounded-xl overflow-hidden shadow-2xl cursor-pointer transform transition-all duration-300 hover:scale-[1.02] lg:hover:scale-105 hover:shadow-3xl max-w-2xl mx-auto lg:mx-0"
              onClick={handlePlayVideo}
              style={{
                transform: "perspective(1000px) rotateY(0deg)",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Laptop Frame */}
              <div className="bg-gray-800 p-1.5 md:p-2 rounded-xl relative">
                {/* Screen */}
                <div
                  className="bg-white rounded-lg overflow-hidden relative bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${thumbnailImage})`,
                    aspectRatio: "16/10",
                  }}
                >
                  {/* Mock interface elements on the right - hidden on mobile for clarity */}
                  <div className="absolute right-2 md:right-4 top-2 md:top-4 bottom-2 md:bottom-4 w-3/5 bg-white bg-opacity-95 rounded-md p-2 md:p-4 shadow-sm hidden sm:block">
                    {/* Mock interface content */}
                    <div className="space-y-1.5 md:space-y-2">
                      <div className="h-1.5 md:h-2 bg-gray-200 rounded-sm"></div>
                      <div className="h-1.5 md:h-2 bg-gray-200 rounded-sm w-4/5"></div>
                      <div className="h-1.5 md:h-2 bg-gray-200 rounded-sm w-3/5"></div>
                      <div className="h-3 md:h-4 bg-red-100 rounded-sm mt-2 md:mt-4"></div>
                      <div className="h-1.5 md:h-2 bg-gray-200 rounded-sm"></div>
                      <div className="h-1.5 md:h-2 bg-gray-200 rounded-sm w-5/6"></div>
                    </div>
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70 rounded-full p-3 md:p-4 transition-all duration-300 hover:bg-opacity-80 hover:scale-110">
                    <Play
                      className="text-white w-5 h-5 md:w-6 md:h-6"
                      fill="white"
                    />
                  </div>

                  {/* Mobile play indicator */}
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded md:hidden">
                    Tap to play
                  </div>
                </div>

                {/* Laptop bottom */}
                <div className="h-2 md:h-3 bg-gray-700 mt-0.5 md:mt-1 rounded-b-xl"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:flex-1 text-white text-center lg:text-left order-1 lg:order-2">
            <div className="space-y-4 md:space-y-6">
              <p className="text-xs md:text-sm font-semibold text-blue-200 uppercase tracking-wider">
                Agents (Preview)
              </p>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-tight text-white max-w-2xl mx-auto lg:mx-0">
                Transform service with autonomous agents
              </h2>

              <p className="text-sm sm:text-base lg:text-lg text-blue-100 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Discover how AI service agents for Dynamics 365 can learn to
                address emerging issues, uncover new knowledge, and automate
                manual processes to boost business efficiency and reduce costs.
                Now available in public preview.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4 justify-center lg:justify-start">
                <button className="bg-white text-blue-800 px-6 md:px-8 py-2.5 md:py-3 rounded-md font-semibold text-base md:text-lg hover:bg-blue-50 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 w-full sm:w-auto">
                  Read the blog
                </button>

                <button className="border-2 border-blue-300 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-md font-semibold text-base md:text-lg hover:bg-white hover:bg-opacity-10 hover:border-white hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto">
                  Learn how to get started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutonomousAgentsSection;
