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
      className="min-h-screen relative overflow-hidden bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-blue-900 bg-opacity-30 z-10"></div>

      {/* Video Modal/Overlay */}
      {isVideoPlaying && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={() => setIsVideoPlaying(false)}
        >
          <div
            className="relative w-full max-w-4xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 z-10"
            >
              <X size={32} />
            </button>
            {/* Video Player */}
            <video
              src={videoPlayback}
              autoPlay
              controls
              className="w-full aspect-video rounded-lg"
              onEnded={() => setIsVideoPlaying(false)}
            />
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side - Video Thumbnail */}
          <div className="flex-1 relative">
            <div
              className="relative rounded-xl overflow-hidden shadow-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-3xl"
              onClick={handlePlayVideo}
              style={{
                transform: "perspective(1000px) rotateY(-5deg)",
              }}
            >
              {/* Laptop Frame */}
              <div className="bg-gray-800 p-2 rounded-xl relative">
                {/* Screen */}
                <div
                  className="bg-white rounded-lg overflow-hidden relative aspect-video bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${thumbnailImage})`,
                    aspectRatio: "16/10",
                  }}
                >
                  {/* Mock interface elements on the right */}
                  <div className="absolute right-4 top-4 bottom-4 w-3/5 bg-white rounded-md p-4 shadow-sm">
                    {/* Mock interface content */}
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-200 rounded-sm"></div>
                      <div className="h-2 bg-gray-200 rounded-sm w-4/5"></div>
                      <div className="h-2 bg-gray-200 rounded-sm w-3/5"></div>
                      <div className="h-4 bg-red-100 rounded-sm mt-4"></div>
                      <div className="h-2 bg-gray-200 rounded-sm"></div>
                      <div className="h-2 bg-gray-200 rounded-sm w-9/10"></div>
                    </div>
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70 rounded-full p-4 transition-all duration-300 hover:bg-opacity-80 hover:scale-110">
                    <Play className="text-white" size={24} fill="white" />
                  </div>
                </div>

                {/* Laptop bottom */}
                <div className="h-3 bg-gray-700 mt-1 rounded-b-xl"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 text-white">
            <div className="space-y-6">
              <p className="text-sm font-semibold text-blue-200 uppercase tracking-wider">
                Agents (Preview)
              </p>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
                Transform service with autonomous agents
              </h2>

              <p className="text-base lg:text-lg text-blue-100 leading-relaxed max-w-lg">
                Discover how AI service agents for Dynamics 365 can learn to
                address emerging issues, uncover new knowledge, and automate
                manual processes to boost business efficiency and reduce costs.
                Now available in public preview.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-white text-blue-800 px-8 py-3 rounded-md font-semibold text-lg hover:bg-blue-50 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
                  Read the blog
                </button>

                <button className="border-2 border-blue-300 text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-white hover:bg-opacity-10 hover:border-white hover:-translate-y-0.5 transition-all duration-300">
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
