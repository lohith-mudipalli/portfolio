import { Mail, Briefcase, MapPin } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm sm:p-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="text-center lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600">
              Contact
            </p>

            <h2 className="mt-8 text-2xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
              Open to connecting and discussing opportunities.
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              I’m currently seeking software engineer, backend engineer, and
              full-stack developer opportunities.
            </p>

            <div className="mt-8 space-y-4 text-sm text-slate-600">
              <div className="flex items-center justify-center gap-3 lg:justify-start">
                <Briefcase className="h-4 w-4 text-indigo-600" />
                <span>Open to software engineering opportunities</span>
              </div>

              <div className="flex items-center justify-center gap-3 lg:justify-start">
                <MapPin className="h-4 w-4 text-indigo-600" />
                <span>United States</span>
              </div>

              <div className="flex items-center justify-center gap-3 lg:justify-start">
                <Mail className="h-4 w-4 text-indigo-600" />
                <span>lohithmudipalli@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Connect With Me
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
              <a
                href="mailto:lohithmudipalli@gmail.com"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                <Mail className="h-4 w-4" /> Email
              </a>

              <a
                href="https://github.com/lohith-mudipalli"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                <FaGithub className="h-4 w-4" /> GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/lohith-reddy-mudipalli-36b621301/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                <FaLinkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}