import { Link } from 'react-router-dom';
import { ProductCard } from '@/app/components/ProductCard';

import { products, categories } from '@/data/products';
import { ArrowRight, Star, Truck, Shield, HeadphonesIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { Eye, Heart, ShoppingCart, Instagram } from "lucide-react";
import banner2 from '@/assets/banner-2.webp';
import brand1 from "@/assets/brand-logo-1.png";
import brand2 from "@/assets/brand-logo-2.png";
import brand3 from "@/assets/brand-logo-3.png";
import brand4 from "@/assets/brand-logo-4.png";
import brand5 from "@/assets/brand-logo-5.png";
import { useShop } from "@/context/ShopContext";
 import product1 from "@/img/product-1.png";
import product2 from "@/img/product-2.png";
import product3 from "@/img/product-3.png";
import product4 from "@/img/product-4.png";
// ... لحدي product10
import product10_1 from "@/img/product-10.png";
import product10_2 from "@/img/product-11.png";
import sample from "@/img/sample.MP4";

import product22 from "@/img/product-1.webp";
import product23 from "@/img/product-23.webp";
import product26 from "@/img/product-26.webp";




// … وهكذا
const productsArray = [
  { id: 1, name: "Product 1", price: 45, img1: product1, img2: product2 },
  { id: 2, name: "Product 2", price: 45, img1: product1, img2: product2 },
  // ...
  { id: 10, name: "Product 10", price: 45, img1: product10_1, img2: product10_2 },
];




const features = [
  {
    icon: "https://f.nooncdn.com/mpcms/EN0001/assets/434c81c3-b47d-4b1d-8d37-41056b38e914.png",
    title: "التوصيل بواسطة نوون",
  },
  {
    icon: "https://f.nooncdn.com/mpcms/EN0001/assets/98400019-443c-403a-b6c1-02731c2169d1.png",
    title: "البائع ذو تقييم عالي",
  },
  {
    icon: "https://f.nooncdn.com/mpcms/EN0001/assets/9720b273-5456-4d2a-b16f-7d24c33ab8f0.png",
    title: "منتج قليل الاسترجاع",
  },
  {
    icon: "https://f.nooncdn.com/mpcms/EN0001/assets/ff7c3e88-23de-44a6-8677-63347335d040.png",
    title: "الدفع عند الاستلام",
  },
];
const INSTAGRAM_URL = "https://www.instagram.com/soo_249/";
// ===== صور الهيرو =====
const heroImages = [
  'https://i.postimg.cc/T2cVf8yZ/hero-bg-1.webp',
  'https://i.postimg.cc/Hk0HPtPk/hero-bg-2.webp',
  'https://i.postimg.cc/NjnVD2BD/hero-bg-3.webp',
  'https://i.postimg.cc/wM9bMhQ3/banner-2.webp',
];
// ===== صور Social Feed =====
import social1 from "@/assets/social-image-1.jpg";
import social2 from "@/assets/social-image-2.jpg";
import social3 from "@/assets/social-image-3.jpg";
const socials = [social1, social2, social3];
export function HomePage() {
    const { addToCart } = useShop(); // ✅ أضف دا
  const [email, setEmail] = useState('');
  const [heroIndex, setHeroIndex] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null); // Featured Products hover
  const sliderRef = useRef<HTMLDivElement>(null); // Featured Products slider

  const bestSellers = products.filter((p) => p.isBestSeller).slice(0, 7);
  const newArrivals = products.filter((p) => p.isNew).slice(0, 4);

  const socialRef = useRef<HTMLDivElement>(null); // Social Feed auto scroll

  /* ========== Featured Products Auto Scroll ========== */
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollAmount = 0;

   const cardWidth = 320; // w-80
const gap = 32;        // gap-8
const scrollStep = cardWidth + gap; // عرض البطاقة تقريباً

    const interval = setInterval(() => {
      if (hovered !== null) return; // توقف أثناء hover
      if (!slider) return;

      if (scrollAmount + slider.clientWidth >= slider.scrollWidth) {
        scrollAmount = 0;
      } else {
        scrollAmount += scrollStep;
      }

      slider.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }, 4000); // كل 4 ثواني

    return () => clearInterval(interval);
  }, [hovered]);

  /* ========== Hero Slider ========== */
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  /* ========== Social Feed Auto Scroll ========== */
  useEffect(() => {
    const container = socialRef.current;
    if (!container) return;
    let scrollAmount = 0;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const interval = setInterval(() => {
      scrollAmount += 1;
      if (scrollAmount > maxScroll) scrollAmount = 0;
      container.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <div className="min-h-screen">
     {/* ================= HERO SECTION-1 ================= */}
     <section className="relative h-[730px] w-full overflow-hidden">
  {/* الصور الخلفية */}
  <AnimatePresence>
    <motion.img
      key={heroIndex}
      src={heroImages[heroIndex]}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 w-full h-full object-cover"
    />
  </AnimatePresence>

  {/* طبقة شفافة على الصور */}
  <div className="absolute inset-0 bg-black/30" />

  {/* المحتوى */}
  <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
    <div className="text-center max-w-2xl text-white">

      {/* العنوان الرئيسي */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-5xl font-bold mb-4"
      >
        NEW YEAR, NEW YOU
      </motion.h3>

      {/* العنوان الفرعي */}
      <motion.h4
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-lg md:text-2xl font-medium mb-8"
      >
        TURNING ROUTINES INTO RITUALS
      </motion.h4>

       <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="flex gap-4 justify-center flex-wrap"
    >
      <div className="hero__cta__wrapper flex justify-center mt-6">
        
       
<Link
  to="/shop"
  className="px-14 py-5 border border-white text-white uppercase font-medium text-sm md:text-base rounded-md transition-colors hover:bg-[#154734] hover:text-white"
>
  SHOP ALL
</Link>
      </div>
    </motion.div>
    </div>
  </div>
     </section>



     {/* ================= Featured Products-2 ================= */}
      <section className="py-8" style={{ backgroundColor: "#f2f9f5" }}>
  <div className="container mx-auto px-8">

    {/* ================= عنوان القسم ================= */}
    <div className="row">
      <div className="section-title mb-5 product-title text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#154734]">
          Featured Products
        </h2>
        <p className="mt-4 text-[#333333]">
          Get the skin you want to feel
        </p>
      </div>
    </div>

    {/* ================= slider المنتجات ================= */}
    <div
      ref={sliderRef}
      className="
        flex gap-8 overflow-x-auto scrollbar-hide mt-20
        justify-center
        md:justify-start
        snap-x snap-mandatory
      "
    >
      {products.map((p) => (
        <div
          key={p.id}
          className="
            flex-none w-80 rounded-xl relative
            mx-auto md:mx-0
            snap-center
          "
          style={{ backgroundColor: "#f2f9f5" }}
          onMouseEnter={() => setHovered(Number(p.id))}
          onMouseLeave={() => setHovered(null)}
        >
          {/* الصورة */}
          <div className="relative overflow-hidden rounded-t-xl h-80 w-full flex items-center justify-center">
            <img
              src={
                hovered === Number(p.id) && p.images[1]
                  ? p.images[1]
                  : p.images[0]
              }
              alt={p.name}
              className="max-h-70 object-contain transition-all duration-1000"
            />
          </div>

          {/* أيقونات hover */}
          {hovered === Number(p.id) && (
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center gap-8">
              <Link
                to={`/product/${p.id}`}
                className="text-white p-2 bg-black/50 rounded-full hover:scale-110 transition"
              >
                <Eye size={20} />
              </Link>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  addToCart({
                    id: p.id,
                    name: p.name,
                    price: p.price,
                    image: p.images[0],
                    category: p.category,
                    quantity: 1,
                  });
                }}
                className="text-white p-2 bg-black/50 rounded-full hover:scale-110 transition"
              >
                <ShoppingCart size={20} />
              </button>
            </div>
          )}

          {/* اسم المنتج والسعر */}
          <Link
            to={`/product/${p.id}`}
            className="block p-4 text-center text-[#154734]"
          >
            <h3 className="mt-2 text-2xl font-medium">
              {p.name}
            </h3>
            <span className="block mt-2 text-2xl font-semibold">
              ${p.price}
            </span>
          </Link>

          {/* Badge Sale */}
          {p.isSale && (
            <span className="absolute top-3 left-3 bg-green-600 text-white px-2 py-1 text-xs rounded">
              Sale
            </span>
          )}
        </div>
      ))}
    </div>

  </div>
</section>
      {/* =================  المنتجات الاول -3 ================= */}
   <section className="py-5 bg-muted" style={{ backgroundColor: "#f2f9f5" }}>
  <div className="container mx-auto px-4">
    {/* عنوان القسم */}
  <div className="flex items-center justify-between">
  <h2 className="text-2xl font-semibold text-[#154734]">
   Sellers
  </h2>

  <Link to="/shop" className="flex items-center py-5">
  <ArrowRight className="h-8 w-10 text-[#154734] cursor-pointer hover:translate-x-1 transition-transform" />
</Link>
</div>

 <section className="py-5">
  <div className="container mx-auto px-4">
    <div className="grid grid-flow-col auto-cols-[calc(50%-1rem)] sm:auto-cols-[calc(33%-1rem)] md:auto-cols-[calc(20%-1rem)] gap-1 overflow-x-auto scrollbar-hide">
      {[
        {
          image: "//corpusnaturals.com/cdn/shop/files/Corpus_CategoryImage_HandCare.jpg?v=1747345304&width=1000",
          link: "/shop",
          label: "HAND CARE"
        },
        {
          image: "//corpusnaturals.com/cdn/shop/files/Corpus_Homepage_CategoryImage_Deodorants.jpg?v=1727903866&width=1000",
          link: "/shop",
          label: "DEODORANTS"
        },
        {
          image: "//corpusnaturals.com/cdn/shop/files/Corpus_CategoryImage_BodyButter_alt4.jpg?v=1687446528&width=1000",
          link: "/shop",
          label: "BODY CARE"
        },
        {
          image: "//corpusnaturals.com/cdn/shop/files/Corpus_CategoryImage_Haircare.jpg?v=1702940836&width=2000",
          link: "/shop",
          label: "HAIR CARE"
        },
        {
          image: "//corpusnaturals.com/cdn/shop/files/Corpus-Candles_Trio-Lineup-Right.jpg?v=1678396734&width=2000",
          link: "/shop",
          label: "SHOP ALL"
        }
      ].map((item, idx) => (
        <div key={idx} className="flex flex-col items-center text-center min-w-[140px] sm:min-w-[160px] md:min-w-[180px]">
          <div className="w-full h-[180px] sm:h-[200px] md:h-[250px] overflow-hidden relative">
            <a href={item.link}>
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-full object-cover border-0 rounded-none hover:scale-105 transition-transform"
              />
            </a>
          </div>
          <p className="mt-2 font-medium text-[#154734] text-sm sm:text-base">{item.label}</p>
        </div>
      ))}
    </div>
  </div>
</section>



  </div>
</section>
 {/* ================= Brands Section-4 ================= */}
<section className="py-16" style={{ backgroundColor: "#f2f9f5" }}>
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-semibold mb-8  text-[#154734]">
      Brands
    </h2>

    <div className="overflow-hidden relative">
      <div
        className="flex gap-6 whitespace-nowrap"
        style={{
          animation: "scrollBrands 20s linear infinite",
        }}
      >
        {[brand1, brand2, brand3, brand4, brand5].map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`brand-${idx + 1}`}
            className="h-16 object-contain flex-shrink-0"
          />
        ))}

        {/* لتكرار الصور بنفس التسلسل عشان حركة سلسة */}
        {[brand1, brand2, brand3, brand4, brand5].map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`brand-${idx + 1}`}
            className="h-16 object-contain flex-shrink-0"
          />
        ))}
      </div>
    </div>
  </div>

  <style>
    {`
      @keyframes scrollBrands {
        0% { transform: translateX(0); }
        100% { transform: translateX(-80%); }
      }
    `}
  </style>
