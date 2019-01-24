'use strict';

var inventory = (function() {
    var showInventory = function() {
        window.mainContainer.innerHTML = '';
        var header = document.createElement('h1'),
            tabell = document.createElement('table');
        header.textContent = 'Lager',
            tabell.className = 'inventory',
            fetch('https://lager.emilfolino.se/products?api_key=42308409f21f912154e59c31d3f24612')
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                var tabContent = '<tr><th>Produkter</th><th>Antal</th></tr>';
                data.data.forEach(function(data) {
                        tabContent += [
                            '<tr id=' + data.id + '>',
                            '<td>' + data.name + '</td>',
                            '<td>' + data.stock + '</td>',
                            '<td>' + "hoppla" + '</td>',
                            '</tr>'
                        ].join('')

                    }),
                    console.log("innerHTML " + tabContent);
                    tabell.innerHTML = tabContent,
                    tabell.addEventListener('click', function(tabell) {
                        product.showProduct(function(data, tabell) {
                            return data.data.filter(function(data) {
                                return data.id === parseInt(tabell)
                            })[0]
                        }(data, tabell.target.parentElement.id))
                    }),
                    window.mainContainer.appendChild(tabell),
                    window.rootElement.appendChild(window.mainContainer)
            }).catch(function(data) {
                console.log('The fetch operation failed due to the following error: ', data.message)
            }),
            window.mainContainer.appendChild(tabell),
            window.rootElement.appendChild(window.mainContainer),
            menu.showMenu('folder');
    };
    return {
        showInventory: showInventory
    };
    })(home);
