
/* Header Nav */

const nav = document.querySelector("#nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

open.addEventListener("click", () => {
  nav.classList.add("visible");
});

close.addEventListener("click", () => {
  nav.classList.remove("visible");
});

/* Google Analitycs */

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "G-329J6BK6HG");


/* Advanced Tabs module */

document.addEventListener("DOMContentLoaded", function () {
  // Mostrar la Pestaña 1 por defecto
  openTab("tab1", document.querySelector("#tab1"));
});

function openTab(tabName, clickedTab) {
  var i, tabs;

  // Desactiva la clase 'active' en todas las pestañas
  tabs = document.getElementsByClassName("tab");
  for (i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }

  // Activa la clase 'active' solo en la pestaña clickeada
  clickedTab.classList.add("active");

  // Oculta todos los elementos con clase "tab-content"
  var tabContents = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContents.length; i++) {
    tabContents[i].classList.remove("active");
  }

  // Muestra el contenido de la pestaña seleccionada
  document.getElementById(tabName).classList.add("active");
}





