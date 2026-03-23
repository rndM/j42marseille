'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-gray-50 dark:bg-zinc-950 border-b border-gray-200 dark:border-zinc-800 z-50">
      {/* Conteneur principal */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div>
          <span className="font-bold text-xl text-gray-900 dark:text-white">
            JE 42 Marseille
          </span>
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex gap-6">
          <a
            href="#accueil"
            className="text-gray-700 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Accueil
          </a>
          <a
            href="#services"
            className="text-gray-700 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Services
          </a>
          <a
            href="#apropos"
            className="text-gray-700 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            À propos
          </a>
          <a
            href="#contact"
            className="text-gray-700 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Contact
          </a>
        </div>

        {/* Bouton Hamburger */}
        <button
          className="md:hidden p-2 text-gray-700 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-zinc-950 border-t border-gray-200 dark:border-zinc-800 px-4 py-3 flex flex-col gap-3">
          <a
            href="#accueil"
            onClick={() => setIsOpen(false)}
            className="py-2 text-gray-700 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Accueil
          </a>
          <a
            href="#services"
            onClick={() => setIsOpen(false)}
            className="py-2 text-gray-700 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Services
          </a>
          <a
            href="#apropos"
            onClick={() => setIsOpen(false)}
            className="py-2 text-gray-700 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400"
          >
            À propos
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="py-2 text-gray-700 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  )
}
