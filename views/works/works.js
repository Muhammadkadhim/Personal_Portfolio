window.onload = function () {
  let works = [
    {
      id: id(),
      name: "React Navbar",
      description: "a nice responsive navbar",
      techs: "React.js",
    },
    {
      id: id(),
      name: "Kalkulator",
      description: "A simple javascript calculator",
      techs: "HTML, CSS, Javascript",
    },
    {
      id: id(),
      name: "Unsplash Image Resizer",
      description: "Resizing unsplash images using javascript",
      techs: "HTML, bootstrap, Javascript",
    },
    {
      id: id(),
      name: "DoList",
      description: "A nice todo list app",
      techs: "React.js",
    },

    {
      id: id(),
      name: "YouTube Clone",
      description: "A simple youtube clone app",
      techs: "React.js, Axios",
    },
  ];

  // generating random ID
  function id() {
    return Math.random().toString(36).slice(2);
  }

  // adding works to the DOM
  let worksContainer = document.getElementById("work-container");
  works.forEach((work) => {
    let anacher = document.createElement("a");
    anacher.setAttribute("id", "work");
    anacher.setAttribute("href", "#works");

    let workDiv = document.createElement("div");
    workDiv.classList.add("work");
    anacher.appendChild(workDiv);

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

    worksContainer.appendChild(anacher);
  });
};
