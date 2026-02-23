import { automationItems } from "./content/automationItems";
import { projects } from "./content/projects";
import { stackCards } from "./content/stackCards";
import { workflowSteps } from "./content/workflowSteps";
import AboutSection from "./sections/AboutSection";
import AutomationSection from "./sections/AutomationSection";
import ContactSection from "./sections/ContactSection";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import StackSection from "./sections/StackSection";
import WorkflowSection from "./sections/WorkflowSection";
import "./styles/index.scss";

function MainPage() {
  return (
    <div className="portfolio-page">
      <HeroSection />

      <main className="main-content main-content--workspace">
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
