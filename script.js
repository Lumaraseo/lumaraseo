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
  // Mostrar la Pestaña 1 por defecto si existe
  const defaultTabButton = document.querySelector("#tab1");
  if (defaultTabButton) {
    openTab("tab1", defaultTabButton);
  }
});

function openTab(tabName, clickedTab) {
  var i, tabs;

  // Desactiva la clase 'active' en todas las pestañas, si existen
  tabs = document.getElementsByClassName("tab");
  for (i = 0; i < tabs.length; i++) {
    if (tabs[i]) tabs[i].classList.remove("active");
  }

  // Verifica si clickedTab existe antes de intentar agregarle la clase 'active'
  if (clickedTab) clickedTab.classList.add("active");

  // Oculta todos los elementos con clase "tab-content", si existen
  const tabContents = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContents.length; i++) {
    if (tabContents[i]) tabContents[i].classList.remove("active");
  }

  // Verifica si el contenido de la pestaña seleccionada existe antes de intentar mostrarlo
  const selectedTabContent = document.getElementById(tabName);
  if (selectedTabContent) selectedTabContent.classList.add("active");
}

(() => {
  "use strict";

  // Inicializar la validación de Bootstrap en el formulario
  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

// Inicialización de EmailJS con tu publicKey

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  if (form) {
    (function () {
      emailjs.init("xQxgwXqenHE-4vp6i");
    })();

    form.addEventListener(
      "submit",
      function (event) {
        event.preventDefault();

        if (form.checkValidity()) {
          emailjs.sendForm("service_8qb5y4b", "template_iiltbxb", this).then(
            function () {
              console.log("SUCCESS!");
              Swal.fire({
                icon: "success",
                title: "Success!",
                text: "Your message has been sent successfully.",
              });
              form.reset();
              form.classList.remove("was-validated");
            },
            function (error) {
              console.log("FAILED...", error);
              Swal.fire({
                icon: "error",
                title: "Error",
                text: "The message could not be sent, please try again.",
              });
            }
          );
        } else {
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  }
});

function toggleWebsiteInput() {
  const hasWebsite = document.getElementById("hasWebsite").value;
  const websiteInput = document.getElementById("website");

  if (hasWebsite === "yes") {
    websiteInput.disabled = false;
    websiteInput.required = true;
    websiteInput.focus();
  } else {
    websiteInput.disabled = true;
    websiteInput.required = false;
    websiteInput.value = "";
  }
}

if (document.getElementById("hasWebsite")) {
  document
    .getElementById("hasWebsite")
    .addEventListener("change", toggleWebsiteInput);
}
