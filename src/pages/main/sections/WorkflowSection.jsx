function WorkflowSection({ workflowSteps }) {
  return (
    <section className="panel reveal" id="workflow" data-animate>
      <h2>Как я работаю</h2>
      <ol className="workflow-list">
        {workflowSteps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </section>
  );
}

export default WorkflowSection;
