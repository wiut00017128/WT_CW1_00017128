const navbar = document.querySelector('.navbar');
const navbarMenuList = document.querySelector('.navbar-menu-list');
const toggleMenu = document.querySelector('#toggleMenu');
if (window.screen.width > 892) {
    navbarMenuList.classList.remove("navbar-active")
    navbarMenuList.classList.add("list")
}

if (toggleMenu) {
    toggleMenu.addEventListener("click", function () {
        navbarMenuList.classList.toggle("navbar-active")
    })
}


const footer = document.createElement("footer")
footer.innerHTML = `
    <div class="footer">
        <div class="footer-content">
            Copyright 2022 &copy; All Rights Reserved
        </div>
    </div>
`
document.body.append(footer)