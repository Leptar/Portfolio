// Données extraites de ton CV
const projects = [
    {
        title: "Borealis",
        description: "Prototype de jeu réalisé dans le cadre d'un cours à l'UQAC. Disponible sur Itch.io.",
        image: "assets/images/borealis.jpg", // Pense à mettre une capture d'écran ici
        tags: ["UQAC", "Prototype", "Game Design"],
        link: "https://leptar.itch.io/" // Lien vers ton itch.io global ou le jeu spécifique
    },
    {
        title: "Mini Moteur Physique",
        description: "Réalisation d'un moteur physique en C++ avec OpenFramework : gestion des collisions et simulation dynamique.",
        image: "assets/images/physics.jpg",
        tags: ["C++", "OpenFramework", "Physique", "R&D"],
        link: "#"
    },
    {
        title: "Violence is always the Answer",
        description: "Jeu créé en 72h pour la Mini Jam 167 sur Godot. Classé et jouable en ligne.",
        image: "assets/images/jam.jpg",
        tags: ["Godot", "Game Jam", "GDScript", "72h"],
        link: "https://leptar.itch.io/"
    },
    {
        title: "Pokemon TCG Manager",
        description: "Application Android native en Full Kotlin développée en solo (Erasmus VIVES). Gestion de collection de cartes.",
        image: "assets/images/pokemon-app.jpg",
        tags: ["Kotlin", "Android", "Mobile", "Solo"],
        link: "https://github.com/Leptar"
    }
];

const container = document.getElementById('projects-container');

projects.forEach(project => {
    const card = document.createElement('div');
    card.classList.add('project-card');

    const tagsHtml = project.tags.map(tag => `<span>${tag}</span>`).join('');

    // J'ai ajouté un bouton "Voir le projet" si un lien existe
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