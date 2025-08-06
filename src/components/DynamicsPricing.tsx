import pricingBg from "../images/Pricing-BG.avif";

const DynamicsPricing = () => {
  return (
    <div
      id="pricing-section"
      className="py-20 px-4 relative"
      style={{
        backgroundImage: `url(${pricingBg})`,
        backgroundSize: "cover",
        backgroundPosition: "left center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-600 uppercase tracking-wider text-sm font-medium mb-4">
            PRICING
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Dynamics 365 Customer Service pricing
          </h2>
          <button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 text-lg font-medium rounded-lg transition-colors duration-200">
            See pricing details
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Professional */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Dynamics 365 Customer Service Professional
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Get core customer service capabilities to get started with basic
              resources for self-service, case management, and knowledge
              management.
            </p>
            <div className="mb-8">
              <div className="text-4xl font-bold text-gray-900 mb-2">
                $50.00
              </div>
              <div className="text-gray-600">user/month, paid yearly</div>
            </div>
            <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium w-full transition-colors duration-200">
              Contact us
            </button>
          </div>

          {/* Enterprise */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Dynamics 365 Customer Service Enterprise
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Get advanced customer service capabilities for a personalized
              experience, improved service representative productivity, and
              optimized operations.
            </p>
            <div className="mb-8">
              <div className="text-4xl font-bold text-gray-900 mb-2">
                $105.00
              </div>
              <div className="text-gray-600">user/month, paid yearly</div>
            </div>
            <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium w-full transition-colors duration-200">
              Contact us
            </button>
          </div>

          {/* Premium */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Dynamics 365 Customer Service Premium
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Transform customer engagement with an integrated contact center
              and CRM service solution—all powered by generative AI.
            </p>
            <div className="mb-8">
              <div className="text-4xl font-bold text-gray-900 mb-2">
                $195.00
              </div>
              <div className="text-gray-600">user/month, paid yearly</div>
            </div>
            <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium w-full transition-colors duration-200">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicsPricing;
