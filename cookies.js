/* Cookies */

const cookieBox = document.querySelector(".wrapper");

if (cookieBox) { // Verifica si cookieBox existe
    const acceptBtn = cookieBox.querySelector("button");

    if (acceptBtn) { // Verifica si acceptBtn existe
        acceptBtn.onclick = () => {
            // Estableciendo la cookie por 1 mes, después de un mes expirará automáticamente
            document.cookie = "CookieBy=CodingNepal; max-age=" + 60 * 60 * 24 * 30;
            if (document.cookie) { // Si la cookie está establecida
                cookieBox.classList.add("hide"); // Ocultar el cuadro de cookies
            } else { // Si la cookie no está establecida, entonces alertar un error
                alert("Cookie can't be set! Please unblock this site from the cookie setting of your browser.");
            }
        };
    }

    let checkCookie = document.cookie.indexOf("CookieBy=CodingNepal"); // Revisando nuestra cookie
    // Si la cookie está establecida entonces oculta el cuadro de cookies, si no, muéstralo
    checkCookie != -1 ? cookieBox.classList.add("hide") : cookieBox.classList.remove("hide");
}