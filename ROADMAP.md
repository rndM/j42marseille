# ROADMAP - JE 42 Marseille

## Objectif

Landing page responsive - Next.js + Tailwind - Déploiement Vercel

---

## Maquette

```sh
┌─────────────────────────────────────────────────────┐
│ LOGO              Accueil Services À propos Contact │
├─────────────────────────────────────────────────────┤
│                                                     │
│           TITRE                                     │
│           Sous-titre explicatif                     │
│           [Bouton CTA]                              │
│                                                     │
├─────────────────────────────────────────────────────┤
│           Section "À propos"                        │
│           Texte + image                             │
├─────────────────────────────────────────────────────┤
│           Section "Services"                        │
│           3 cartes ( carroussel ? )                 │
├─────────────────────────────────────────────────────┤
│           Section "Contact"                         │
│           Formulaire + infos                        │
├─────────────────────────────────────────────────────┤
│           FOOTER                                    │
└─────────────────────────────────────────────────────┘
```

---

## ✅ Setup

- [ ] `npx create-next-app@latest je-42marseille`
  - TypeScript ✓
  - Tailwind ✓
  - ESLint ✓
  - App Router ✓
  - src/ directory ✓
- [ ] `cd je-42marseille`
- [ ] `npm install -D prettier eslint-config-prettier`
- [ ] Créer `.prettierrc`
- [ ] Tester `npm run dev` → http://localhost:3000

---

## Composants

### Navbar

- [ ] Logo + nom JE
- [ ] Menu desktop (Accueil, Services, À propos, Contact)
- [ ] Hamburger mobile
- [ ] Scroll fluide vers ancres
- [ ] Fermeture menu au clic

### Hero Section

- [ ] Titre principal
- [ ] Sous-titre
- [ ] CTA bouton
- [ ] Padding responsive

### Section À propos

- [ ] Titre
- [ ] Texte descriptif
- [ ] Image/illustration (optionnel)

### Section Services

- [ ] 3 cartes
- [ ] Icônes (lucide-react)
- [ ] Hover effects

### Section Contact

- [ ] Formulaire (nom, email, message)
- [ ] Infos contact
- [ ] Réseaux sociaux

### Footer

- [ ] Liens légaux
- [ ] Copyright
- [ ] Liens sociaux

---

## Design

### Figma (light)

- [ ] Récupérer logo
- [ ] Noter couleurs (hex)
- [ ] Vérifier espacements
- [ ] Exporter assets si besoin

### Ajustements code

- [ ] Appliquer couleurs perso
- [ ] Ajuster typography
- [ ] Espacements précis
- [ ] Animations hover

---

## Responsive

- [ ] Test mobile (< 768px)
- [ ] Test tablette (768-1024px)
- [ ] Test desktop (> 1024px)
- [ ] Menu hamburger OK
- [ ] Textes lisibles
- [ ] Images adaptatives

---

## Déploiement (J5)

- [ ] `npm run build` (test local)
- [ ] Push GitHub
- [ ] Connecter Vercel
- [ ] Deploy
- [ ] Test prod

---

## 🛠️ Tech Stack

- **Framework** : Next.js 14+ (App Router)
- **Styling** : Tailwind CSS
- **Icônes** : lucide-react
- **Form** : HTML natif + JS
- **Hébergement** : Vercel

---

## Structure dossiers

```
je-42marseille/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Services.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── public/
│   └── logo.png
├── package.json
├── tailwind.config.ts
└── .prettierrc
```

---

## Ressources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/icons)
- [Vercel Deploy](https://vercel.com/docs)

---

## Notes

- Inspo : https://42boost.fr/
- Priorité : Mobile-first
- Code propre > Features
- Itérations rapides

---

**Dernière MAJ** : 22/03/2026  
**Statut** : En cours
