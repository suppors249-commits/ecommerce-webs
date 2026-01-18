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
      <section className="relative h-[600px] w-full overflow-hidden">
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

        <div className="absolute inset-0 bg-white/30" />

        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-black">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-semibold mb-6"
            >
              Discover Your Natural Beauty
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl mb-8"
            >
              Premium cosmetics and skincare products for the modern you
            </motion.p>

            {/* الأزرار */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex gap-4 flex-wrap"
            >
              {/* زر تسويقي */}
              <Link
                to="/shop"
                className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition flex items-center gap-2 shadow-lg"
              >
                Shop Now
                <ArrowRight size={18} />
              </Link>

              {/* زر ثانوي */}
              <Link
                to="/categories"
                className="bg-white text-black px-8 py-3 rounded-full border border-black/20 hover:bg-black hover:text-white transition"
              >
                Explore Collection
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

     {/* ================= Featured Products-2 ================= */}
    <section className="py-8">
          <div className="container mx-auto px-8">
  {/* ================= عنوان القسم ================= */}
  <div className="row">
    <div className="section-title mb-5 product-title text-center">
      <h2 className="fw-semibold fs-1 text-3xl md:text-4xl font-semibold">
        Our Featured Products
      </h2>
      <p className="fw-semibold fs-1">Get the skin you want to feel</p>
    </div>
  </div>

  {/* ================= slider المنتجات ================= */}
  <div ref={sliderRef} className="flex gap-8 overflow-x-auto scrollbar-hide mt-10">
    {products.map((p) => (
      <div
        key={p.id}
        className="flex-none w-80 bg-white rounded-xl shadow-md relative featured-card"
        onMouseEnter={() => setHovered(Number(p.id))}
        onMouseLeave={() => setHovered(null)}
      >
        {/* الصورة */}
        <div className="relative overflow-hidden rounded-t-xl h-80 w-full flex items-center justify-center bg-gray-100">
          <img
            src={hovered === Number(p.id) && p.images[1] ? p.images[1] : p.images[0]}
            alt={p.name}
            className="max-h-70 object-contain transition-all duration-1000"
          />
        </div>

        {/* أيقونات hover */}
        {hovered === Number(p.id) && (
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center gap-3">
            <button className="text-white p-2 bg-black/50 rounded-full">
              <Eye size={20} />
            </button>
            <button className="text-white p-2 bg-black/50 rounded-full">
              <Heart size={20} />
            </button>
            <button className="text-white p-2 bg-black/50 rounded-full">
              <ShoppingCart size={20} />
            </button>
          </div>
        )}
      {/* اسم المنتج والسعر */}
        <a href={`/product/${p.id}`} className="block p-4 text-center">
          <span className="text-orange-500 font-semibold">${p.price}</span>
          <h3 className="mt-2 text-lg font-medium">{p.name}</h3>
        </a>
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

 {/* ================= Brands Section-3 ================= */}
<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">


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



      {/* ================= Section-4  ================= */}
     <section className="py-4">
  <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">
    Our Brands
  </h2>

  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
    {categories.map((category) => {
      const [hovered, setHovered] = useState(false); // حالة hover أو touch
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
          {/* الصورة */}
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Overlay للنص */}
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
</section>

        {/* ================= Promotional Banners-5 ================= */}
      <section className="py-10">
        <div className="container mx-auto px-4 space-y-6">
          {/* Banner 2 */}
          <div className="group relative cursor-pointer flex flex-row md:flex-row-reverse items-center bg-orange-500 text-white rounded-2xl overflow-hidden h-[180px] md:h-[260px]">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition duration-300 z-10" />

            {/* Image */}
            <div className="w-1/2 h-full overflow-hidden">
              <img
                src="https://i.postimg.cc/ZRrw4L0N/store-02.webp"
                alt="25% Off"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            {/* Text */}
            <div className="w-1/2 p-5 md:p-10 relative z-20">
              <h3 className="text-xl md:text-3xl font-semibold mb-2">
                25% off Everything
              </h3>
            </div>
          </div>
        </div>
      </section>
      {/* =================  المنتجات الاول -6 ================= */}
       <section className="py-16 bg-muted">
  <div className="container mx-auto px-4">
    <SectionHeader title="Best Sellers" />

    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {bestSellers.slice(0, 5).map((p, index) => (
        <div
          key={p.id}
          className={
            index === 4
              ? "col-span-2 md:col-span-1 flex justify-center"
              : ""
          }
        >
          {/* نفس مقاس باقي المنتجات */}
          <div className="w-full max-w-[180px] md:max-w-none">
            <ProductCard product={p} />
          </div>
        </div>
      ))}
    </div>
  </div>
      </section>
     
    {/* =================  المنتجات العرض  ================= */}
        <section className="py-12">
  <div className="container mx-auto px-4 space-y-6">
    <div className="grid lg:grid-cols-12 gap-6 items-start">

      {/* الصورة الكبيرة + النص + الزر */}
      <div className="lg:col-span-5 relative h-120 md:h-[600px] rounded-xl overflow-hidden">
        <img
          src="https://i.postimg.cc/VLxWV7qr/banner-female.webp' border='0' alt='banner-female"
          alt="female-banner"
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 flex flex-col justify-center items-start p-6 md:p-10">
          <h3 className="text-white text-3xl md:text-4xl font-bold mb-2">
            Empower Yourself
          </h3>
          <p className="text-white text-sm md:text-lg mb-4">
            Get the skin you want to feel
          </p>
         <button
          className="
    bg-black
    text-white
    px-6 py-3
    rounded-xl
    font-semibold
    transition-all
    duration-300
    hover:bg-[#07bc0c]
    hover:scale-105
    active:bg-[#07bc0c]
    active:scale-95
    focus:bg-[#07bc0c]
    focus:outline-none
           "> Explore More</button>
        </div>
      </div>
      {/* المنتجات */}
      <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[10, 11, 12, 13, 14, 15].map((item) => (
          <div key={item} className="group text-center relative">
            
            {/* الصور */}
            <div className="relative overflow-hidden rounded-xl h-[400px] sm:h-[400px] md:h-[400px]">
              <img
                src={`/Images/product-${item}-1.webp`}
                alt={`product ${item}`}
                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
              />
              <img
                src={`/Images/product-${item}-2.webp`}
                alt={`product hover ${item}`}
                className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              {/* أيقونات */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/30 opacity-0 group-hover:opacity-100 transition">
                <button className="text-white">
                  <Eye size={20} />
                </button>
                <button className="text-white">
                  <Heart size={20} />
                </button>
                <button className="text-white">
                  <ShoppingCart size={20} />
                </button>
              </div>

              {/* Sale badge */}
              {item % 2 === 0 && (
                <span className="absolute top-3 left-3 text-xs bg-green-600 text-white px-2 py-1 rounded">
                  Sale
                </span>
              )}
            </div>

            {/* السعر والاسم */}
            <div className="pt-3">
              <span className="text-orange-500 font-semibold">$45.00</span>
              <h3 className="mt-1 text-sm md:text-base font-medium">Product Name</h3>
            </div>
          </div>
        ))}
      </div>

    </div>
  </div>
        </section>
 <section className="py-10 bg-gray-50">
  <div className="social-image-container py-5 px-5 mx-auto">
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
       
      {/* ================= New Arrivals ================= */}
     

      {/* ================= Newsletter ================= */}
    <section
  className="py-16 text-primary-foreground bg-cover bg-center relative"
  style={{
    backgroundImage: `url(${banner2})`,
  }}
>
  {/* Overlay غامق بسيط */}
  <div className="absolute inset-0 bg-black/50" />

  <div className="container mx-auto px-2 text-center relative z-10">
    <h2 className="text-3xl font-semibold mb-2">Subscribe to Our Newsletter</h2>
    <form onSubmit={handleNewsletter} className="max-w-md mx-auto flex gap-2">
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 px-4 py-3 rounded-lg font-semibold"
        placeholder="Enter your email"
      />
      <button className="bg-orange-300 px-2 py-2 rounded-lg hover:bg-orange-600 transition">
        Subscribe
      </button>
    </form>
  </div>
       </section>


      
       <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-10">
            <Feature icon={<Truck className="h-6 w-6 mx-auto" />} title=" Shipping" />
            <Feature icon={<Shield className="h-6 w-6 mx-auto" />} title="Secure "  />
            <Feature icon={<HeadphonesIcon className="h-6 w-6 mx-auto" />} title="24/7 " />
          </div>
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
