import { MessageCircle, User, Phone } from "lucide-react";
import nextStepsBg from "../images/NextSteps -BG.avif";
import ctaImage from "../images/Next-steps-CTA.avif";

const NextSteps = () => {
  return (
    <div
      id="next-steps-section"
      className="py-20 px-4 relative"
      style={{
        backgroundImage: `url(${nextStepsBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Try Dynamics Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-16 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Content Section */}
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <div className="mb-6">
                <p className="text-blue-600 text-sm font-medium mb-4">
                  Next steps
                </p>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  Try Dynamics 365 Customer Service
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Provide exceptional, personalized, seamless service to earn
                  customers for life.
                </p>
                <button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 text-lg font-medium rounded-lg transition-colors duration-200 w-fit">
                  Try for free
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className="bg-gray-50">
              <img
                src={ctaImage}
                alt="Customer service representative"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Chat with Expert */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Chat with a Dynamics 365 expert
            </h3>
            <p className="text-gray-600 mb-6">Available M-F 6 AM to 3 PM PT.</p>
            <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 mx-auto transition-colors duration-200">
              <MessageCircle className="w-4 h-4" />
              Chat now
            </button>
          </div>

          {/* Request Callback */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Request a call back
            </h3>
            <p className="text-gray-600 mb-6">
              Have a Dynamics 365 expert contact you.
            </p>
            <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 mx-auto transition-colors duration-200">
              <User className="w-4 h-4" />
              Send request
            </button>
          </div>

          {/* Call Expert */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Call a Dynamics 365 expert
            </h3>
            <p className="text-gray-600 mb-6">Available M-F 6 AM to 3 PM PT.</p>
            <a
              href="tel:8006427676"
              className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2 transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              Call (800) 642 7676
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextSteps;
