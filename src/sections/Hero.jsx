import { motion } from 'framer-motion'
import { ArrowRight, Server, Database, BrainCircuit, Lock } from 'lucide-react'

const quickHighlights = [
  'Four End‑to‑End Engineering Projects',
  'Backend Engineering & API Development',
  'Full‑Stack Product Design & Implementation',
  'AI Engineering with Retrieval‑Augmented Generation',
]

export default function Hero() {
  return (
           <section className="relative isolate overflow-hidden px-6 pt-20 lg:px-8">
              <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                <div
                  style={{
                    clipPath:
                      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                  }}
                  className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-[20deg] bg-gradient-to-tr from-indigo-300 to-violet-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72rem]"
                />
              </div>
    
              <div className="mx-auto max-w-5xl py-24 sm:py-32 lg:py-40">
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center rounded-full border border-indigo-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-slate-600 shadow-sm backdrop-blur">
                    I design secure, resilient full‑stack systems that power real enterprise workflows
                  </div>
    
                  <h1 className="mt-8 text-5xl font-semibold tracking-tight text-slate-900 sm:text-7xl">
                    Computer Science graduate building scalable software systems with backend depth.
                  </h1>
    
                  <p className="mx-auto mt-8 max-w-4xl text-lg font-medium leading-8 text-slate-600 sm:text-xl">
                    Computer Science graduate with hands-on experience in designing and building full-stack applications.
                    Skilled in developing scalable backend systems, secure RESTful APIs, and database-driven solutions using
                    Java, Node.js, and React. Strong foundation in system design, data handling, and application security,
                    with a focus on solving complex problems and building real-world applications.
                  </p>
    
                  <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <a
                      href="#projects"
                      className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500"
                    >
                      View Projects <ArrowRight className="h-4 w-4" />
                    </a>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
                    >
                      Contact Me
                    </a>
                  </div>
                  
                  <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {quickHighlights.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-4 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur"
                      >
                      {item}
                    </div>
                    ))}
                 </div>

                  <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-500">
                    <div className="inline-flex items-center gap-2"><Server className="h-4 w-4 text-indigo-600" /> Scalable Backend Systems</div>
                    <div className="inline-flex items-center gap-2"><Lock className="h-4 w-4 text-indigo-600" /> Secure RESTful APIs</div>
                    <div className="inline-flex items-center gap-2"><Database className="h-4 w-4 text-indigo-600" /> Database-Driven Solutions</div>
                    <div className="inline-flex items-center gap-2"><BrainCircuit className="h-4 w-4 text-indigo-600" /> AI-Powered Applications</div>
                  </div>
                </motion.div>
              </div>

              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
              >
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
               }}
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 bg-gradient-to-tr from-fuchsia-300 to-indigo-500 opacity-25 sm:left-[calc(50%+36rem)] sm:w-[72rem]"
              />
            </div>
           </section>
  )
}