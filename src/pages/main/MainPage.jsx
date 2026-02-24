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
      <HeroSection />

      <main className="main-content main-content--workspace">
        <AboutSection />
        <StackSection />
        <ProjectsSection />
        <AutomationSection />
        <WorkflowSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default MainPage;
