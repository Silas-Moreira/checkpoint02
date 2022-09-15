const btMobile = document.getElementById("bt-mobile");

function toggleMenu(event) {
    if (event.type === "touchstart") event.preventDefault()
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
    const active = nav.classList.contains("active");
    event.currentTarget.setAttribute("aria-expanded", active);
    if (active) { 
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
    } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");   
    }
}

btMobile.addEventListener("click", toggleMenu);
btMobile.addEventListener("touchstart", toggleMenu);

const card = document.querySelector("#card")
card.addEventListener("click", (e)=>{
    card.classList.toggle("flip")
})