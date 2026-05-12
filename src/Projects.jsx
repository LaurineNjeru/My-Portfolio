function Projects() {
  const projects = [
    'Portfolio Website',
    'Weather App',
    'Task Manager',
  ]

  return (
    <section className="projects">
      <h2>Projects</h2>

      <div className="project-list">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <h3>{project}</h3>
            <p>Simple React project built by Laurine.</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects