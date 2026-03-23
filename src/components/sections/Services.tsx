import { Code, Lightbulb, GraduationCap } from 'lucide-react'

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4">
        {/* Titre de section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nos Services
          </h2>
          <p className="text-gray-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Accompagnement sur mesure pour vos projets digitaux
          </p>
        </div>

        {/* Grille de 3 cartes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Carte 1 */}
          <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg p-6 hover:border-blue-600 transition">
            <div className="w-12 h-12 bg-blue-600 rounded-lg mb-4 flex items-center justify-center">
              <Code className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Développement Web
            </h3>
            <p className="text-gray-600 dark:text-zinc-400">
              Sites vitrines, applications web, e-commerce
            </p>
          </div>

          {/* Carte 2 */}
          <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg p-6 hover:border-blue-600 transition">
            <div className="w-12 h-12 bg-blue-600 rounded-lg mb-4 flex items-center justify-center">
              <Lightbulb className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Conseil Digital
            </h3>
            <p className="text-gray-600 dark:text-zinc-400">
              Audit, stratégie, accompagnement technique
            </p>
          </div>

          {/* Carte 3 */}
          <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg p-6 hover:border-blue-600 transition">
            <div className="w-12 h-12 bg-blue-600 rounded-lg mb-4 flex items-center justify-center">
              <GraduationCap className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Formation
            </h3>
            <p className="text-gray-600 dark:text-zinc-400">
              Ateliers, workshops, montée en compétence
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
