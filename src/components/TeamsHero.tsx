import { useState } from "react";
import { X, ChevronDown, Menu } from "lucide-react";
import microsoftLogo from "../images/microsoft logo.png";

// TODO: Import background gradient/pattern image
import backgroundPattern from "../images/Hero -BG.avif";

// TODO: Import customer service demo video
// import customerServiceVideo from "../videos/customer-service-demo.mp4";

const TeamsHero = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* TODO: Background gradient/pattern will be applied here */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800"
        style={{
          backgroundImage: `url(${backgroundPattern})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Background pattern/image will be positioned here */}
      </div>

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
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[60vh] py-8">
            {/* Left Content */}
            <div className="space-y-8 order-2 lg:order-1">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-light text-white leading-tight">
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

            {/* Right Content - Customer Service Interface with Video */}
            <div className="relative order-1 lg:order-2 w-full max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
              {/* TODO: Customer service demo video will be embedded here */}
              {/* The video should show the Dynamics 365 Customer Service interface in action */}

              {/* Video Container with Blurry Border */}
              <div className="relative">
                {/* Blurry border effect */}
                <div className="absolute -inset-4 bg-white bg-opacity-20 rounded-lg blur-sm"></div>
                <div className="absolute -inset-2 bg-white bg-opacity-30 rounded-lg blur-sm"></div>

                {/* Main video container */}
                <div className="relative bg-white rounded-lg shadow-2xl overflow-hidden">
                  {/* Video element placeholder - replace with actual video */}
                  <div className="aspect-video bg-gray-100 relative">
                    {/* TODO: Replace this div with actual video element */}
                    {/* <video 
                         src={customerServiceVideo} 
                         autoPlay 
                         muted 
                         loop 
                         className="w-full h-full object-cover"
                       /> */}

                    {/* Placeholder for Customer Service Interface */}
                    <div className="w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                      <div className="text-center space-y-4 p-8">
                        <div className="w-16 h-16 bg-purple-600 rounded-lg mx-auto flex items-center justify-center">
                          <div className="w-8 h-8 bg-white rounded-sm"></div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-lg font-semibold text-gray-800">
                            Customer Service Dashboard
                          </div>
                          <div className="text-sm text-gray-600">
                            AI-powered case management
                          </div>
                        </div>
                        {/* Play button overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg">
                            <div className="w-0 h-0 border-l-6 border-l-purple-600 border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating UI Elements */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-xl animate-pulse">
                🎯
              </div>
              <div className="absolute top-8 -right-6 w-10 h-10 bg-green-400 rounded-full flex items-center justify-center text-lg animate-bounce">
                ✓
              </div>
              <div className="absolute -bottom-6 left-8 w-14 h-14 bg-blue-400 rounded-full flex items-center justify-center text-white text-xl font-bold animate-pulse delay-200">
                AI
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TeamsHero;
