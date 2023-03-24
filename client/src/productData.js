export function generateProductData() {
  return [
      {
        id: 1,
        name: 'Yeezy 500 Blush',
        description: 'A classic shoe from Kanye West’s Yeezy collection.',
        price: 2800,
        images: [
          "https://cdn.shopify.com/s/files/1/0518/9884/3310/products/adidas-500-yeezy-boost-500-taupe-light-379565_grande.png?v=1662260126",
        ],
        availableSizes: ['US 7', 'US 8', 'US 9'],
        brand: 'Yeezy',
        color: 'Beige',
        style: 'Running Shoes',
        material: 'Leather and Synthetic',
        gender: 'Men',
        category: 'Sneakers',
        reviews: [
          {
            id: 1,
            rating: 4,
            text: 'Great shoe, very comfortable and stylish.',
            date: '2022-01-15'
          },
          {
            id: 2,
            rating: 5,
            text: 'Love these shoes, they fit perfectly and look great!',
            date: '2022-02-03'
          }
        ]
      },
      {
        id: 2,
        name: 'Nike Air Jordan 1 Mid Chicago',
        description: 'A retro style shoe from Nike’s Jordan collection.',
        price: 2700,
        images: [
          "http://cdn.shopify.com/s/files/1/0548/7362/0655/products/air-jordan-1-mid-chicago-1-1000.png?v=1622015384"        
        ],
        availableSizes: ['US 8', 'US 9', 'US 10'],
        brand: 'Nike',
        color: 'Black/White/Red',
        style: 'Basketball Shoes',
        material: 'Leather and Synthetic',
        gender: 'Men',
        category: 'Sneakers',
        reviews: [
          {
            id: 1,
            rating: 3,
            text: 'Decent shoes, but not as comfortable as I had hoped.',
            date: '2022-03-10'
          },
          {
            id: 2,
            rating: 4,
            text: 'Solid shoes, great for everyday wear.',
            date: '2022-04-02'
          }
        ]
      },
      {
        id: 3,
        name: 'Nike Dunk Low',
        description: 'The Nike Dunk Low is a versatile shoe that can be dressed up or down, and features a durable leather upper and a rubber outsole for traction.',
        price: 1600,
        images: [
          "http://cdn.shopify.com/s/files/1/0518/9884/3310/products/nike-dunk-low-dunk-low-clear-blue-swoosh-607340.png?v=1662264262",
        ],
        availableSizes: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11'],
        brand: 'Nike',
        color: 'White/Black',
        style: 'Skate Shoes',
        material: 'Leather and Synthetic',
        gender: 'Men',
        category: 'Sneakers',
        reviews: [
          {
            id: 1,
            rating: 5,
            text: 'Amazing shoes, love the classic design and great quality.',
            date: '2022-05-20'
          },
          {
            id: 2,
            rating: 4,
            text: 'Solid shoes, very durable and comfortable.',
            date: '2022-06-15'
          }
        ]
      },
      {
        id: 4,
        name: 'New Balance 550',
        description: 'A classic shoe from New Balance that has been re-released in recent years.',
        price: 1200,
        images: [
          "https://cdn.shopify.com/s/files/1/0611/8437/7026/products/NEWBALANCE550WHITEGREENBLACK1_740x.png?v=1650148345",
        ],
        availableSizes: ['US 7', 'US 8', 'US 9'],
        brand: 'New Balance',
        color: 'Black/White/Green',
        style: 'Casual Shoes',
        material: 'Leather',
        gender: 'Men',
        category: 'Sneakers',
        reviews: [
          {
            id: 1,
            rating: 4,
            text: 'Great shoe, very comfortable and stylish.',
            date: '2022-01-15'
          },
          {
            id: 2,
            rating: 5,
            text: 'Love these shoes, they fit perfectly and look great!',
            date: '2022-02-03'
          }
        ]
      },
      {
        id: 5,
        name: 'Nike Air Force 1 Low',
        description: 'A classic shoe from New Balance that is known for its sleek design and comfortable fit.',
        price: 12600,
        images: [
          "https://cdn.restocks.net/cdn-cgi/image/width=1000/storage/images/products/AQ4211-100/1.png",
        ],
        availableSizes: ['US 7', 'US 8', 'US 9'],
        brand: 'Nike',
        color: 'Red',
        style: 'Running Shoes',
        material: 'Leather and Synthetic',
        gender: 'Men',
        category: 'Sneakers',
        reviews: [
          {
            id: 1,
            rating: 4,
            text: 'Great shoe, very comfortable and stylish.',
            date: '2022-01-15'
          },
          {
            id: 2,
            rating: 5,
            text: 'Love these shoes, they fit perfectly and look great!',
            date: '2022-02-03'
          }
        ]
      },      
    ]
  }
  

export default generateProductData