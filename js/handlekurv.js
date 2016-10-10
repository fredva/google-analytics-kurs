ga('require', 'ec');

ga('ec:addProduct', {
    'name': 'TV',
    'category': 'Lyd og bilde',
    'brand': 'Samsung',
    'variant': '50"',
    'price': '9999',
    'quantity': 2
});

ga('ec:setAction','checkout', {
    'step': 1
});

ga('send', 'pageview');
