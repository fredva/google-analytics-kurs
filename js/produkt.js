ga('require', 'ec');

ga('ec:addProduct', {
    'name': 'TV',
    'category': 'Lyd og bilde',
    'brand': 'Samsung',
    'variant': '50"',
    'price': '9999'
});

ga('ec:setAction', 'detail');

ga('send', 'pageview');
