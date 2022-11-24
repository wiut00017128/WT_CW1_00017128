const project = document.querySelector(".project-types")
const links = ['greenwich.html', "myhelper.html", "parkwood.html", "pulpul.html", "ura.html", "weassist.html"]
const images = ["../images/greenwich-poster.jpg", "../images/myhelper-poster.jpg", "../images/parkwood.png", "../images/pulpul_poster.jpg", "../images/uraposter.jpg", "../images/weassist_poster.jpg"]
const desc = [
    {
        name: "Greenwich",
        type: "Branding"
    },
    {
        name: "My Helper",
        type: "Branding"
    },
    {
        name: "Parkwood",
        type: "Branding"
    },
    {
        name: "Pulpul",
        type: "Branding"
    },
    {
        name: "URA",
        type: "Branding"
    },
    {
        name: "We Assist",
        type: "Branding"
    },
]

for (let i = 0; i < 6; i++) {
    const projectItem = document.createElement("div")
    projectItem.className = "project-item"
    projectItem.innerHTML = `
    <a href="${links[i]}">
        <img src="${images[i]}" alt="image"/>
    </a>
    <section>
        <h1>${desc[i].name}</h1>
        <p>${desc[i].type}</p>
    </section>
    `
    project.appendChild(projectItem)
}

