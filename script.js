// Données mises à jour depuis ton CV "Cheikh-Boukal Léo CV FR-1"
const projects = [
    {
        title: "Mini Moteur Physique",
        description: "Développement d'un moteur physique en C++ avec OpenFramework : gestion des collisions et simulation dynamique dans le cadre d'un cours de R&D à l'UQAC.",
        image: "assets/images/physics.jpg", // Mets une capture de tes formes géométriques
        tags: ["C++", "OpenFramework", "Physique", "R&D"],
        link: "#" // Pas de lien précisé dans le CV
    },
    {
        title: "One Last Stake",
        description: "Jeu créé sur Unreal Engine 5 en 48h pour la Wonderjam UQAC Automne 2025. Disponible sur Itch.io.",
        image: "assets/images/stake.jpg",
        tags: ["Unreal Engine 5", "Game Jam", "48h", "C++"],
        link: "https://leptar.itch.io/" // Lien général vers ton itch.io
    },
    {
        title: "Borealis",
        description: "Réalisation d'un prototype de jeu complet (Game Design & Code) dans le cadre d'un cours à l'UQAC.",
        image: "assets/images/borealis.jpg",
        tags: ["UQAC", "Prototype", "Game Design"],
        link: "https://leptar.itch.io/"
    },
    {
        title: "Violence is always the Answer",
        description: "Jeu créé en 72h pour la Mini Jam 167 sur Godot. Classé et jouable en ligne.",
        image: "assets/images/jam.jpg",
        tags: ["Godot", "Game Jam", "GDScript", "72h"],
        link: "https://leptar.itch.io/"
    }
];

const container = document.getElementById('projects-container');

// On vide le conteneur avant d'ajouter pour éviter les doublons si tu recharges
container.innerHTML = '';

projects.forEach(project => {
    const card = document.createElement('div');
    card.classList.add('project-card');

    const tagsHtml = project.tags.map(tag => `<span>${tag}</span>`).join('');

    // Bouton conditionnel
    const linkHtml = project.link && project.link !== "#"
        ? `<a href="${project.link}" target="_blank" class="project-link">Voir le projet →</a>`
        : '';

    card.innerHTML = `
        <div class="image-placeholder" style="background-color: #333; height: 180px; border-radius: 4px; margin-bottom: 1rem;">
            </div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="tags">${tagsHtml}</div>
        ${linkHtml}
    `;

    container.appendChild(card);
});