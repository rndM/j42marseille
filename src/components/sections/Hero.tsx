export default function Hero() {
  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center justify-center pt-20 bg-white dark:bg-black"
    >
      <div className="text-center max-w-4xl mx-auto px-4">
        {/* Titre principal */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Transformez vos idées en réalité
        </h1>

        {/* Sous-titre */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          La Junior Entreprise de 42 Marseille vous accompagne dans vos projets
          digitaux avec l'expertise d'étudiants passionnés.
        </p>

        {/* Bouton CTA */}
        <div>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
          >
            Démarrer un projet
          </a>
        </div>
      </div>
    </section>
  )
}
