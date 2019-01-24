/* global menu */

"use strict";

var lager = (function () {
    var showLager = function () {
        window.mainContainer.innerHTML = "";

        var title = document.createElement("h1");

        title.className = "title";
        title.textContent = "Lager";

        window.mainContainer.appendChild(title);

        fetch("https://lager.emilfolino.se/products?api_key=a715b9f4a41c0d18658bfd033f90e405").then(function (response) {
            return response.json();
        }).then(function(data) {
            data.forEach(function(repo) {
                var repoElement = document.createElement("p");

                repoElement.textContent = repo.name;
                window.mainContainer.appendChild(repoElement);
            });

            window.rootElement.appendChild(window.mainContainer);

            //menu.showMenu("folder");
        }).catch(function(error) {
            console.log('The fetch operation failed due to the following error: ', error.message);
        });
};

    return {
        showLager: showLager
    };
})(lager);
