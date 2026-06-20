export interface Project {
  id: number;
  title: string;
  slug: string;
  date: string;
  resource?: string[];
  description: string;
  technologies: string[];

  // --- NOUVEAUX CHAMPS OPTIONNELS  ---
  context?: string; // Le contexte du projet
  methodology?: string; // Explication de ta méthode (Agile, PERT, etc.)
  githubUrl?: string; // Lien vers le code
  videoUrl?: string; // Lien de la vidéo YouTube (format "embed")
  diagrams?: string[]; // Tableau contenant les chemins vers tes images UML/PERT
}

export const myProjects: Project[] = [
  {
  id: 6,
  slug: "portfolio-personnel-nextjs",
  date: "03/2026 – en cours",
  title: "Portfolio Personnel — Hanah.dev",
  description: "Portfolio évolutif conçu pour grandir avec ma carrière de développeuse.",
  technologies: [
    "Next.js 15 (App Router)",
    "TypeScript",
    "CSS Modules",
    "Framer Motion",
    "Vercel"
  ],
  context: "Ce projet est avant tout un projet personnel de long terme — mon portfolio professionnel, conçu dès le départ pour évoluer tout au long de ma carrière. L'objectif n'était pas seulement de créer une vitrine, mais de construire une base technique solide et maintenable que je peux enrichir au fil du temps : nouveaux projets, nouvelles compétences, nouvelles ambitions. J'en suis l'unique conceptrice, développeuse et chef de projet. J'ai pris toutes les décisions d'architecture, de design system et d'expérience utilisateur.",
  methodology: "Dès la phase de conception, j'ai modélisé l'architecture complète via un diagramme UML de composants — représentant la hiérarchie entre le RootLayout Next.js, les composants UI (Navbar, Footer), les sections de la HomePage (Hero, About, ProjectsSection, Skills, Contact) et la page dynamique /projects/[slug] pilotée par une interface TypeScript Project. Cette modélisation m'a permis d'anticiper les dépendances entre composants et de structurer un routing App Router cohérent avant d'écrire la moindre ligne de code. J'ai appliqué une démarche itérative proche de l'Agile : chaque fonctionnalité (animations au scroll, particules, typewriter, galerie de diagrammes) a été développée et validée indépendamment, garantissant une base stable à chaque étape.",
  githubUrl: "https://github.com/sahHanah44/Portfolio_Hanah_Sahmoune/tree/main",
  diagrams: [
    "/Portfolio/Arborescence_de_Composants.png"
  ]
},
  
  {
    id: 5,
    title: "ECHO : Plateforme de Visualisation de l'Acidification des Océans",
    slug: "echo-ocean-data-visualization",
    date: "09/2025-01/2026", 
    description: "Application web d'analyse de données Copernicus pour la sensibilisation aux enjeux climatiques.",
    technologies: ["Python (xarray)", "PHP", "JavaScript", "Firebase", "MySQL", "Chart.js"],
    context: "Ce projet a été réalisé en équipe de 5 personnes dans le cadre d'un projet universitaire. L'objectif collectif était de transformer les données scientifiques complexes du 'Copernicus Marine Service' en une plateforme accessible au grand public. Le travail a nécessité une coordination étroite entre le traitement de données massives (fichiers NetCDF), la gestion d'une base de données relationnelle et le développement d'une interface utilisateur dynamique.",   
    methodology: "Pour structurer ce travail de groupe, j'ai pris l'initiative de modéliser l'architecture via des diagrammes UML (classes, séquence, contexte), garantissant une vision technique commune. J'ai également utilisé la planification PERT pour identifier les interdépendances critiques du projet. Cette rigueur, couplée à une approche Agile, nous a permis de réagir efficacement aux imprévus techniques et d'assurer l'interopérabilité entre les différents modules développés par l'équipe.",
    githubUrl: "https://github.com/Nayarr/Echo",
    videoUrl: "https://www.youtube.com/embed/TQH4PnAwWao",
    diagrams: [
      "/Echo/Diagramme_UML_Classe.drawio.png", 
      "/Echo/Diagramme_UML_sequence.png", 
      "/Echo/Diagramme_PERT.png",
      "/Echo/Architecture_pipeline.png",
      "/Echo/Architecture_pipelineDeux.png"
    ]
  },
 {
    id: 4,
    slug: "monitoring-hydrometrie-hubeau",
    title: "Hubleau : Visualisation Hydrométrique en Temps Réel",
    date: "06/2025",
    description: "Application web d'exploitation des données de l'API Hub'Eau pour le suivi des cours d'eau.",
    technologies: ["Python (Flask)", "SQLite / MongoDB", "JavaScript (Leaflet.js)", "API Hub'Eau", "Git"],
    context: "Ce projet, réalisé en équipe de 6, visait à concevoir un outil de monitoring des cours d'eau français en exploitant l'API Hub'Eau. L'objectif était de collecter des données massives (stations et mesures), de les stocker localement pour optimisation, et de les restituer via une interface interactive incluant une carte de France dynamique et des tableaux de bord analytiques.",
    methodology: "Le projet a été piloté via la méthode Agile SCRUM, structurée par des sprints d'une semaine et des daily scrums pour fluidifier le travail d'équipe. En charge de la partie conception, j'ai réalisé la modélisation du schéma relationnel (Diagramme E.R) et la planification PERT pour sécuriser le rendu. J'ai également participé à la mise en place du pipeline ETL pour automatiser la récupération et l'insertion des données de l'API vers notre base de données locale.",
    githubUrl: "https://github.com/nasa94-snd/SAE204_201",
    videoUrl: "https://youtube.com/embed/feYKTSsFKJk",
    diagrams: [
      "/Hubleau/DiagrammeER.png",
      "/Hubleau/D_PERT.png",

    ]
  }, 
  {
    id: 2,
    slug: "optimisation-reseau-velib-voronoi",
    title: "VeloGraph : Optimisation Algorithmique du Réseau Vélib'",
    date: "05/2025", 
    description: "Analyse spatiale et optimisation du réseau Vélib' métropole par les diagrammes de Voronoi.",
    technologies: ["Python", "Folium", "SciPy", "NumPy", "Algorithmique de Graphes"],
    context: "L'objectif de ce projet était de modéliser et d'optimiser la répartition géographique des stations Vélib' à Paris. En s'appuyant sur des données Open Data, le défi consistait à identifier les zones de sous-représentation et de sur-représentation des stations pour proposer un maillage territorial plus équilibré et efficace.",
    methodology: "Pour résoudre cette problématique, j'ai implémenté une approche basée sur la géométrie computationnelle en utilisant les diagrammes de Voronoi et la triangulation de Delaunay via la bibliothèque SciPy. Cette rigueur algorithmique m'a permis de calculer un indice de répartition précis pour chaque station. J'ai ensuite conçu une interface de visualisation interactive avec Folium, utilisant un code couleur sémantique (vert/rouge/bleu) pour rendre les résultats de l'analyse immédiatement exploitables.",
    videoUrl: "https://youtube.com/embed/_-X7MLoTshg",
  },

  {
    id: 1,
    slug: "infrastructure-services-reseau-debian",
    title: "Déploiement d'une Infrastructure de Services Réseau",
    description: "Conception et mise en place d'une architecture réseau sécurisée sous Debian (DHCP, SSH, Web, FTP).",
    date:" ",
    technologies: ["Debian (CLI)", "VirtualBox", "Apache2", "DHCP Server", "OpenSSH", "VSFTPD"],
    context: "Ce projet consistait à mettre en place une maquette d'infrastructure réseau complète sous Linux Debian au sein d'une équipe de trois personnes. L'objectif était de configurer un serveur central distribuant des services critiques (DHCP, Web, FTP) à un parc de machines clientes, tout en garantissant un accès externe sécurisé via un bastion SSH.",
    methodology: "La réussite du déploiement a reposé sur une gestion rigoureuse des configurations système et une documentation technique précise. J'ai utilisé une approche de planification par tâches pour isoler les services et tester l'interopérabilité à chaque étape. J'ai notamment piloté la sécurisation des accès via l'authentification par clé publique (SSH/SFTP) et la gestion fine des permissions (ACL) pour les serveurs de fichiers, assurant ainsi la conformité au cahier des charges de sécurité.",
    videoUrl: "/Resaux/Rapport_Instalation_d_un_service_resaux.pdf",

    diagrams: [
      "/Resaux/Maquette_projet.png"
    ]
  }
];