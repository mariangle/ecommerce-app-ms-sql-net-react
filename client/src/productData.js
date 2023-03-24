export function generateProductData() {
  return [
      {
        id: 1,
        name: 'Nike Air Max 90',
        description: 'The Nike Air Max 90 is a classic shoe that features a visible air unit in the heel for cushioning and support.',
        price: 120.00,
        images: [
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d14fc386-1067-4a72-961e-9f8134680703/dunk-low-sko-csdjbw.png",
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d14fc386-1067-4a72-961e-9f8134680703/dunk-low-sko-csdjbw.png",
        ],
        availableSizes: ['US 7', 'US 8', 'US 9'],
        brand: 'Nike',
        color: 'White/Black/Cool Grey',
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
        name: 'Nike Air Force 1',
        description: 'The Nike Air Force 1 is a timeless shoe that features a low-cut silhouette and a perforated toe box for breathability.',
        price: 90.00,
        images: [
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d14fc386-1067-4a72-961e-9f8134680703/dunk-low-sko-csdjbw.png",
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d14fc386-1067-4a72-961e-9f8134680703/dunk-low-sko-csdjbw.png",
        ],
        availableSizes: ['US 8', 'US 9', 'US 10'],
        brand: 'Nike',
        color: 'Black/White',
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
        price: 100.00,
        images: [
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d14fc386-1067-4a72-961e-9f8134680703/dunk-low-sko-csdjbw.png",
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
    }
    
]}
  

export default generateProductData