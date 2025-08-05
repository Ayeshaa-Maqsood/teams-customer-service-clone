import TeamsHero from "./components/TeamsHero";
import MicrosoftTeamsFooter from "./components/MicrosoftTeamsFooter";
import StickyNavigation from "./components/StickyNavigation";
import OverviewSection from "./components/OverviewSection";
import AutonomousAgentsSection from "./components/AutonomousAgentsSection";
import AIProTipsSection from "./components/AIProTipsSection";
import ForresterHighlight from "./components/ForresterHighlight";
import DynamicsPricing from "./components/DynamicsPricing";
import MicrosoftPartners from "./components/MicrosoftPartners";
import CustomerStories from "./components/CustomerStories";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <TeamsHero />
      <StickyNavigation />
      <OverviewSection />
      <AutonomousAgentsSection />
      <AIProTipsSection />
      <ForresterHighlight />
      <DynamicsPricing />
      <MicrosoftPartners />
      <CustomerStories />
      <MicrosoftTeamsFooter />
    </div>
  );
}

export default App;
