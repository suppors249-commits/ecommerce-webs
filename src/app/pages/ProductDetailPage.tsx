import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import { useShop } from '@/context/ShopContext';
import { ShoppingCart, Heart, Star, ArrowLeft } from 'lucide-react';
import { ProductCard } from '@/app/components/ProductCard';
import { useState } from 'react';

export function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useShop();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl mb-4">Product not found</h2>
        <Link to="/shop" className="text-accent-foreground hover:underline">
          Back to Shop
        </Link>
      </div>
    );
  }

  const inWishlist = isInWishlist(product.id);
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        to="/shop"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Shop
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Images */}
        <div>
          <div className="aspect-square rounded-xl overflow-hidden bg-muted mb-4">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`aspect-square rounded-lg overflow-hidden border-2 ${
                  selectedImage === idx ? 'border-primary' : 'border-transparent'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div>
          <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
          <h1 className="text-4xl font-semibold mb-4">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl font-semibold">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-xl text-muted-foreground line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <p className="text-muted-foreground mb-6">{product.description}</p>

          {/* Ingredients */}
          {product.ingredients && (
            <div className="mb-6">
              <h3 className="font-medium mb-2">Key Ingredients:</h3>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ing, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-muted rounded-full text-sm"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Stock Status */}
          <p
            className={`mb-6 ${
              product.inStock ? 'text-green-600' : 'text-destructive'
            }`}
          >
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </p>

          {/* Quantity */}
          <div className="flex items-center gap-4 mb-6">
            <span className="font-medium">Quantity:</span>
            <div className="flex items-center gap-2 border rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 hover:bg-muted transition-colors"
              >
                -
              </button>
              <span className="w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 hover:bg-muted transition-colors"
              >
                +
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="flex-1 bg-primary text-primary-foreground py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              <ShoppingCart className="h-5 w-5" />
              Add to Cart
            </button>
            <button
              onClick={() =>
                inWishlist ? removeFromWishlist(product.id) : addToWishlist(product)
              }
              className="px-6 py-3 border rounded-lg hover:bg-muted transition-colors"
            >
              <Heart
                className={`h-5 w-5 ${
                  inWishlist ? 'fill-accent-foreground text-accent-foreground' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
  <section className="py-16">
    <h2 className="text-2xl font-semibold mb-6">You May Also Like</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {relatedProducts.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  </section>
)}

    </div>
  );
}
