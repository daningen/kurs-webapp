"use strict";

var home = (function () {
    var showHome = function () {
        window.mainContainer.innerHTML = "";

        var title = document.createElement("h1");

        title.className = "title hoho";
        title.textContent = "Välkommen till min app";

        var greeting = document.createElement("p");
        var timeOfDayGreeting = "Hej";
        var now = new Date();

        if (now.getHours() <= 10) {
            timeOfDayGreeting = "Godmorgon";
        } else if (now.getHours() >= 17) {
            timeOfDayGreeting = "God kväll";
        }

        greeting.textContent = timeOfDayGreeting +
            ", denna lager-applikation visar varor med information från lagret. Klicka på aktuell produkt för att se ytterligare information ";

            //var image = document.createElement("img");

            //image.src = "danerlandsson.png";
            //image.alt = "Dan Erlandsson";

            window.mainContainer.appendChild(title);
            window.mainContainer.appendChild(greeting);
            //window.mainContainer.appendChild(image);

            window.rootElement.appendChild(window.mainContainer);
        menu.showMenu("home");
    };

    return {
        showHome: showHome
    };
})(home);
