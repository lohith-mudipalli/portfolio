import { useState } from 'react'
import { Menu, X, FileText } from 'lucide-react'
import { navigation } from '../data/portfolioData'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8"
        aria-label="Global"
      >
        <a href="#" className="flex items-center gap-3">
          <div className="rounded-3xl bg-slate-900 px-3 py-2 text-sm font-bold text-white">
            LOHITH REDDY MUDIPALLI
          </div>
        </a>

        <div className="hidden lg:flex lg:items-center lg:gap-x-10">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold text-slate-700 transition hover:text-slate-900"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            <FileText className="h-4 w-4" /> Resume
          </a>

          <a
            href="#contact"
            className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Contact Me
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="rounded-xl p-2 text-slate-700 lg:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div
            className="fixed inset-0 z-50 bg-slate-900/20 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white px-6 py-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold text-slate-900">Menu</p>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl p-2 text-slate-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-10 space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-semibold text-slate-700 hover:bg-slate-50"
                >
                  {item.name}
                </a>
              ))}

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="block rounded-xl border border-slate-300 px-4 py-3 text-center text-base font-semibold text-slate-700"
              >
                Resume
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 block rounded-xl bg-slate-900 px-4 py-3 text-center text-base font-semibold text-white"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}