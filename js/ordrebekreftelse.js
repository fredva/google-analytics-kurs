ga('require', 'ec');

ga('ec:addProduct', {
    'name': 'TV',
    'category': 'Lyd og bilde',
    'brand': 'Samsung',
    'variant': '50 tommer',
    'price': '9999',
    'quantity': 2
});

ga('ec:setAction', 'purchase', {
    'id': 'O1234',
    'revenue': '19998',
    'tax': '3999.6',
    'shipping': '0',
});


ga('send', 'pageview');
