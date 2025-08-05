import React from "react";

const ForresterHighlight = () => {
  return (
    <div className="py-16 px-4">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Content Section */}
          <div className="p-12 lg:p-16 flex flex-col justify-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Microsoft is named a Leader in The Forrester Wave™: CRM, Q1 2025
              </h2>

              <p className="text-xl text-gray-700 leading-relaxed">
                Discover why Microsoft is recognized for a unified platform, AI
                capabilities, and an extensive partner network.
                <sup className="text-blue-600">1</sup>
              </p>

              <button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 text-lg font-medium rounded-lg transition-colors duration-200 inline-block w-fit">
                Read the blog
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="bg-gray-50 flex items-center justify-center p-8">
            <img
              src="/src/images/forrester-product-demo.avif"
              alt="Forrester Wave Report"
              className="w-full h-auto max-w-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForresterHighlight;
