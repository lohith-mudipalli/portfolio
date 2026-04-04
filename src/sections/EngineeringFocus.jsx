import { Server, ShieldCheck, Database, TestTube2 } from 'lucide-react'

const focusAreas = [
  {
    title: 'Backend Architecture',
    description:
      'Building scalable backend systems with structured business logic, maintainable code organization, and real application workflows.',
    icon: Server,
  },
  {
    title: 'Security & Access Control',
    description:
      'Implementing JWT authentication, authorization, and role-based access control to protect multi-user systems and workflows.',
    icon: ShieldCheck,
  },
  {
    title: 'Data & Database Design',
    description:
      'Designing relational schemas, handling data consistency, and building database-driven applications with efficient models and queries.',
    icon: Database,
  },
  {
    title: 'Testing & Reliability',
    description:
      'Using integration tests, API testing, and CI workflows to improve correctness, reliability, and development quality.',
    icon: TestTube2,
  },
]

export default function EngineeringFocus() {
  return (
    <section className="bg-slate-50 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-indigo-600">
            Engineering Focus
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Core areas I focus on while building software
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            My projects are built around backend quality, secure workflows, data modeling, and production-style
            software engineering practices.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {focusAreas.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="inline-flex rounded-2xl bg-indigo-50 p-3 text-indigo-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}