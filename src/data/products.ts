



export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: string;
  image: string;
  images: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
  ingredients?: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Radiant Glow Serum",
    price: 49.99,
    originalPrice: 69.99,
    description: "A luxurious vitamin C serum that brightens and evens skin tone for a radiant complexion.",
    category: "Skincare",
    image: "https://f.nooncdn.com/p/pzsku/ZC49BE0D84674E00D1C44Z/45/1767809221/22d1fb2d-2e40-45ae-9389-e13e9bd95497.jpg?width=800",
    images: [
      "https://f.nooncdn.com/p/pzsku/ZC49BE0D84674E00D1C44Z/45/1767809221/22d1fb2d-2e40-45ae-9389-e13e9bd95497.jpg?width=800",
      "https://m.media-amazon.com/images/I/61Ge-Saz+9L._AC_SL1500_.jpg",
       "https://f.nooncdn.com/p/pzsku/Z91F4BCFBE915CE95F557Z/45/1746477150/b20d500b-c275-4b16-b02c-b37600b3842d.jpg?width=800",
      "https://m.media-amazon.com/images/I/61qPMyOcraL._AC_SL1500_.jpg",
    ],
    rating: 4.8,
    reviews: 324,
    inStock: true,
    isBestSeller: true,
    ingredients: ["Vitamin C", "Hyaluronic Acid", "Niacinamide"]
  },
  {
    id: "2",
    name: "Velvet Matte Lipstick",
    price: 24.99,
    description: "Long-lasting matte lipstick with a velvety texture and rich color payoff.",
    category: "Makeup",
    image: "https://m.media-amazon.com/images/I/61Snk6WQyAL._AC_SL1500_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/61Snk6WQyAL._AC_SL1500_.jpg",
      "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=600&q=80",
    ],
    rating: 4.6,
    reviews: 512,
    inStock: true,
    isBestSeller: true,
    ingredients: ["Vitamin E", "Jojoba Oil", "Shea Butter"]
  },
  {
    id: "3",
    name: "Hydrating Face Cream",
    price: 39.99,
    description: "Rich moisturizing cream that deeply hydrates and nourishes all skin types.",
    category: "Skincare",
    image: "https://m.media-amazon.com/images/I/51W0EloTP8L._AC_SL1500_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/51W0EloTP8L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/51VedonCavL._AC_SL1080_.jpg",
      "https://m.media-amazon.com/images/I/51e6sRAicfL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61h+J9cfPNL._AC_SL1340_.jpg",
    ],
    rating: 4.7,
    reviews: 289,
    inStock: true,
    isNew: true,
  },
  {
    id: "4",
    name: "Luminous ",
    description: "جل مرطب للترطيب من دير - 200 جرام - مع الجلسرين | حمض الهيالورونيك | فيتامين E | الصبار | مضاد للأكسدة | ترطيب طويل الأمد | تغذية البشرة |.",
    category: "Makeup",
    image: "https://m.media-amazon.com/images/I/51pUe7tyOaL._AC_SL1000_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/51pUe7tyOaL._AC_SL1000_.jpg",
      "https://images.unsplash.com/photo-1596704017254-9b121068ec31?w=600&q=80",
    
    ],
    rating: 4.5,
    reviews: 421,
    inStock: true,
    price: 120.99,
    isBestSeller: true,
     
  },
  {
    id: "5",
    name: "Nourishing Hair Oil",
    price: 190.99,
    description: "سيروم للوجه ريتينول بي 3 من سي ليت، 30 مل.",
    category: "Haircare",
    image: "https://m.media-amazon.com/images/I/612uZ-8KJtL._AC_SX679_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/51XNXVgY4DL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/612uZ-8KJtL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/61y1UHsf5IL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61ZJPIWphDL._AC_SL1500_.jpg",

    ],
    rating: 4.9,
    reviews: 187,
    inStock: true,
    isNew: true,
  },
  {
    id: "6",
    name: " واقي من الشمس ",
    price: 170.99,
    originalPrice: 222,
    description: "أقصى حماية من الأشعة فوق البنفسجية: يوفر حماية واسعة الطيف ضد الأشعة فوق البنفسجية فئة A وB ، مما يحمي البشرة من أضرار أشعة الشمس., امتصاص سريع: يمتص هذا الجل .",
    category: "Perfumes",
    image: "https://m.media-amazon.com/images/I/51l8cfhUWnL._AC_SL1000_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/51l8cfhUWnL._AC_SL1000_.jpg",
      "https://m.media-amazon.com/images/I/51FzRdgsWvL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/31q9HpRZLrL._AC_.jpg",
    ],
    rating: 4.2,
    reviews: 654,
    inStock: true,
    isNew: true,
  },
  {
    id: "7",
    name: "SEE-LIT",
    price: 250.99,
    originalPrice: 320.99,
    description: "ترطيب مكثف: يجذب حمض الهيالورونيك الرطوبة إلى البشرة، مما يوفر ترطيبًا عميقًا وطويل الأمد لإطلالة ندية ملئ البشرة: يعزز حجمها الطبيعي، ويقلل من ظهور الخطوط الدقيقة ويمنحك بشرة ناعمة وشابة.",
    category: "Makeup",
    image: "https://f.nooncdn.com/p/pzsku/ZF714F4EE952873D55C5CZ/45/1753199168/d9e23a13-1c54-421e-b7ab-a135d5a84d08.jpg?width=800",
    images: [
      "https://f.nooncdn.com/p/pzsku/ZF714F4EE952873D55C5CZ/45/1753199188/467d8bc2-410a-435c-b9e5-a96ad1832867.jpg?width=800",
      "https://f.nooncdn.com/p/pzsku/ZF714F4EE952873D55C5CZ/45/1753199234/56aca3a2-058d-4344-b0fa-d34166a662e9.jpg?width=800",
      "https://f.nooncdn.com/p/pzsku/ZF714F4EE952873D55C5CZ/45/1753199244/0c7787de-52eb-4ead-b5bf-c7bbfd75dfc5.jpg?width=800",
      "https://f.nooncdn.com/p/pzsku/ZF714F4EE952873D55C5CZ/45/1753199168/d9e23a13-1c54-421e-b7ab-a135d5a84d08.jpg?width=800",

    ],
    rating: 4.7,
    reviews: 398,
    inStock: true,
    isBestSeller: true,
  },
  {
    id: "8",
    name: "سيروم رموش انتنس باور",
    price: 160.99,
    description: "سيروم من Twist & Go هو الحل السحري لرموش أطول، أكثف وأقوى! فعّالة وغنية بالمغذيات الطبيعية اللي بتساعد على تعزيز نمو الرموش والحواجب من الجذور، وكمان تقوي الشعيرات وتمنع تساقطها. يعزز نمو الرموش والحواجب",
    category: "Skincare",
    image: "https://f.nooncdn.com/p/pzsku/ZD389729AB825D7F8236AZ/45/1747665444/a1473c27-01e3-431f-87b7-c03822fb8e9e.jpg?width=800",
    images: [
      "https://f.nooncdn.com/p/pzsku/ZD389729AB825D7F8236AZ/45/1747654661/3a638f88-f27c-448c-bfdd-d091284fb01d.jpg?width=800",
      "https://f.nooncdn.com/p/pzsku/ZD389729AB825D7F8236AZ/45/1747665444/a1473c27-01e3-431f-87b7-c03822fb8e9e.jpg?width=800",
    ],
    rating: 4.6,
    reviews: 276,
    inStock: true,
  },
  {
    id: "9",
    name: "Makeup Brush Set",
    price: 69.99,
    originalPrice: 99.99,
    description: "Professional 12-piece brush set with soft synthetic bristles.",
    category: "Accessories",
    image: "https://f.nooncdn.com/p/pzsku/Z1975B885F0BBC3006E8FZ/45/_/1729531220/8df8b821-f560-4965-b3ea-6c578c2b5d0b.jpg?width=800",
    images: [
      "https://f.nooncdn.com/p/pzsku/Z1975B885F0BBC3006E8FZ/45/_/1729531221/33f3b08d-c47e-4ed8-b217-2e4a4aa975bc.jpg?width=800",
      "https://f.nooncdn.com/p/pzsku/Z1975B885F0BBC3006E8FZ/45/_/1729531222/e983fc02-2053-4afc-856f-6e343d0c0c83.jpg?width=800",
    ],
    rating: 4.9,
    reviews: 543,
    inStock: true,
    isNew: true,
  },
  {
    id: "10",
    name: "Volumizing Mascara",
    price: 19.99,
    description: "Creates dramatic volume and length without clumping or flaking.",
    category: "Makeup",
    image: "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=600&q=80",
    ],
    rating: 4.4,
    reviews: 234,
    inStock: true,
  },
  {
    id: "11",
    name: "Anti-Aging Night Cream",
    price: 64.99,
    description: "Powerful overnight treatment that reduces fine lines and wrinkles.",
    category: "Skincare",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80",
    ],
    rating: 4.8,
    reviews: 412,
    inStock: true,
    isBestSeller: true,
  },
  {
    id: "12",
    name: "Sulfate-Free Shampoo",
    price: 26.99,
    description: "Gentle formula that cleanses and protects color-treated hair.",
    category: "Haircare",
    image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=600&q=80",
    ],
    rating: 4.5,
    reviews: 198,
    inStock: true,
  },
];

export const categories = [
  {
    id: "makeup",
    name: "Makeup",
    description: "Discover our collection of high-quality makeup products",
    image: "https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg"

  },
  {
    id: "skincare",
    name: "Skincare",
    description: "Nourish your skin with premium skincare essentials",
    image: "https://images.pexels.com/photos/3321416/pexels-photo-3321416.jpeg"
  },
  {
    id: "haircare",
    name: "Haircare",
    description: "Professional haircare for healthy, beautiful hair",
    image: "https://images.pexels.com/photos/6429666/pexels-photo-6429666.jpeg"
  },
  {
    id: "Accessories",
    name: "Accessories",
    description: "Professional haircare for healthy, beautiful hair",
    image: "https://i.postimg.cc/3wG22f3B/blog-11.webp' border='0' alt='blog-11"
  },
  
 
];
