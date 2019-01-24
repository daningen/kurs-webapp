"use strict";
var produkt = {
    showProdukt: function(n) {
        window.mainContainer.innerHTML = "";
        var e = document.createElement("a");
        e.addEventListener("click", window.lagerf.showLager);
        var a = document.createElement("p");
        a.className = "backToLager", a.innerHTML = "&#10094 Lagerförteckning", e.appendChild(a), window.mainContainer.appendChild(e), fetch("https://lager.emilfolino.se/product/" + n.id + "?api_key=a715b9f4a41c0d18658bfd033f90e405").then(function(n) {
            return n.json()
        }).then(function(n) {
            var e = document.createElement("h4");
            e.className = "productName", e.innerHTML = n.data.name + "<br>", window.mainContainer.appendChild(e);
            var a = document.createElement("p");
            a.className = "showP", Object.keys(n.data).forEach(function(e) {
                a.innerHTML += "<strong>" + e + "</strong>: " + n.data[e] + "<br>", window.mainContainer.appendChild(a)
            })
        }), window.rootElement.appendChild(window.mainContainer), window.menu.showMenu("produkt")
    }
};