</section>
      {/* ================= Section-5  ================= */}
     <section className="py-8">
  <h2 className="text-3xl md:text-3xl font-semibold mb-6 text-center text-[#154734] ">
   Shop by Category
  </h2>

  <div className="container mx-auto px-4 sm:px-6">
  <div className="grid grid-cols-2 gap-4 ">
    {categories.map((category) => {
      const [hovered, setHovered] = useState(false);
      return (
        <Link
          key={category.id}
          to={`/shop?category=${category.id}`}
          className="relative group overflow-hidden rounded-xl"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onTouchStart={() => setHovered(true)}
          onTouchEnd={() => setHovered(false)}
        >
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-36 object-cover transition-transform duration-200 group-hover:scale-110"
          />
          <div
            className={`absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <h3 className="text-white text-lg font-semibold">{category.name}</h3>
          </div>
        </Link>
      );
    })}
  </div>
</div>

     </section>
    {/* =================  -6المنتجات العرض  ================= */}

  <section className="py-5 my-5">
  <div className="container mx-auto px-4">
    {/* عنوان القسم */}
    <div className="text-center mb-5">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#154734]">
        Customer favorite beauty 
      </h2>
      
    </div>

    <div className="grid lg:grid-cols-12 gap-6 items-start ">
      {/* البانر */}
      <div className="lg:col-span-5 relative mb-5 lg:mb-0 group ">
    <video
  src={sample}
  autoPlay
  loop
  muted
  playsInline
  className="w-full h-74 sm:h-96 md:h-[500px] lg:h-[600px] object-cover rounded-xl"
/>


        <div className="absolute inset-0 bg-black/20 flex flex-col justify-center items-start p-4 sm:p-6 md:p-10 rounded-xl">
          <h3 className="text-[#154734] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">
            Empower Yourself
          </h3>
          <p className="text text-xs sm:text-sm md:text-base mb-4">
            Get the skin you want to feel
          </p>
           <button
       
          onClick={(e) => {
            
            const btn = e.currentTarget;
            btn.style.backgroundColor = "#154734";
            btn.style.color = "#f5f1f1";
            // هنا ينقلك لصفحة التسوق
            
          }}
          className="px-10 py-2 border border-white text-[#154734] uppercase font-medium text-sm md:text-base rounded-md transition-colors"
        >
          SHOP ALL 
          
        </button>
          
        </div>
      </div>

     {/* المنتجات */}
{/* المنتجات */}
<div className="lg:col-span-12 space-y-4 md:space-y-0 md:grid md:grid-cols-1 gap-6">
  {productsArray.slice(0, 4).map((p, index) => (
    <div
      key={p.id}
      className={`flex items-center gap-6 flex-wrap md:flex-nowrap
        ${index % 2 === 1 ? "flex-row-reverse" : "flex-row"}
      `}
    >
      {/* الصورة */}
      <div className="relative w-40 h-40 md:w-1/2 md:h-80 flex-shrink-0 overflow-hidden rounded-xl">
        <img
          src={product26}
          alt="Product 26"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <img
          src={product23}
          alt="Product 23 hover"
          className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-300"
        />
      </div>

      {/* النص داخل بطاقة */}
      <div className="flex-1 md:w-1/2">
        <div className="bg-[#f2f9f5] p-4 rounded-xl shadow-md h-full flex flex-col justify-center">
          <h3 className="text-lg md:text-2xl font-semibold">VELORA</h3>
          <p className="mt-2 text-sm md:text-base text-gray-700">
            Glow with confidence! Discover your natural radiance and shine every day.
          </p>
        </div>
      </div>
    </div>
  ))}
</div>





    </div>
  </div>
</section>

    {/* =================  7المنتجات العرض  ================= */}

      <section className="py-10 bg-gray-50" >
        <div className="social-image-container py-5 px-5 mx-auto" style={{ backgroundColor: "#f2f9f5" }}>
         <div className="flex flex-wrap justify-center gap-4">
        {socials.map((img, index) => (
        <div
          key={index}
          className="relative overflow-hidden group w-11/12 sm:w-5/12 md:w-1/4 lg:w-1/6 max-w-[240px] border border-gray-200 rounded-md"
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
        >
          {/* الصورة */}
          <img
            src={img}
            alt={`Social ${index + 1}`}
            className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
          />

          {/* التظليل + أيقونة Instagram */}
          {hovered === index && (
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center gap-3 transition-opacity duration-300">
             
              
              <a
           href={INSTAGRAM_URL}
             target="_blank"
              rel="noopener noreferrer"
             className="p-3 bg-black/50 rounded-full hover:bg-black/70 transition"
                aria-label="Visit our Instagram"
  >
    <Instagram className="h-6 w-6 text-white" />
  </a>

              
             
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
      </section>
    {/* =================  المنتجات الاول  ================= */}
        <section className="py-8" style={{ backgroundColor: "#f2f9f5" }}>
  <div className="container mx-auto px-4">

    {/* عنوان القسم */}
    <div className="text-center mb-8">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#154734]">
        Featured Products
      </h2>
      <p className="mt-4 text-[#333333]">Get the skin you want to feel</p>
    </div>

    {/* أول 6 منتجات */}
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
      {products.slice(0, 6).map((p) => (
        <div
          key={p.id}
          className="bg-[#f2f9f5] rounded-xl overflow-hidden relative"
        >
          <img
            src={p.images[0]}
            alt={p.name}
            className="w-full h-40 object-contain"
          />
          <div className="p-4 text-center">
            <h3 className="text-lg font-medium text-[#154734]">{p.name}</h3>
            
          </div>
        </div>
      ))}
    </div>

    {/* باقي المنتجات 4 في كل صف */}
    
  </div>
</section>
    
     

      {/* ================= Newsletter ================= */}
    <section
  className="py-20 text-primary-foreground bg-cover bg-center relative"
  style={{
    backgroundImage: `url(${banner2})`,
  }}
>
  {/* Overlay غامق بسيط */}
  <div className="absolute inset-0 bg-black/50" />

  <div className="container mx-auto px-2 text-center relative z-10">
    <h2 className="text-3xl font-semibold mb-10 " >Subscribe to Our Newsletter</h2>
    <form onSubmit={handleNewsletter} className="max-w-md mx-auto flex gap-10 ">
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 px-4 py-3 rounded-lg font-semibold "
        placeholder="Enter your email"
      />
      <button className="bg-[#154734] px-9 py-2 rounded-lg hover:bg-orange-600 transition text-[#fffff]">
        Subsc
      </button>
    </form>
  </div>
       </section>
     
   


      
      

    </div>
  );
}
/* ================= Components صغيرة ================= */
function Feature({ icon, title, desc }: any) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div className="p-3 bg-accent/20 rounded-full">{icon}</div>
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}
function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex justify-between items-center mb-8">
      <h2 className="text-3xl font-semibold">{title}</h2>
      <Link to="/shop" className="flex items-center gap-2 text-orange-500">
        View All <ArrowRight size={18} />
      </Link>
    </div>
  );
}
