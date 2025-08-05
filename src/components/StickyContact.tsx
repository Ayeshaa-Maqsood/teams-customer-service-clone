import { useState } from "react";
import { MessageCircle, Mail, Phone, X, ChevronRight } from "lucide-react";

const StickyContact = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleIconClick = () => {
    setIsExpanded(true);
  };

  const handleClose = () => {
    setIsExpanded(false);
  };

  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
      {!isExpanded ? (
        // Collapsed State - Smaller Vertical Icon Bar
        <div className="bg-blue-600 rounded-l-xl shadow-xl p-2 flex flex-col items-center space-y-4">
          <button
            onClick={handleIconClick}
            className="text-white hover:text-blue-200 transition-colors p-1"
          >
            <MessageCircle className="w-5 h-5" />
          </button>
          <button
            onClick={handleIconClick}
            className="text-white hover:text-blue-200 transition-colors p-1"
          >
            <Mail className="w-5 h-5" />
          </button>
          <button
            onClick={handleIconClick}
            className="text-white hover:text-blue-200 transition-colors p-1"
          >
            <Phone className="w-5 h-5" />
          </button>
        </div>
      ) : (
        // Expanded State - Smaller Contact Panel
        <div className="bg-blue-600 rounded-l-xl shadow-xl p-4 relative min-w-64 max-w-xs">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute -top-2 -left-10 bg-white text-blue-600 hover:text-blue-800 border border-blue-600 rounded px-2 py-1 text-xs font-medium transition-colors"
          >
            Close <X className="w-3 h-3 inline ml-1" />
          </button>

          {/* Contact Options */}
          <div className="space-y-3 text-white text-sm">
            {/* Chat with Sales */}
            <button className="w-full flex items-center justify-between p-2 hover:bg-blue-700 rounded transition-colors border border-dotted border-white">
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4" />
                <span>Chat with sales</span>
              </div>
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Contact Us */}
            <button className="w-full flex items-center justify-between p-2 hover:bg-blue-700 rounded transition-colors">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>Contact us</span>
              </div>
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Phone Number */}
            <div className="p-2">
              <div className="flex items-center space-x-2 mb-1">
                <Phone className="w-4 h-4" />
                <a
                  href="tel:8006427676"
                  className="underline hover:text-blue-200 transition-colors text-sm"
                >
                  (800) 642 7676
                </a>
              </div>
              <p className="text-xs text-blue-100 ml-6">
                Mon–Fri, 6 AM–3 PM PT
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StickyContact;
