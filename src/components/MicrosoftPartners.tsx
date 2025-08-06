import { ChevronRight } from "lucide-react";
import partnersBg from "../images/Partners-BG.avif";
import consultingImage from "../images/Partners-card1-Consulting-services.avif";
import partnerAppsImage from "../images/Partners-card2-Partner-apps.avif";
import fastTrackImage from "../images/Partners-card3-FastTrack-for-Dynamics.avif";

const MicrosoftPartners = () => {
  return (
    <div
      id="partners-section"
      className="py-20 px-4 relative"
      style={{
        backgroundImage: `url(${partnersBg})`,
        backgroundSize: "cover",
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-gray-600 uppercase tracking-wider text-sm font-medium mb-4">
            PARTNERS
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 max-w-2xl">
            Discover Microsoft partners
          </h2>
        </div>

        {/* Partner Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Consulting Services */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            <div className="aspect-video">
              <img
                src={consultingImage}
                alt="Consulting services"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Consulting services
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Access a wide range of architecture planning, implementation,
                and support services.
              </p>
              <button className="flex items-center text-blue-900 font-medium hover:text-blue-800 transition-colors">
                <ChevronRight className="w-5 h-5 mr-2" />
                Browse services
              </button>
            </div>
          </div>

          {/* Partner Apps */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            <div className="aspect-video">
              <img
                src={partnerAppsImage}
                alt="Partner apps"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Partner apps
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Extend and enhance your Dynamics 365 solution with hundreds of
                prebuilt apps.
              </p>
              <button className="flex items-center text-blue-900 font-medium hover:text-blue-800 transition-colors">
                <ChevronRight className="w-5 h-5 mr-2" />
                Browse apps
              </button>
            </div>
          </div>

          {/* FastTrack for Dynamics 365 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            <div className="aspect-video">
              <img
                src={fastTrackImage}
                alt="FastTrack for Dynamics 365"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                FastTrack for Dynamics 365
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Go live confidently with onboarding and training led by
                Microsoft experts and partners.
              </p>
              <button className="flex items-center text-blue-900 font-medium hover:text-blue-800 transition-colors">
                <ChevronRight className="w-5 h-5 mr-2" />
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicrosoftPartners;
