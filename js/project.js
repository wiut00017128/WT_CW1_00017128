const project = document.querySelector('#project');
const greenWichImages = ["../images/greenwich-01.jpg", "../images/greenwich-02.jpg", "../images/greenwich-03.jpg", "../images/greenwich-04.jpg", "../images/greenwich-05.jpg", "../images/greenwich-06.jpg", "../images/greenwich-07.jpg", "../images/greenwich-09.jpg"]
const myhelperImages = ["../images/myhelper-2.jpg", "../images/myhelper-3.jpg", "../images/myhelper-4.jpg", "../images/myhelper-5.jpg", "../images/myhelper-6.jpg", "../images/myhelper-7.jpg"]
const parkwoodImages = ["../images/Parkwood - 01.jpg", "../images/Parkwood - 02.jpg", "../images/Parkwood - 03.jpg", "../images/Parkwood - 04.jpg", "../images/Parkwood - 05.jpg", "../images/Parkwood - 06.jpg"]
const uraImages = ["../images/ura_01.jpg", "../images/ura_02.jpg", "../images/ura_03.jpg", "../images/ura_04.jpg", "../images/ura_05.jpg"]
const pulpulImages = ["../images/pulpul_1.png", "../images/pulpul_2.png", "../images/pulpul_3.png", "../images/pulpul_4.png", "../images/pulpul_7.png", "../images/pulpul_8.png",]
const weAssistImages = ["../images/weassist-01.jpg", "../images/weassist-02.jpg", "../images/weassist-03.jpg", "../images/weassist-04.jpg", "../images/weassist-05.jpg", "../images/weassist-06.jpg"]

let path = window.location.pathname;
if (path === "/greenwich.html") {
    for (let i = 0; i < greenWichImages.length; i++) {
        const projectImgCard = document.createElement('div')
        projectImgCard.className = 'project-img'
        projectImgCard.innerHTML = `
        <img src="${greenWichImages[i]}" alt="project-image"/>
    `

        project.appendChild(projectImgCard)
    }
}
if (path === "/myhelper.html") {
    for (let i = 0; i < myhelperImages.length; i++) {
        const projectImgCard = document.createElement('div')
        projectImgCard.className = 'project-img'
        projectImgCard.innerHTML = `
        <img src="${myhelperImages[i]}" alt="project-image"/>
    `

        project.appendChild(projectImgCard)
    }
}
if (path === "/parkwood.html") {
    for (let i = 0; i < parkwoodImages.length; i++) {
        const projectImgCard = document.createElement('div')
        projectImgCard.className = 'project-img'
        projectImgCard.innerHTML = `
        <img src="${parkwoodImages[i]}" alt="project-image"/>
    `

        project.appendChild(projectImgCard)
    }
}

if (path === '/ura.html') {
    for (let i = 0; i < uraImages.length; i++) {
        const projectImgCard = document.createElement('div')
        projectImgCard.className = 'project-img'
        projectImgCard.innerHTML = `
        <img src="${uraImages[i]}" alt="project-image"/>
    `

        project.appendChild(projectImgCard)
    }
}

if (path === "/pulpul.html") {
    for (let i = 0; i < pulpulImages.length; i++) {
        const projectImgCard = document.createElement('div')
        projectImgCard.className = 'project-img'
        projectImgCard.innerHTML = `
        <img src="${pulpulImages[i]}" alt="project-image"/>
    `

        project.appendChild(projectImgCard)
    }
}

if (path === "/weassist.html") {
    for (let i = 0; i < weAssistImages.length; i++) {
        const projectImgCard = document.createElement('div')
        projectImgCard.className = 'project-img'
        projectImgCard.innerHTML = `
        <img src="${weAssistImages[i]}" alt="project-image"/>
    `

        project.appendChild(projectImgCard)
    }
}