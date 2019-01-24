"use strict";
var lagerf = {
    showLager: function() {
        var n;

        function e() {
            window.produkt.showProdukt(this)
        }
        window.mainContainer.innerHTML = "", fetch("https://lager.emilfolino.se/products?api_key=a715b9f4a41c0d18658bfd033f90e405").then(function(n) {
            return n.json()
        }).then(function(a) {
            var i = document.createElement("h2");
            i.className = "productName", i.innerHTML = "Lagerförteckning<br>", window.mainContainer.appendChild(i);
            var t = document.createElement("p");
            t.className = "namesProdList", t.innerHTML = "<strong><span id='left'>Namn:</span><span id='space'></span>Antal:<br></srong>", window.mainContainer.appendChild(t), a.data.forEach(function(a) {
                (n = document.createElement("p")).className = "lagerList", n.id = a.id, n.innerHTML = "<span id='left'>" + a.name + "</span><span id='space'></span>" + a.stock, n.addEventListener("click", e), window.mainContainer.appendChild(n)
            })
        }), window.rootElement.appendChild(window.mainContainer), window.menu.showMenu("lager")
    }
};
