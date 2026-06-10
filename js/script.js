// MODAL LOGIN

const modal = document.getElementById("modal");

const openModal = document.getElementById("openModal");

const openModalHero = document.getElementById("openModalHero");

const closeModal = document.getElementById("closeModal");

openModal.addEventListener("click", () => {

    modal.style.display = "flex";

});

openModalHero.addEventListener("click", () => {

    modal.style.display = "flex";

});

closeModal.addEventListener("click", () => {

    modal.style.display = "none";

});

window.addEventListener("click", (e) => {

    if(e.target === modal){

        modal.style.display = "none";

    }

});

// MENU MOBILE

const menuMobile = document.getElementById("menuMobile");

const menu = document.querySelector(".menu");

menuMobile.addEventListener("click", () => {

    menu.classList.toggle("active");

});

// ANIMAÇÃO AO ROLAR

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", revealElements);

function revealElements(){

    const windowHeight = window.innerHeight;

    reveals.forEach((element) => {

        const elementTop = element.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){

            element.classList.add("active");

        }

    });

}