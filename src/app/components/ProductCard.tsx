import { Product } from '@/data/products';
import { useShop } from '@/context/ShopContext';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useShop();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <div className="relative group mt-15">
      {/* الصورة + Badge */}
      <a href={`/product/${product.id}`} className="block relative">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* Badge مثال */}
          {product.badge && (
            <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 text-xs font-bold rounded">
              {product.badge}
            </div>
          )}
        </div>
      </a>

      {/* اسم المنتج */}
   {/* اسم المنتج */}
<div className="text-center mt-8">
  <a href={`/product/${product.id}`} className="text-[#154734]">
    <h6 className=" font-medium line-clamp-2 uppercase text-base">{product.name}</h6>
  </a>
</div>


{/* السعر + Add to Cart في نفس الصف مع مسافة من الأعلى */}
<div className="flex items-center mt-6 px-2 gap-2">
  <span className="text-[#154734] font-medium text-xs">
    + ADD CART
  </span>

  <div className="product__grid__price">
    <span className="price text-sm font-semibold text-[#154734]">
      ${product.price.toFixed(2)}
    </span>
  </div>
</div>



    </div>
  );
}
