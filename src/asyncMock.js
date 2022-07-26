const products = [
    {
        id: '1',
        name: 'Chain Necklace',
        price: 1500,
        category: 'necklaces',
        img: 'https://images.unsplash.com/photo-1585711715631-1e6bf224f092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
        hover: 'https://images.unsplash.com/photo-1560925545-2df6efb5cc36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        stock: 20,
        description: 'High quality 18/23k gold bath (2 microns)'
    },
    {
        id: '2',
        name: 'Happy Sad Ring',
        price: 300,
        category: 'rings',
        img: 'https://ae01.alicdn.com/kf/H0158b36bb90c470595eb0df63c8d02d4J/Anillo-Punk-Vintage-con-cara-de-sonrisa-feliz-para-mujer-joyer-a-Bohemia-con-dijes-anillo.jpg_Q90.jpg_.webp',
        hover: 'https://ae01.alicdn.com/kf/Hd557c8f2000b43cc9d8bee08b19d012dN.jpg',
        stock: 10,
        description: ' Made of brass. 18/23k'
    },
    {
        id: '3',
        name: 'Pearl Bracelet',
        price: 700,
        category: 'bracelets',
        img: 'https://ae01.alicdn.com/kf/Sf665eb5e6ba14013918b16960ee7767bR.jpg',
        hover: 'https://ae01.alicdn.com/kf/Sa4c08d49a99f4ca7a440b57424ec91f6x.jpg',
        stock: 15,
        description: '19cm length. Made of cultured pearls'
    },
    {
        id: '4',
        name: 'Full Moon Earrings',
        price: 500,
        category: 'earrings',
        img: 'https://ae01.alicdn.com/kf/H1f46a6c1c93344eb83966b679341f951l.jpg',
        hover: 'https://ae01.alicdn.com/kf/H3f5019dca2bb4b24be3b7ceaa0c96694J.jpg',
        stock: 5,
        description: "Diameter of 30mm & 3.5mm thick"
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 3000)
    })
}