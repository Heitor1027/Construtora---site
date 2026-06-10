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

// SIMULADOR DE ORÇAMENTO

const btnCalcular = document.querySelector(".orcamento-form button");

if(btnCalcular){

    btnCalcular.addEventListener("click", (e) => {

        e.preventDefault();

        const tipo = document.getElementById("tipoImovel").value;

        const metragem = Number(document.getElementById("metragem").value);

        const padrao = document.getElementById("padrao").value;

        let valorMetro = 0;

        if(padrao === "economico"){
            valorMetro = 1800;
        }

        if(padrao === "medio"){
            valorMetro = 2800;
        }

        if(padrao === "alto"){
            valorMetro = 4500;
        }

        let total = metragem * valorMetro;

        if(tipo === "comercial"){
            total *= 1.15;
        }

        const resultado = document.getElementById("resultadoOrcamento");

        if(!resultado){
            const novoResultado = document.createElement("div");
            novoResultado.id = "resultadoOrcamento";
            btnCalcular.parentNode.appendChild(novoResultado);
        }

        const resultadoElement = document.getElementById("resultadoOrcamento");

        resultadoElement.innerHTML = `
            <strong>Valor estimado:</strong><br><br>
            R$ ${total.toLocaleString("pt-BR")}
        `;

    });

}