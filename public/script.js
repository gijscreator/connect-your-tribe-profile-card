const openMenuButton = document.querySelector(".openmenubutton");
const closeMenuButton = document.querySelector(".closemenubutton");
const menu = document.querySelector(".menu");

openMenuButton.addEventListener("click", () => {
    menu.classList.add("active");
});

closeMenuButton.addEventListener("click", () => {
    menu.classList.remove("active");
});
