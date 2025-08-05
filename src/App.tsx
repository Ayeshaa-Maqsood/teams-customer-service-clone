import TeamsHero from "./components/TeamsHero";
import MicrosoftTeamsFooter from "./components/MicrosoftTeamsFooter";
import StickyNavigation from "./components/StickyNavigation";
import OverviewSection from "./components/OverviewSection";
import AutonomousAgentsSection from "./components/AutonomousAgentsSection";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <TeamsHero />
      <StickyNavigation />
      <OverviewSection />
      <AutonomousAgentsSection />
      <MicrosoftTeamsFooter />
    </div>
  );
}

export default App;
