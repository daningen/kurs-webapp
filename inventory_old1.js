'use strict';

var inventory = (function() {
    var showInventory = function() {
        window.mainContainer.innerHTML = '';
        var n = document.createElement('h1'),
            t = document.createElement('table');
        n.textContent = 'Lager',
            t.className = 'inventory',
            fetch('https://lager.emilfolino.se/products?api_key=77bdac205c63491e0e8c075a73a3857a')
            .then(function(response) {
                return response.json()
            })
            .then(function(data) {
                var e = '<tr><th>Produkt</th><th>Saldo</th></tr>';
                data.data.forEach(function(data) {
                        e += [
                            '<tr id=',
                            data.id,
                            '>',
                            '<td>',
                            data.name,
                            '</td>',
                            '<td>',
                            data.stock,
                            '</td>',
                            '</tr>'
                        ].join('')
                    }),
                    t.innerHTML = e,
                    t.addEventListener('click', function(t) {
                        produkt.showProduct(function(data, t) {
                            return data.data.filter(function(data) {
                                return data.id === parseInt(t)
                            })[0]
                        }(data, t.target.parentElement.id))
                    }),
                    window.mainContainer.appendChild(t),
                    window.rootElement.appendChild(window.mainContainer)
            }).catch(function(data) {
                console.log('The fetch operation failed due to the following error: ', data.message)
            }),
            window.mainContainer.appendChild(n),
            window.rootElement.appendChild(window.mainContainer),
            menu.showMenu('folder');
    };
    return {
        showInventory: showInventory
    };
    })(home);
