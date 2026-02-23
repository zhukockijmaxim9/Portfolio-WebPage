function AutomationSection({ automationItems }) {
  return (
    <section className="panel panel-accent" id="automation">
      <h2>AI Automation & Intelligent Systems</h2>
      <div className="automation-grid">
        {automationItems.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}

export default AutomationSection;
