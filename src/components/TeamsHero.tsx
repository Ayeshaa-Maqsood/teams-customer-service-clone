import { useState } from "react";
import { X, ChevronDown, Menu } from "lucide-react";
import microsoftLogo from "../images/microsoft logo.png";
import backgroundPattern from "../images/Hero -BG.avif";
import heroThumbnail from "../images/hero-img-thumbnail.avif";
import videoPlayback from "../images/videoplayback.mp4";

const TeamsHero = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background gradient/pattern */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800"
        style={{
          backgroundImage: `url(${backgroundPattern})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Video Modal Overlay */}
      {isVideoPlaying && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
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

      {/* Header */}
      <header className="bg-white shadow-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left side - Logo and Navigation */}
            <div className="flex items-center space-x-8">
              {/* Microsoft Logo */}
              <div className="flex items-center space-x-4">
                <img src={microsoftLogo} alt="Microsoft Logo" className="h-6" />
                {/* Bold vertical line separator */}
                <div className="w-0.5 h-6 bg-gray-800"></div>
              </div>

              {/* Navigation */}
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-6">
                <div className="flex items-center space-x-1">
                  <span className="text-gray-700 font-bold text-lg">
                    Dynamics 365
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-gray-600">Explore</span>
                  <ChevronDown size={16} className="text-gray-400" />
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-gray-600">Products</span>
                  <ChevronDown size={16} className="text-gray-400" />
                </div>
                <span className="text-gray-600">Pricing</span>
                <div className="flex items-center space-x-1">
                  <span className="text-gray-600">Resources</span>
                  <ChevronDown size={16} className="text-gray-400" />
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-gray-600">Partners</span>
                  <ChevronDown size={16} className="text-gray-400" />
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-gray-600">Support</span>
                  <ChevronDown size={16} className="text-gray-400" />
                </div>
              </nav>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Menu size={24} className="text-gray-700" />
              </button>
            </div>

            {/* Right side - Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="px-4 py-2 text-gray-700 hover:text-gray-900">
                Contact us
              </button>
              <button className="px-4 py-2 bg-black text-white rounded-sm hover:bg-gray-800">
                Try for free
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-sm text-gray-700 hover:bg-gray-50">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b shadow-lg relative z-10">
          <div className="px-4 py-2 space-y-1">
            <div className="py-2 text-gray-700 font-bold text-lg border-b">
              Dynamics 365
            </div>
            <div className="py-2 text-gray-600">Explore</div>
            <div className="py-2 text-gray-600">Products</div>
            <div className="py-2 text-gray-600">Pricing</div>
            <div className="py-2 text-gray-600">Resources</div>
            <div className="py-2 text-gray-600">Partners</div>
            <div className="py-2 text-gray-600">Support</div>
            <div className="pt-4 pb-2 space-y-2 border-t">
              <button className="w-full px-4 py-2 text-gray-700 hover:text-gray-900">
                Contact us
              </button>
              <button className="w-full px-4 py-2 bg-black text-white rounded-sm hover:bg-gray-800">
                Try for free
              </button>
              <button className="w-full px-4 py-2 border border-gray-300 rounded-sm text-gray-700 hover:bg-gray-50">
                Sign in
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <main className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh] py-16">
            {/* Left Content */}
            <div className="space-y-8 order-2 lg:order-1">
              <div className="space-y-6">
                <h1 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Dynamics 365 Customer Service
                </h1>

                <p className="text-xl text-white leading-relaxed font-light">
                  Empower service representatives to resolve issues quickly
                  using generative AI and automation.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-white text-purple-700 px-8 py-3 rounded-md font-medium text-lg hover:bg-gray-100 transition-colors">
                  Try for free
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-md font-medium text-lg hover:bg-white hover:bg-opacity-10 transition-colors">
                  Take a guided tour
                </button>
              </div>
            </div>

            {/* Right Content - Thumbnail with Video */}
            <div className="relative order-1 lg:order-2 w-full max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
              <div className="relative">
                {/* Improved Blurry border effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-white/30 to-white/10 rounded-xl blur-md"></div>
                <div className="absolute -inset-0.5 bg-white/20 rounded-lg blur-sm"></div>

                {/* Main container */}
                <div className="relative bg-white rounded-lg shadow-2xl overflow-hidden">
                  <div className="aspect-video relative">
                    {/* Thumbnail with Play Button */}
                    <div
                      className="relative w-full h-full cursor-pointer"
                      onClick={handlePlayVideo}
                    >
                      <img
                        src={heroThumbnail}
                        alt="Video Thumbnail"
                        className="w-full h-full object-cover"
                      />
                      {/* Play button overlay - made more visible */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transition-transform">
                          <div className="w-0 h-0 border-l-[16px] border-l-purple-600 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TeamsHero;
