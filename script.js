const projectsData = {
    en: [
                {
            title: "Night & Shift",
            description: "Inspired by Five Nights at Freddy's and Willy's Wonderland, Night & Shift thrusts you into a tense horror experience. Student project (Unreal Engine).",
            image: "https://img.itch.zone/aW1nLzI4MTQ2ODU0LnBuZw==/original/OEW+vv.png",
            tags: ["Unreal Engine", "Horror", "Student Project", "First-Person"],
            link: "projects/NightAndShift.html",
            status: "Completed"
        },
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
        }
    ],
    fr: [
                {
            title: "Night & Shift",
            description: "Inspiré par Five Nights at Freddy's et Willy's Wonderland, Night & Shift vous plonge dans une expérience horrifique. Projet étudiant (Unreal Engine).",
            image: "https://img.itch.zone/aW1nLzI4MTQ2ODU0LnBuZw==/original/OEW+vv.png",
            tags: ["Unreal Engine", "Horreur", "Projet Étudiant", "First-Person"],
            link: "projects/NightAndShift.html",
            status: "Completed"
        },
        {
            title: "Mini Moteur Physique",
            description: "Développement d'un moteur physique C++ avec OpenFramework : gestion des collisions et simulation dynamique (cours R&D à l'UQAC).",
            image: "Assets/Moteur.png",
            tags: ["C++", "OpenFramework", "Physique", "R&D"],
            link: "projects/Physics-Engine.html",
            status: "Completed"
        },
        {
            title: "One Last Stake",
            description: "Jeu créé sur Unreal Engine 5 en 48h pour la Wonderjam UQAC Automne 2025. Disponible sur Itch.io.",
            image: "Assets/OneLastStake.png",
            tags: ["Unreal Engine 5", "Game Jam", "48h", "C++"],
            link: "projects/OneLastStake.html",
            status: "Completed"
        },
        {
            title: "Borealis",
            description: "Création d'un prototype de jeu complet (Game Design & Code) dans le cadre d'un cours universitaire à l'UQAC.",
            image: "Assets/Borealis.png",
            tags: ["UQAC", "Prototype", "Game Design"],
            link: "projects/Borealis.html",
            status: "Prototype"
        },
        {
            title: "Violence is always the Answer",
            description: "Jeu créé en 72h pour la Mini Jam 167 sur Godot. Classé et jouable en ligne.",
            image: "Assets/VIAS.png",
            tags: ["Godot", "Game Jam", "GDScript", "72h"],
            link: "projects/VIAS.html",
            status: "Completed"
        },
        {
            title: "Projet Météo VR",
            description: "Projet créé pour apprendre les technologies de base en Unity VR (OpenXR), dans le contexte d'une application météo.",
            image: "Assets/MeteoVR.png",
            tags: ["Unity", "Projet Étudiant", "VR", "C#"],
            link: "projects/MeteoVR.html",
            status: "Completed"
        }
    ]
};

function renderProjects() {
    const lang = localStorage.getItem('lang') || 'en';
    const projects = projectsData[lang];
    const container = document.getElementById('projects-container');

    if (!container) return;

    // Clear container to avoid duplicates
    container.innerHTML = '';

    projects.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('project-card');

        // Génération des tags
        const tagsHtml = project.tags.map(tag => `<span>${tag}</span>`).join('');

        // Text for View Project depending on language
        const viewProjectText = lang === 'en' ? 'View Project →' : 'Voir le Projet →';

        // Génération du lien
        const linkHtml = project.link && project.link !== "#"
            ? `<a href="${project.link}" target="_self" class="project-link">${viewProjectText}</a>`
            : '';

        // Status text localized mapping
        const statusMap = {
            'Completed': lang === 'en' ? 'Completed' : 'Terminé',
            'Prototype': lang === 'en' ? 'Prototype' : 'Prototype',
            'On Going': lang === 'en' ? 'On Going' : 'En cours',
            'Abandoned': lang === 'en' ? 'Abandoned' : 'Abandonné'
        };

        const displayStatus = statusMap[project.status] || project.status;

        // LOGIQUE DU STATUT (NOUVEAU)
        // On nettoie la chaîne (minuscule + sans espace) pour créer une classe CSS (ex: "On Going" -> "status-on-going")
        const statusClass = 'status-' + project.status.toLowerCase().replace(/\s+/g, '-');

        // Add the full card link if there is a link
        const fullLinkHtml = project.link && project.link !== "#"
            ? `<a href="${project.link}" class="card-full-link">${project.title}</a>`
            : '';

        card.innerHTML = `
            ${fullLinkHtml}
            <div class="image-container">
                <span class="status-badge ${statusClass}">${displayStatus}</span>
                <img src="${project.image}" alt="${project.title}">
            </div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tags">${tagsHtml}</div>
            ${linkHtml}
        `;

        container.appendChild(card);
    });
}

// Initial render
document.addEventListener('DOMContentLoaded', renderProjects);

// Re-render when language changes
window.addEventListener('languageChanged', renderProjects);
