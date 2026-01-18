import { Eye, Heart, ShoppingCart } from "lucide-react";

const featuredProducts = [
  {
    id: 5,
    name: "Enriched Hand Wash",
    price: 25,
    image1: "/Images/product-5-1.webp",
    image2: "/Images/product-5-2.jpg",
    sale: true,
  },
  {
    id: 6,
    name: "Enriched Duo",
    price: 27,
    image1: "/Images/product-6-1.webp",
    image2: "/Images/product-6-2.webp",
    sale: false,
  },
  {
    id: 7,
    name: "Shield Spray",
    price: 37,
    image1: "/Images/product-7-1.webp",
    image2: "/Images/product-7-2.webp",
    sale: false,
  },
  {
    id: 8,
    name: "Nourishing Eye Cream",
    price: 19,
    image1: "/Images/product-8-1.webp",
    image2: "/Images/product-8-2.webp",
    sale: false,
  },
  {
    id: 9,
    name: "Nourishing Moisture Mask",
    price: 35,
    image1: "/Images/product-9-1.webp",
    image2: "/Images/product-9-2.webp",
    sale: false,
  },
  {
    id: 10,
    name: "Moisturizing Polishing Treatment",
    price: 45,
    image1: "/Images/product-10-1.webp",
    image2: "/Images/product-10-2.webp",
    sale: true,
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Our Featured Products
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Get the skin you want to feel
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group relative overflow-hidden rounded-xl">
              {/* صور المنتج */}
              <div className="relative h-96 w-full">
                <img
                  src={product.image1}
                  alt={product.name}
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                />
                <img
                  src={product.image2}
                  alt={product.name}
                  className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                {/* أيقونات تظهر عند hover أو touch */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/20 opacity-0 group-hover:opacity-100 transition">
                  <button className="text-white">
                    <Eye size={18} />
                  </button>
                  <button className="text-white">
                    <Heart size={18} />
                  </button>
                  <button className="text-white">
                    <ShoppingCart size={18} />
                  </button>
                </div>

                {product.sale && (
                  <span className="absolute top-3 left-3 text-xs bg-green-600 text-white px-2 py-1 rounded">
                    Sale
                  </span>
                )}
              </div>

              {/* الاسم والسعر */}
              <div className="pt-3 text-center">
                <span className="text-orange-500 font-semibold">${product.price}</span>
                <h3 className="mt-1 font-medium">{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
