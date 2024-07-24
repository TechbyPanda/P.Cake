products = [
    {
        name: "Chocolate cake",
        price: 18,
        rating: 0,
        quantity: 5,
        image: 'https://www.fnp.com/assets/images/custom/cakes_23/flavour/Truffle-Cakes_web.jpg'
    },
    {
        name: "truffle cake",
        price: 15,
        rating: 3,
        quantity: 5,
        image: 'https://www.fnp.com/assets/images/custom/cakes_23/flavour/Truffle-Cakes_web.jpg'
    },
    {
        name: "fresh fruit cakes",
        price: 15,
        rating: 3,
        quantity: 5,
        image: 'https://www.fnp.com/assets/images/custom/cakes_23/flavour/Fresh-Fruit-Cakes_web.jpg'
    },
    {
        name: "choco cake",
        price: 250,
        rating: 4,
        quantity: 5,
        image: 'https://www.fnp.com/images/pr/l/v200/decorated-chocolate-truffle-cake-half-kg_1.jpg'
    },
    {
        name: "choco cake",
        price: 250,
        rating: 4,
        quantity: 5,
        image: 'https://www.fnp.com/images/pr/l/v200/decorated-chocolate-truffle-cake-half-kg_1.jpg'
    },
    {
        name: "chocolate truffle",
        price: 250,
        rating: 4,
        quantity: 5,
        image: 'https://www.fnp.com/images/pr/l/v200/chocolate-truffle-cream-cake-half-kg_1.jpg'
    },
    {
        name: "fudge brownie cake",
        price: 250,
        rating: 4,
        quantity: 5,
        image: 'https://www.fnp.com/images/pr/l/v200/fudge-brownie-cake-half-kg_1.jpg'
    },
    {
        name: "chocolate cream cake",
        price: 250,
        rating: 4,
        quantity: 5,
        image: 'https://www.fnp.com/images/pr/l/v200/chocolate-cream-cake-half-kg_1.jpg'
    },
]

Product.delete_all

products.each do |product|
    Product.create(product)
end