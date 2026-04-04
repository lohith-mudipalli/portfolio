import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="px-6 py-24 lg:px-8">
              <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600">Professional Summary</p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                    Engineer focused on backend architecture, API design, and production-style applications.
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-slate-600">
                    My projects focus on designing reliable backend systems, 
                    implementing secure authentication and authorization, 
                    building scalable REST APIs, modeling relational databases, 
                    and delivering full‑stack applications that solve practical user problems.
                  </p>
                  <p className="mt-4 text-base leading-7 text-slate-600">
                    Across my projects, I have worked on concurrency‑safe booking systems, 
                    finance tracking workflows, AI‑based document retrieval, and multi‑role project management platforms. 
                    I aim to build software that is technically sound, maintainable, and 
                    aligned with real engineering and graduate‑level standards.
                  </p>
                </motion.div>
    
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="grid gap-5"
                >
                  <div className="rounded-[1.77rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-md">
                    <h3 className="text-lg font-semibold text-slate-900">What I bring</h3>
                    <div className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
                      <div>Scalable backend systems and business workflow implementation</div>
                      <div>Secure RESTful APIs with JWT and role-based access control</div>
                      <div>Relational database design, optimization, and data modeling</div>
                      <div>Full-stack product development with strong engineering structure</div>
                    </div>
                  </div>
                  <div className="rounded-[1.75rem] border border-slate-200 bg-slate-900 p-7 text-white shadow-sm transition hober:shadow-md">
                    <h3 className="text-lg font-semibold">Technical Strengths</h3>
                    <div className="mt-4 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
                      <div>System Design</div>
                      <div>Concurrency Handling</div>
                      <div>Transaction Management</div>
                      <div>Authentication & Authorization</div>
                      <div>Testing & API Reliability</div>
                      <div>Deployment & DevOps</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>
  )
}