/* global menu */

"use strict";

var about = (function () {
    var showAbout = function () {
        window.mainContainer.innerHTML = "";

        var title = document.createElement("h1");

        title.className = "title";
        title.textContent = "Om";

        var greeting = document.createElement("p");

        greeting.textContent = "Dennnnna lager-applikation visar varor med information från lagret" +
            "Klicka på aktuell produkt för att se ytterligare information.;";
        window.mainContainer.appendChild(title);
        window.mainContainer.appendChild(greeting);

        window.rootElement.appendChild(window.mainContainer);

        menu.showMenu("free_breakfast");


    };

    return {
        showAbout: showAbout
    };
})(about);
