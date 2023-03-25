export function generateProductData() {
  return [
      {
        id: 1,
        model: '500 Blush',
        description: 'The Adidas Yeezy Boost 500 "Blush" is a classic shoe from Kanye West’s Yeezy collection. The upper of the sneaker is constructed with premium materials, featuring cow suede, premium leather and mesh with nubuck accents. The midsole utilizes adidas’ Adiprene cushioning technology. The design of the shoe is simple, with a neutral colorway and minimal branding. This shoe is perfect for casual wear or as part of a stylish outfit.',
        price: 2800,
        images: [
          "https://cdn.shopify.com/s/files/1/0518/9884/3310/products/adidas-500-yeezy-boost-500-taupe-light-379565_grande.png?v=1662260126",
        ],
        availableSizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46'],
        brand: 'Yeezy',
        color: 'Blush',
        style: 'Running Shoes',
        material: 'Leather and Synthetic',
        gender: 'Men',
        category: 'Sneakers',
        reviews: [
          {
            id: 1,
            rating: 4,
            text: 'Great shoe, very comfortable and stylish. Fits true to size.',
            date: '2022-01-15'
          },
          {
            id: 2,
            rating: 5,
            text: 'Love these shoes, they fit perfectly and look great! The blush color is really nice.',
            date: '2022-02-03'
          }
        ]
      },
      {
        id: 2,
        model: 'Air Jordan 1 Mid Chicago',
        description: 'The Nike Air Jordan 1 Mid Chicago is a retro version of the iconic shoe worn by Michael Jordan during his rookie season. Featuring a classic red and black colorway with white accents, these sneakers are perfect for both on and off the court.',
        price: 1999,
        images: [
          "http://cdn.shopify.com/s/files/1/0548/7362/0655/products/air-jordan-1-mid-chicago-1-1000.png?v=1622015384",
        ],
        availableSizes: ['35', '36', '37', '38', '39'],
        brand: 'Nike',
        color: 'Red/Black/White',
        style: 'Basketball Shoes',
        material: 'Leather and Synthetic',
        gender: 'Unisex',
        category: 'Sneakers',
        reviews: [
          {
            id: 1,
            rating: 5,
            text: 'Absolutely love these shoes! They are so comfortable and stylish.',
            date: '2022-02-15'
          },
          {
            id: 2,
            rating: 4,
            text: 'Great shoes, but they run a bit small so order a half size up.',
            date: '2022-03-05'
          }
        ]
      },      
      {
        id: 3,
        model: 'Panda Dunk Low',
        description: "The Nike Panda Dunk Low is a stylish and versatile sneaker that combines classic design with modern comfort. Featuring a clean black and white colorway with a bold panda graphic on the side, these sneakers are sure to turn heads. The upper is made of premium leather and suede, while the midsole provides responsive cushioning for all-day comfort. Whether you're hitting the streets or just hanging out, the Nike Panda Dunk Low is the perfect choice",
        price: 1500,
        images: [
          "https://cdn.shopify.com/s/files/1/0518/9884/3310/products/nike-dunk-dunk-low-panda-world-champ-290334.png?v=1662257161"
        ],
        availableSizes: ['EU 36', 'EU 37', 'EU 38', 'EU 39', 'EU 40'],
        brand: 'Nike',
        color: 'Black/White',
        style: 'Basketball Shoes',
        material: 'Leather',
        gender: 'Unisex',
        category: 'Sneakers',
        reviews: [
          {
            id: 1,
            rating: 5,
            text: 'Love these sneakers! They are so comfortable and look great!',
            date: '2022-02-20'
          },
          {
            id: 2,
            rating: 4,
            text: 'The design is really cool, but they run a bit small.',
            date: '2022-03-01'
          }
        ]
      },
      {
        id: 4,
        model: '550 White',
        description: "The New Balance 550 White is a retro-inspired sneaker that blends vintage style with modern comfort. These sneakers feature a clean white leather upper with perforated detailing for breathability, as well as classic New Balance branding on the side. The midsole is made of EVA foam for lightweight cushioning, while the rubber outsole provides durable traction. With its timeless design and superior comfort, the New Balance 550 White is a must-have for any sneakerhead.",
        price: 1200,
        images: [
          'https://cdn.shopify.com/s/files/1/0594/7781/9562/products/freskiCulture-Sneakers-France-New-Balance-550-White-Grey-BB550PB1-1_2000x_b7706415-abdd-4f8d-b02b-9debf3b8584a.png?v=1674661173&width=1445'
        ],
        availableSizes: ['EU 38', 'EU 39', 'EU 40', 'EU 41', 'EU 42'],
        brand: 'New Balance',
        color: 'White',
        style: 'Lifestyle Shoes',
        material: 'Leather',
        gender: 'Women',
        category: 'Sneakers',
        reviews: [
          {
            id: 1,
            rating: 4,
            text: 'These shoes are really comfortable and versatile.',
            date: '2022-02-15'
          },
          {
            id: 2,
            rating: 3,
            text: 'The fit is a bit snug, but overall a great shoe.',
            date: '2022-03-05'
          }
        ]
      },
      {
        id: 5,
        model: 'Air Force 1 Low x Travis Scott',
        description: 'The Nike Air Force 1 Low x Travis Scott features a mix of materials including canvas, leather, and suede. The shoe is mainly white with hits of beige and brown throughout. The shoe is finished off with Travis Scott branding on the tongue and a gum outsole.',
        price: 17000,
        images: [
          "https://cdn.restocks.net/cdn-cgi/image/width=1000/storage/images/products/AQ4211-100/1.png",
        ],
        availableSizes: ['40', '42', '45'],
        brand: 'Nike',
        color: 'White/Beige/Brown',
        style: 'Basketball Shoes',
        material: 'Canvas/Leather/Suede',
        gender: 'Men',
        category: 'Sneakers',
        reviews: [
          {
            id: 1,
            rating: 5,
            text: 'Amazing shoes, so comfortable and stylish!',
            date: '2022-03-10'
          },
          {
            id: 2,
            rating: 4,
            text: 'Great shoe, love the design and the materials used.',
            date: '2022-03-17'
          }
        ]
      },
      {
        id: 6,
        model: 'Air Jordan 1 Low Smoke Grey',
        description: "The Air Jordan 1 Low Smoke Grey features a leather upper with suede overlays, a padded collar for comfort, and a rubber outsole for traction.",
        price: 1500,
        images: [
          'http://cdn.shopify.com/s/files/1/0611/8437/7026/products/AIRJORDAN1LOWSMOKEGREY1_1200x1200.png?v=1650890826'
        ],
        availableSizes: ['EU 38', 'EU 39', 'EU 40', 'EU 41', 'EU 42'],
        brand: 'Nike',
        color: 'White',
        style: 'Lifestyle Shoes',
        material: 'Leather',
        gender: 'Women',
        category: 'Sneakers',
        reviews: [
          {
            id: 1,
            rating: 4,
            text: 'These shoes are really comfortable and versatile.',
            date: '2022-02-15'
          },
          {
            id: 2,
            rating: 3,
            text: 'The fit is a bit snug, but overall a great shoe.',
            date: '2022-03-05'
          }
        ]
      },
    ]
  }
  

export default generateProductData