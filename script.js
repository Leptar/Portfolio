// C'est ici que tu ajoutes tes projets. 
// Pas besoin de toucher au HTML.
const projects = [
    {
        title: "Jeu d'Infiltration 3D",
        description: "Prototype de jeu d'infiltration avec mécaniques de parkour et IA de détection. Gestion d'états complexes et système de 'Hack'.",
        image: "assets/images/infiltration.jpg", // Mets une image ou laisse vide
        tags: ["Unreal Engine 5", "C++", "AI", "Gameplay"]
    },
    {
        title: "Moteur Physique Custom",
        description: "Implémentation d'un moteur physique from scratch : détection de collision via Quadtree, dynamique des corps rigides (RigidBody) et mathématiques quaternioniques.",
        image: "assets/images/physics.jpg",
        tags: ["C++", "Maths", "Optimization", "OpenGL"]
    },
    {
        title: "Reconnaissance de Chiffres (Unity)",
        description: "Intégration du framework Sentis pour la reconnaissance de dessin (0 ou 1) afin d'activer des mécanismes in-game.",
        image: "assets/images/unity-sentis.jpg",
        tags: ["Unity", "C#", "Machine Learning", "Sentis"]
    },
    {
        title: "Système de Build CMake",
        description: "Configuration complète d'environnement de build cross-platform avec gestion des dépendances (Vulkan SDK).",
        image: "assets/images/cmake.jpg",
        tags: ["CMake", "DevOps", "Build Systems"]
    }
];

// Fonction qui génère le HTML automatiquement
const container = document.getElementById('projects-container');

projects.forEach(project => {
    // Création de la carte
    const card = document.createElement('div');
    card.classList.add('project-card');

    // Génération des tags (badges)
    const tagsHtml = project.tags.map(tag => `<span>${tag}</span>`).join('');

    // HTML interne de la carte
    card.innerHTML = `
        <div class="image-placeholder" style="background-color: #333; height: 180px; border-radius: 4px; margin-bottom: 1rem;">
            </div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="tags">${tagsHtml}</div>
    `;

    container.appendChild(card);
});