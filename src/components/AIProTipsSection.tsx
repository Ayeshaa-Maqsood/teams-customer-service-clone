import { useState } from "react";
import { Play, X } from "lucide-react";
import backgroundImage from "../images/ProductDemo -BG.avif";
import videoThumbnail from "../images/InteractiveDemo-thumbnail.avif";
import videoPlayback from "../images/videoplayback.mp4";

const AIProTipsSection = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handlePlayVideo = () => setIsVideoModalOpen(true);
  const handleCloseVideo = () => setIsVideoModalOpen(false);

  return (
    <div
      id="product-demo-section"
      className="min-h-screen py-16 px-6 flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <div className="space-y-12">
          {/* Header Section */}
          <div className="space-y-4">
            <p className="text-sm text-gray-600 font-medium tracking-wider uppercase">
              PRODUCT DEMO
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 max-w-4xl mx-auto">
              AI Pro Tips series
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Meet Copilot, your everyday AI companion that works wherever you
              do. Service representatives now have an AI assistant to help them
              ramp up, solve complex issues faster, and free up more time to
              build relationships with customers.
            </p>
          </div>

          {/* Video Thumbnail with Play Button */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
            <img
              src={videoThumbnail}
              alt="AI Demo Thumbnail"
              className="w-full cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={handlePlayVideo}
            />
            <button
              onClick={handlePlayVideo}
              className="absolute inset-0 w-full h-full bg-black bg-opacity-30 hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center"
            >
              <div className="w-16 md:w-20 h-16 md:h-20 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-110">
                <Play
                  className="text-gray-800 ml-1"
                  size={20}
                  fill="currentColor"
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center overflow-y-auto"
          onClick={handleCloseVideo}
        >
          <div
            className="relative w-full max-w-4xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={handleCloseVideo}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 z-10"
            >
              <X size={32} />
            </button>
            {/* Video Player */}
            <div className="rounded-2xl overflow-hidden flex items-center justify-center">
              <video
                src={videoPlayback}
                autoPlay
                controls
                className="w-full h-auto max-h-[90vh] aspect-video"
                onEnded={handleCloseVideo}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIProTipsSection;
