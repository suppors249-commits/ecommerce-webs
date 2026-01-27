// استيراد الصور
import product1 from "@/img/product-1.png";
import product2 from "@/img/product-2.png";
import product3 from "@/img/product-3.png";
import product4 from "@/img/product-4.png";
import product5 from "@/img/product-5.png";
import product6 from "@/img/product-6.png";
import product7 from "@/img/product-7.png";
import product8 from "@/img/product-8.png";
import product9 from "@/img/product-9.png";
import product10 from "@/img/product-10.png";
import product11 from "@/img/product-11.png";
import product12 from "@/img/product-12.png";
import product13 from "@/img/product-13.png";
import product14 from "@/img/product-14.png";

import product15 from "@/img/product-15.jpg";
import product16 from "@/img/product-16.jpg";

import product17 from "@/img/product-17.webp";
import product18 from "@/img/product-18.webp";
import product19 from "@/img/product-19.webp";
import product20 from "@/img/product-20.webp";
import product21 from "@/img/product-21.webp";
import product22 from "@/img/product-22.webp";
import product23 from "@/img/product-23.webp";
import product24 from "@/img/product-24.webp";
import product25 from "@/img/product-25.webp";
import product26 from "@/img/product-26.webp";
import product27 from "@/img/product-27.webp";

// واجهة المنتج
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  images: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
}

// قائمة المنتجات 1-27
export const products: Product[] = [
  { id: "1", name: "Product 1", price: 19.99, description: "Description for product 1", category: "Skincare", image: product1, images: [product1], rating: 4.5, reviews: 120, inStock: true },
  { id: "2", name: "Product 2", price: 24.99, description: "Description for product 2", category: "Makeup", image: product2, images: [product2], rating: 4.6, reviews: 110, inStock: true },
  { id: "3", name: "Product 3", price: 29.99, description: "Description for product 3", category: "Haircare", image: product3, images: [product3], rating: 4.7, reviews: 130, inStock: true },
  { id: "4", name: "Product 4", price: 34.99, description: "Description for product 4", category: "Skincare", image: product4, images: [product4], rating: 4.3, reviews: 140, inStock: true },
  { id: "5", name: "Product 5", price: 39.99, description: "Description for product 5", category: "Makeup", image: product5, images: [product5], rating: 4.8, reviews: 100, inStock: true },
  { id: "6", name: "Product 6", price: 44.99, description: "Description for product 6", category: "Haircare", image: product6, images: [product6], rating: 4.2, reviews: 150, inStock: true },
  { id: "7", name: "Product 7", price: 49.99, description: "Description for product 7", category: "Skincare", image: product7, images: [product7], rating: 4.5, reviews: 160, inStock: true },
  { id: "8", name: "Product 8", price: 54.99, description: "Description for product 8", category: "Makeup", image: product8, images: [product8], rating: 4.7, reviews: 180, inStock: true },
  { id: "9", name: "Product 9", price: 59.99, description: "Description for product 9", category: "Haircare", image: product9, images: [product9], rating: 4.9, reviews: 200, inStock: true },
  { id: "10", name: "Product 10", price: 64.99, description: "Description for product 10", category: "Skincare", image: product10, images: [product10], rating: 4.6, reviews: 220, inStock: true },
  { id: "11", name: "Product 11", price: 69.99, description: "Description for product 11", category: "Makeup", image: product11, images: [product11], rating: 4.8, reviews: 240, inStock: true },
  { id: "12", name: "Product 12", price: 74.99, description: "Description for product 12", category: "Haircare", image: product12, images: [product12], rating: 4.5, reviews: 260, inStock: true },
  { id: "13", name: "Product 13", price: 79.99, description: "Description for product 13", category: "Skincare", image: product13, images: [product13], rating: 4.4, reviews: 280, inStock: true },
  { id: "14", name: "Product 14", price: 84.99, description: "Description for product 14", category: "Makeup", image: product14, images: [product14], rating: 4.3, reviews: 300, inStock: true },
  { id: "15", name: "Product 15", price: 89.99, description: "Description for product 15", category: "Haircare", image: product15, images: [product15], rating: 4.6, reviews: 320, inStock: true },
  { id: "16", name: "Product 16", price: 94.99, description: "Description for product 16", category: "Skincare", image: product16, images: [product16], rating: 4.5, reviews: 340, inStock: true },
  { id: "17", name: "Product 17", price: 99.99, description: "Description for product 17", category: "Makeup", image: product17, images: [product17], rating: 4.7, reviews: 360, inStock: true },
  { id: "18", name: "Product 18", price: 104.99, description: "Description for product 18", category: "Haircare", image: product18, images: [product18], rating: 4.8, reviews: 380, inStock: true },
  { id: "19", name: "Product 19", price: 109.99, description: "Description for product 19", category: "Skincare", image: product19, images: [product19], rating: 4.6, reviews: 400, inStock: true },
  { id: "20", name: "Product 20", price: 114.99, description: "Description for product 20", category: "Makeup", image: product20, images: [product20], rating: 4.7, reviews: 420, inStock: true },
  { id: "21", name: "Product 21", price: 119.99, description: "Description for product 21", category: "Haircare", image: product21, images: [product21], rating: 4.8, reviews: 440, inStock: true },
  { id: "22", name: "Product 22", price: 124.99, description: "Description for product 22", category: "Skincare", image: product22, images: [product22], rating: 4.5, reviews: 460, inStock: true },
  { id: "23", name: "Product 23", price: 129.99, description: "Description for product 23", category: "Haircare", image: product23, images: [product23], rating: 4.8, reviews: 480, inStock: true },
  { id: "24", name: "Product 24", price: 134.99, description: "Description for product 24", category: "Makeup", image: product24, images: [product24], rating: 4.9, reviews: 500, inStock: true },
  { id: "25", name: "Product 25", price: 139.99, description: "Description for product 25", category: "Skincare", image: product25, images: [product25], rating: 4.7, reviews: 520, inStock: true },
  { id: "26", name: "Product 26", price: 144.99, description: "Description for product 26", category: "Haircare", image: product26, images: [product26], rating: 4.6, reviews: 540, inStock: true },
  { id: "27", name: "Product 27", price: 149.99, description: "Description for product 27", category: "Makeup", image: product27, images: [product27], rating: 4.8, reviews: 560, inStock: true }
];
export const categories = [
  { 
    id: "makeup", 
    name: "Makeup", 
   
   image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"

  },
 {
    id: "haircare",
    name: "Haircare",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
  },
  { 
    id: "Skincare", 
    name: "Skincare", 
    image: "https://images.unsplash.com/photo-1556228724-4b1b4b97b6a0" 
  },
  { 
    id: "Fragrance", 
    name: "Fragrance", 
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de" 
  },
];


  
