# Savèkari Beauty Hub

🌿 **Soins naturels à base de beurre de karité béninois**  
Une tradition familiale au service de votre beauté

## 📖 Description

Savèkari est une entreprise familiale béninoise spécialisée dans la fabrication de soins cosmétiques naturels à base de beurre de karité. Notre mission est de valoriser le trésor national du Bénin à travers des produits de qualité exceptionnelle.

### 🎯 Notre Philosophie

- **Expertise** : Maîtrise des techniques d'extraction et de transformation du beurre de karité
- **Qualité** : Produits 100% naturels, sans additifs chimiques
- **Tradition** : Savoir-faire artisanal transmis de génération en génération
- **Impact** : Contribution au développement économique du Bénin

## 🚀 Technologies Utilisées

- **Frontend** : React 18 + TypeScript
- **Build Tool** : Vite
- **Styling** : Tailwind CSS
- **UI Components** : shadcn/ui
- **Icons** : Lucide React
- **Animations** : CSS Transitions & Animations
- **Deployment** : Ready for Vercel/Netlify

## 📱 Fonctionnalités

### 🏠 Page d'accueil
- Hero section avec CTA WhatsApp
- Présentation de l'entreprise et ses valeurs
- Navigation fluide avec scroll animé

### 🛍️ Catalogue de Produits
- Affichage responsive des produits
- Filtrage par catégorie (Cheveux, Corps, Multi-usages)
- Modales détaillées pour chaque produit
- Badges "Best Seller" et "100% Naturel"

### 📞 Contact Intégré
- Lien direct WhatsApp
- Informations de localisation
- Horaires de disponibilité
- Carte Google Maps intégrée

### 🎨 Design & UX
- Design premium et moderne
- Palette de couleurs inspirée du karité
- Animations fluides et micro-interactions
- Interface 100% responsive

## 🛠️ Installation et Démarrage

### Prérequis
- Node.js (version 18 ou supérieure)
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone https://github.com/T0b0i7/savekari-beauty.git

# Naviguer dans le projet
cd savekari-beauty

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

### Scripts Disponibles

```bash
npm run dev      # Démarrer le serveur de développement
npm run build    # Build pour production
npm run preview  # Prévisualiser le build de production
npm run lint     # Linter le code
```

## 📁 Structure du Projet

```
src/
├── components/          # Composants React
│   ├── ui/             # Composants UI de base
│   ├── AboutSection.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── ProductCard.tsx
│   ├── ProductModal.tsx
│   ├── ProductsSection.tsx
│   └── ValuesSection.tsx
├── assets/             # Images et ressources statiques
├── data/              # Données des produits
├── lib/               # Utilitaires et configuration
└── App.tsx            # Composant principal
```

## 🎨 Personnalisation

### Couleurs du Thème
- `--earth` : Terre (#8B4513)
- `--leaf` : Feuille (#228B22)
- `--gold` : Or (#FFD700)
- `--karite` : Karité (#F5E6D3)
- `--cream` : Crème (#FFF8DC)

### Polices
- `font-display` : Titres et headings
- `font-body` : Textes de contenu

## 📊 Performance

- ⚡ **Score Lighthouse** : 95+
- 📱 **Mobile First** : Optimisé pour mobile
- 🖼️ **Images optimisées** : WebP + lazy loading
- 🎯 **SEO Ready** : Meta tags et structure sémantique

## 🌐 Déploiement

### Vercel (Recommandé)
```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

### Netlify
```bash
# Build et déployer
npm run build
# Upload du dossier dist/
```

## 📈 Roadmap

- [ ] Système de panier d'achat
- [ ] Paiement en ligne intégré
- [ ] Blog sur les bienfaits du karité
- [ ] Témoignages clients
- [ ] Programme de fidélité
- [ ] Version multilingue (FR/EN)

## 🤝 Contribuer

Les contributions sont les bienvenues ! Voici comment vous pouvez aider :

1. Fork le projet
2. Créer une branche (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commit vos changements (`git commit -m 'Ajouter une nouvelle fonctionnalité'`)
4. Push vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrir une Pull Request

## 📞 Contact

- **WhatsApp** : +229 01 97 98 15 72
- **Localisation** : Cotonou, Bénin
- **Email** : contact@savekari.com

## 📝 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 🙏 Remerciements

- À nos artisans pour leur savoir-faire exceptionnel
- À nos clients pour leur confiance et fidélité
- À la communauté open source pour les outils utilisés

---

**Made with ❤️ in Benin**  
© 2024 Savèkari. Tous droits réservés.