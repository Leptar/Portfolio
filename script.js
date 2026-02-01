// Data updated from your CV "Cheikh-Boukal Léo CV FR-1"
const projects = [
    {
        title: "Mini Physics Engine",
        description: "Development of a C++ physics engine using OpenFramework: collision handling and dynamic simulation within an R&D course at UQAC.",
        image: "assets/images/physics.jpg",
        tags: ["C++", "OpenFramework", "Physics", "R&D"],
        link: "https://github.com/Leptar/AYLMoteurPhysique"
    },
    {
        title: "One Last Stake",
        description: "Game created on Unreal Engine 5 in 48h for the Wonderjam UQAC Fall 2025. Available on Itch.io.",
        image: "assets/images/stake.jpg",
        tags: ["Unreal Engine 5", "Game Jam", "48h", "C++"],
        link: "https://eyrone.itch.io/one-last-stake"
    },
    {
        title: "Borealis",
        description: "Creation of a complete game prototype (Game Design & Code) as part of a university course at UQAC.",
        image: "assets/images/borealis.jpg",
        tags: ["UQAC", "Prototype", "Game Design"],
        link: "https://tomdouaud.itch.io/borealis"
    },
    {
        title: "Violence is always the Answer",
        description: "Game created in 72h for the Mini Jam 167 on Godot. Ranked and playable online.",
        image: "assets/images/jam.jpg",
        tags: ["Godot", "Game Jam", "GDScript", "72h"],
        link: "https://tomdouaud.itch.io/violence-is-always-the-anwser"
    }
];

const container = document.getElementById('projects-container');

// Clear container to avoid duplicates
container.innerHTML = '';

projects.forEach(project => {
    const card = document.createElement('div');
    card.classList.add('project-card');

    const tagsHtml = project.tags.map(tag => `<span>${tag}</span>`).join('');

    // Conditional Button
    const linkHtml = project.link && project.link !== "#"
        ? `<a href="${project.link}" target="_blank" class="project-link">View Project →</a>`
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