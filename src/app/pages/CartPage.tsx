import { Link } from 'react-router-dom';
import { useShop } from '@/context/ShopContext';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';

export function CartPage() {
  const { cart, updateQuantity, removeFromCart, getCartTotal } = useShop();
  const shipping = 5.99;
  const total = getCartTotal() + (cart.length > 0 ? shipping : 0);

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center" style={{ backgroundColor: "#f2f9f5" }}>
        <ShoppingBag className="h-24 w-24 mx-auto mb-6 -foreground text-[#154734]" />
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
        <p className="text-muted-foreground mb-8" style={{ backgroundColor: "#18ad58" }}>
          Add some beautiful products to your cart
        </p>
       <Link
      to="/shop"
     className="
     px-14 py-5
     border border-[#154734]
     text-[#154734]
     uppercase
     font-medium
     text-sm md:text-base
     rounded-md
     transition-colors
     hover:bg-[#154734]
     hover:text-white
     inline-block
     text-center
  "
>
  SHOP ALL
</Link>

      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 text-[#154734]" style={{ backgroundColor: "#f2f9f5" }}>
      <h1 className=" font-semibold mb-8 text-[#154734]">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" style={{ backgroundColor: "#f2f9f5" }}>
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-card p-4 rounded-xl border flex gap-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="font-medium mb-1">{item.name}</h3>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 border rounded-lg">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-2 hover:bg-muted transition-colors"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 hover:bg-muted transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                <p className="text-sm text-muted-foreground">
                  ${item.price.toFixed(2)} each
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1" >
          <div className="bg-card p-6 rounded-xl border sticky top-24">
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">${getCartTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span className="font-medium">${shipping.toFixed(2)}</span>
              </div>
              <div className="border-t pt-3 flex justify-between">
                <span className="font-semibold">Total</span>
                <span className="font-semibold text-lg">${total.toFixed(2)}</span>
              </div>
            </div>
            <Link
              to="/checkout"
              className="w-full block text-center bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Proceed to Checkout
            </Link>
            <Link
              to="/shop"
              className="w-full block text-center mt-3 py-3 border rounded-lg hover:bg-muted transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
