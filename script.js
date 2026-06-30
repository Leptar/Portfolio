const projects = [
    {
        title: "Mini Physics Engine",
        description: "Development of a C++ physics engine using OpenFramework: collision handling and dynamic simulation within an R&D course at UQAC.",
        image: "Assets/Moteur.png",
        tags: ["C++", "OpenFramework", "Physics", "R&D"],
        link: "projects/Physics-Engine.html",
        status: "Completed" 
    },
    {
        title: "One Last Stake",
        description: "Game created on Unreal Engine 5 in 48h for the Wonderjam UQAC Fall 2025. Available on Itch.io.",
        image: "Assets/OneLastStake.png",
        tags: ["Unreal Engine 5", "Game Jam", "48h", "C++"],
        link: "projects/OneLastStake.html",
        status: "Completed"
    },
    {
        title: "Borealis",
        description: "Creation of a complete game prototype (Game Design & Code) as part of a university course at UQAC.",
        image: "Assets/Borealis.png",
        tags: ["UQAC", "Prototype", "Game Design"],
        link: "projects/Borealis.html",
        status: "Prototype" 
    },
    {
        title: "Violence is always the Answer",
        description: "Game created in 72h for the Mini Jam 167 on Godot. Ranked and playable online.",
        image: "Assets/VIAS.png",
        tags: ["Godot", "Game Jam", "GDScript", "72h"],
        link: "projects/VIAS.html",
        status: "Completed" 
    },
    {
        title: "Meteo VR Project",
        description: "Project created to learn basics technologies in Unity VR (OpenXR), with a context of an Meteo application.",
        image: "Assets/MeteoVR.png",
        tags: ["Unity", "Student Project", "VR", "C#"],
        link: "projects/MeteoVR.html",
        status: "Completed"
    }/*,
    {
        title: "Corpjackers",
        description: "...",
        image: "Assets/Corpjackers.png",
        tags: ["UE5", "Project", "Game Network", "Teamwork"],
        link: "projects/CorpJackers.html",
        status: "On Going" 
    }*/
];

const container = document.getElementById('projects-container');

// Clear container to avoid duplicates
container.innerHTML = '';

projects.forEach(project => {
    const card = document.createElement('div');
    card.classList.add('project-card');

    // Génération des tags
    const tagsHtml = project.tags.map(tag => `<span>${tag}</span>`).join('');

    // Génération du lien
    const linkHtml = project.link && project.link !== "#"
        ? `<a href="${project.link}" target="_self" class="project-link">View Project →</a>`
        : '';

    // LOGIQUE DU STATUT (NOUVEAU)
    // On nettoie la chaîne (minuscule + sans espace) pour créer une classe CSS (ex: "On Going" -> "status-on-going")
    const statusClass = 'status-' + project.status.toLowerCase().replace(/\s+/g, '-');

    card.innerHTML = `
        <div class="image-container">
            <span class="status-badge ${statusClass}">${project.status}</span>
            <img src="${project.image}" alt="${project.title}">
        </div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="tags">${tagsHtml}</div>
        ${linkHtml}
    `;

    container.appendChild(card);
});