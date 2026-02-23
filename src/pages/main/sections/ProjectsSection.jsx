function ProjectsSection({ projects }) {
  return (
    <section className="panel section section--projects" id="projects">
      <h2>Проекты</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <span className="project-badge">{project.badge}</span>
            <h3>{project.title}</h3>
            <ul>
              {project.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
