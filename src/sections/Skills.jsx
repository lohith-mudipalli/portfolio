import  SectionTitle  from '../components/SectionTitle'
import { SkillGroup } from '../components/SkillGroup'
import { skillGroups } from '../data/portfolioData'

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-50 px-6 py-24 lg:px-8">
          <SectionTitle
            eyebrow="Technical Skills"
            title="Technologies and concepts I use to build real-world applications"
            description="A structured view of my engineering stack spanning backend and frontend development, databases, testing, DevOps, and AI‑driven application workflows."
          />

          <div className="mx-auto mt-16 grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group) => (
              <SkillGroup key={group.title} title={group.title} items={group.items} />
            ))}
          </div>
        </section>
  )
}
