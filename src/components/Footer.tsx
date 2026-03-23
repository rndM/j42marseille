export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-zinc-950 border-t border-gray-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Logo + Description */}
          <div>
            <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">
              JE 42 Marseille
            </h3>
            <p className="text-gray-600 dark:text-zinc-400">
              La Junior Entreprise de l'école 42 Marseille
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
              Liens
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#accueil" className="text-gray-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#apropos" className="text-gray-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
                  À propos
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
              Suivez-nous
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright + Mentions légales */}
        <div className="border-t border-gray-200 dark:border-zinc-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 dark:text-zinc-500">
            © 2026 JE 42 Marseille
          </p>
          <a href="#" className="text-gray-500 dark:text-zinc-500 hover:text-blue-600 dark:hover:text-blue-400 transition text-sm">
            Mentions légales
          </a>
        </div>

      </div>
    </footer>
  )
}