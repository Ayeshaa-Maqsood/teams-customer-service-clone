import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

interface TabsRef {
  [key: string]: HTMLButtonElement | null;
}

const StickyNavigation = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [underlineStyle, setUnderlineStyle] = useState({
    left: "0px",
    width: "0px",
  });
  const tabsRef = useRef<TabsRef>({});

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "agents", label: "Agents" },
    { id: "demo", label: "Product demo" },
    { id: "pricing", label: "Pricing" },
    { id: "partners", label: "Partners" },
    { id: "stories", label: "Customer stories" },
    { id: "steps", label: "Next steps" },
  ];

  // Update underline position when active tab changes
  useEffect(() => {
    const updateUnderline = () => {
      const activeButton = tabsRef.current[activeTab];
      if (activeButton) {
        const container = activeButton.parentElement;
        if (container) {
          const containerRect = container.getBoundingClientRect();
          const buttonRect = activeButton.getBoundingClientRect();

          const left = buttonRect.left - containerRect.left;
          const width = buttonRect.width;

          setUnderlineStyle({
            left: `${left}px`,
            width: `${width}px`,
          });
        }
      }
    };

    // Small delay to ensure DOM is ready
    setTimeout(updateUnderline, 50);

    window.addEventListener("resize", updateUnderline);
    return () => window.removeEventListener("resize", updateUnderline);
  }, [activeTab]);

  // Auto-detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "overview", element: "overview-section" },
        { id: "agents", element: "agents-section" },
        { id: "demo", element: "product-demo-section" },
        { id: "pricing", element: "pricing-section" },
        { id: "partners", element: "partners-section" },
        { id: "stories", element: "customer-stories-section" },
        { id: "steps", element: "next-steps-section" },
      ];

      const navHeight = 100;
      const scrollPosition = window.scrollY + navHeight;

      // Find the current section
      let currentSection = sections[0].id; // default to first section

      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i].element);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = sections[i].id;
            break;
          }
        }
      }

      if (currentSection !== activeTab) {
        setActiveTab(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeTab]);

  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);

    // Map tab IDs to actual section IDs in your components
    const sectionMap: { [key: string]: string } = {
      overview: "overview-section",
      agents: "agents-section",
      demo: "product-demo-section",
      pricing: "pricing-section",
      partners: "partners-section",
      stories: "customer-stories-section",
      steps: "next-steps-section",
    };

    const targetSection = document.getElementById(sectionMap[sectionId]);
    if (targetSection) {
      // Get the height of the sticky navigation
      const navHeight = 80;
      const targetPosition = targetSection.offsetTop - navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="sticky top-0 bg-white shadow-sm z-50 border-b"
      data-sticky-nav="true"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center relative">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                ref={(el) => {
                  tabsRef.current[tab.id] = el;
                }}
                onClick={() => scrollToSection(tab.id)}
                className={`text-sm font-medium pb-2 px-4 relative transition-colors ${
                  activeTab === tab.id
                    ? "text-purple-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab.label}
              </button>
            ))}

            {/* Animated underline */}
            <div
              className="absolute bottom-0 h-0.5 bg-purple-600 transition-all duration-300 ease-in-out"
              style={underlineStyle}
            />
          </div>

          {/* Mobile Navigation Dropdown */}
          <div className="lg:hidden relative flex-1">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center justify-between w-full text-left px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none"
            >
              <span>{tabs.find((tab) => tab.id === activeTab)?.label}</span>
              <ChevronDown
                size={16}
                className={`transform transition-transform ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
              <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-md shadow-lg mt-1 z-10">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      scrollToSection(tab.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-3 text-sm hover:bg-gray-50 ${
                      activeTab === tab.id
                        ? "text-purple-600 font-medium bg-purple-50"
                        : "text-gray-700"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Side Button */}
          <button
            className="text-white px-6 py-2 rounded-md font-medium transition-colors ml-4 hover:opacity-90"
            style={{ backgroundColor: "#2a446f" }}
          >
            Try for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyNavigation;
