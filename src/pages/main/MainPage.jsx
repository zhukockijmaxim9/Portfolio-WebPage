import LightPillar from "../../shared/graphics/LightPillar/LightPillar";
import { automationItems } from "./content/automationItems";
import { projects } from "./content/projects";
import { stackCards } from "./content/stackCards";
import { workflowSteps } from "./content/workflowSteps";
import useRevealOnScroll from "./hooks/useRevealOnScroll";
import AboutSection from "./sections/AboutSection";
import AutomationSection from "./sections/AutomationSection";
import ContactSection from "./sections/ContactSection";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import StackSection from "./sections/StackSection";
import WorkflowSection from "./sections/WorkflowSection";
import "./styles/index.scss";

function MainPage() {
  useRevealOnScroll();

  return (
    <div className="portfolio-page">
      <div className="page-pillar-bg" aria-hidden="true">
        <LightPillar
          topColor="#5227FF"
          bottomColor="#b2ff9f"
          intensity={0.75}
          rotationSpeed={0.1}
          glowAmount={0.0017}
          pillarWidth={7}
          pillarHeight={0.6}
          noiseIntensity={0.5}
          pillarRotation={50}
          interactive={false}
          mixBlendMode="screen"
          quality="high"
        />
      </div>

      <HeroSection />

      <main className="main-content">
        <AboutSection />
        <StackSection stackCards={stackCards} />
        <ProjectsSection projects={projects} />
        <AutomationSection automationItems={automationItems} />
        <WorkflowSection workflowSteps={workflowSteps} />
        <ContactSection />
      </main>
    </div>
  );
}

export default MainPage;
