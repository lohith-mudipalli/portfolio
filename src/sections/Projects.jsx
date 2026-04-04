import  SectionTitle  from '../components/SectionTitle'
import  ProjectCard  from '../components/ProjectCard'
import { projects } from '../data/portfolioData'

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 lg:px-8">
        <SectionTitle
            eyebrow="Academic Projects"
            title="Projects built with engineering standards and real system thinking"
            description="These projects reflect my experience in full-stack development, secure backend implementation, data modeling, testing, deployment, and AI-driven system design."
        />

        <div className="mx-auto mt-16 grid max-w-7xl gap-8 lg:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
        </div>
    </section>
  )
}