import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { Product } from '@/data/products';
import { useShop } from '@/context/ShopContext';
import { motion } from 'motion/react';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useShop();
  const inWishlist = isInWishlist(product.id);

  const [hovered, setHovered] = useState(false); // hover / touch state

  const handleWishlistToggle = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    if (inWishlist) removeFromWishlist(product.id);
    else addToWishlist(product);
  };

  const handleAddToCart = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="relative bg-card rounded-xl overflow-hidden shadow-sm border hover:shadow-md transition-all duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        {/* الصورة */}
        <div className="relative aspect-square overflow-hidden bg-muted">
         <img
  src={product.image}
  alt={product.name}
  className="
    w-full 
    h-40 sm:h-40 md:h-32 lg:h-60 
    object-cover 
    transition-transform 
    duration-300 
    scale-70 
    group-hover:scale-105
  "
/>


          {/* الأيقونات تظهر من تحت عند hover أو touch */}
          <div
            className={`absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-4 transform transition-all duration-300 z-20 ${
              hovered ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            <button
              onClick={handleAddToCart}
              className="bg-white p-2 rounded-full shadow hover:bg-orange-500 hover:text-white transition"
            >
              <ShoppingCart className="h-5 w-5" />
            </button>

            <Link
              to={`/product/${product.id}`}
              className="bg-white p-2 rounded-full shadow hover:bg-orange-500 hover:text-white flex items-center justify-center transition"
            >
              <Eye className="h-5 w-5" />
            </Link>

           
          </div>
        </div>

        {/* السعر واسم المنتج فقط */}
        <div className="p-4">
          <span className="font-semibold">${product.price.toFixed(2)}</span>
          <h3 className="font-medium mb-2 line-clamp-1">{product.name}</h3>
        </div>
      </Link>
    </motion.div>
  );
}
