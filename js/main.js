// navbar menu
document.getElementById("menu-btn").addEventListener("click", () => {
    document.getElementById("menu").classList.toggle("toggled");
});

// end of navbar menu

// loading works into the DOM
let works = [
    {
        id: id(),
        name: "Kalkulator",
        description: "A simple javascript calculator",
        techs: "HTML, CSS, Javascript",
        link: "https://web-kalkulator.netlify.app",
    },
    {
        id: id(),
        name: "Unsplash Image Resizer",
        description: "Resizing unsplash images using javascript",
        techs: "HTML, bootstrap, Javascript",
        link: "https://unsplash-image-resizer.netlify.app",
    },
    {
        id: id(),
        name: "DoList",
        description: "A nice todo list app",
        techs: "React.js",
        link: "https://keeeper-app.netlify.app",
    },

    {
        id: id(),
        name: "YouTube Clone",
        description: "A simple youtube clone app",
        techs: "React.js, Axios",
        link: "https://youtube-clone-navy-eight.vercel.app/",
    },
    {
        id: id(),
        name: "Portfolio Landing Page",
        description: "a nice landing page for portfolio",
        techs: "React.js",
        link: "https://portfolio-landing-page-web.vercel.app/",
    },
    {
        id: id(),
        name: "Responsive Navbar",
        description: "a nice responsive navigation bar",
        techs: "Vite.js",
        link: "https://vite-responsive-navbar.vercel.app/",
    },
];

// generating random ID
function id() {
    return Math.random().toString(36).slice(2);
}

// adding works to the DOM
let worksContainer = document.getElementById("work-container");
let animeDelay = 300;
works.forEach((work) => {
    let ancherTag = document.createElement("a");
    ancherTag.setAttribute("id", "work");
    ancherTag.setAttribute("href", `${work.link}`);
    ancherTag.setAttribute("target", `_blank`);
    ancherTag.setAttribute("data-aos", "fade-up");
    ancherTag.setAttribute("data-aos-delay", `${animeDelay}`);
    ancherTag.setAttribute("data-aos-easing", "linear");

    let workDiv = document.createElement("div");
    workDiv.classList.add("work");
    ancherTag.appendChild(workDiv);

    let iconDiv = document.createElement("div");
    iconDiv.classList.add("icons");
    workDiv.appendChild(iconDiv);

    let folderIcon = document.createElement("span");
    folderIcon.classList.add("iconify");
    folderIcon.setAttribute("data-icon", "akar-icons:folder");
    iconDiv.appendChild(folderIcon);

    let heading3 = document.createElement("h3");
    heading3.classList.add("name");
    heading3.appendChild(document.createTextNode(`${work.name}`));
    workDiv.appendChild(heading3);

    let description = document.createElement("div");
    description.classList.add("description");
    description.appendChild(document.createTextNode(`${work.description}`));
    workDiv.appendChild(description);

    let techsDiv = document.createElement("div");
    techsDiv.classList.add("used-techs");
    techsDiv.appendChild(document.createTextNode(`${work.techs}`));
    workDiv.appendChild(techsDiv);

    worksContainer.appendChild(ancherTag);

    animeDelay = animeDelay * 1.5;
    console.log(animeDelay);
});

// end of loading the works into the dom

// AOS initialization
AOS.init();
