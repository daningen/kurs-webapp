"use strict";
var welcome = {
    showWelcome: function() {
        window.mainContainer.innerHTML = "";
        var n = document.createElement("h2");
        n.className = "title", n.textContent = "Välkommen";
        var e = document.createElement("p");
        e.className = "startInfo", e.textContent = "Med denna lager app kan du se vilka varor som finns på lagret och antalet. Klicka på produkt namn för att se ytterligare information om produkten.", window.mainContainer.appendChild(n), window.mainContainer.appendChild(e), window.rootElement.appendChild(window.mainContainer), window.menu.showMenu("home")
    }
};
