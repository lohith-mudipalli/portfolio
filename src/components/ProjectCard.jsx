import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

export default function ProjectCard({ project, index }) {
  const Icon = project.icon

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 opacity-80" />

      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="inline-flex rounded-2xl bg-indigo-50 p-3 text-indigo-600">
            <Icon className="h-6 w-6" />
          </div>

          <h3 className="mt-5 text-2xl font-semibold text-slate-900">
            {project.name}
          </h3>

          <p className="mt-1 text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
            {project.subtitle}
          </p>
        </div>
      </div>

      <p className="mt-6 text-base leading-7 text-slate-600">
        {project.summary}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-8 space-y-3">
        {project.highlights.map((item) => (
          <div key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-indigo-600" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
        >
          <FaGithub className="h-4 w-4" /> GitHub
        </a>

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            <ExternalLink className="h-4 w-4" /> Live Demo
          </a>
        )}
      </div>
    </motion.article>
  )
}