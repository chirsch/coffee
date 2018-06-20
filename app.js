let app = new Vue({
    el: '#app',
    data: {
        title: 'Coffee Shop',
        categories: [
            { name: 'Coffee' },
            { name: 'Tea' }
        ],
        items: [
            {
                name: 'Drip' ,
                category: 'Coffee',
                notes: '',
                price: {
                    sm: 3.5,
                    md: 4,
                    lg: 4.5
                }
            }, {
                name: 'Espresso' ,
                category: 'Coffee',
                notes: '',
                price: {
                    sm: 3,
                    md: 3,
                    lg: 3
                }
            }, {
                name: 'Americano' ,
                category: 'Coffee',
                notes: 'All drinks priced as doubles',
                price: {
                    sm: 3,
                    md: 3,
                    lg: 3
                }
            }, {
                name: 'Macchiato' ,
                category: 'Coffee',
                notes: 'All drinks priced as doubles',
                price: {
                    sm: 3.25,
                    md: 3.25,
                    lg: 3.25
                }
            }, {
                name: 'Latte' ,
                category: 'Coffee',
                notes: '',
                price: {
                    sm: 4.25,
                    md: 4.75,
                    lg: 5.25
                }
            }, {
                name: 'Cappuccino' ,
                category: 'Coffee',
                notes: '',
                price: {
                    sm: 4.25,
                    md: 4.75,
                    lg: 5.25
                }
            }, {
                name: 'Mocha' ,
                category: 'Coffee',
                notes: '',
                price: {
                    sm: 4.5,
                    md: 5,
                    lg: 5.5
                }
            }, {
                name: 'Cold Brew' ,
                category: 'Coffee',
                notes: '',
                price: {
                    sm: 3.5,
                    md: 4,
                    lg: 4.5
                }
            }, {
                name: 'Hot or Iced' ,
                category: 'Tea',
                notes: '',
                price: {
                    sm: 3,
                    md: 3.25,
                    lg: 3.5
                }
            }, {
                name: 'Matcha Latte' ,
                category: 'Tea',
                notes: '',
                price: {
                    sm: 4,
                    md: 4.5,
                    lg: 5
                }
            }, {
                name: 'Chai Latte' ,
                category: 'Tea',
                notes: '',
                price: {
                    sm: 4,
                    md: 4.5,
                    lg: 5
                }
            }
        ]
    },
    filters: {
        currencyUSD: (value) => '$ ' + value.toFixed(2),
        toUpper: (value) => value.toUpperCase()
    }
})