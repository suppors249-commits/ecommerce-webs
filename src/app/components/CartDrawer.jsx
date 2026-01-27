import { Link } from "react-router-dom";
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useShop } from "@/context/ShopContext";

export default function CartDrawer({ open, onClose }) {
  const { cart, updateQuantity, removeFromCart, getCartTotal } = useShop();

  const shipping = 5.99;
  const total = getCartTotal() + (cart.length > 0 ? shipping : 0);

  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 z-40"
      />

      {/* Drawer */}
      <div
        className="
          fixed top-0 right-0 h-full
          w-full sm:w-80
          bg-[#f2f9f5]
          z-50 flex flex-col shadow-xl
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b top-10 ">
          <h2 className="text font-semibold flex items-center gap-2 ">
            <ShoppingBag className="w-5 h-5 top-20" />
            Cart ({cart.length})
          </h2>
          <button onClick={onClose}>
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4" >
          {cart.length === 0 ? (
            <div className="text-center mt-10" >
              <p className="mb-4">Your cart is empty</p>
              <Link
                to="/shop"
                onClick={onClose}
                className="inline-block px-6 py-3 border border-[#154734] text-[#154734] rounded-md hover:bg-[#154734] hover:text-white"
              >
                SHOP ALL
              </Link>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 bg-white p-10 -xl border" style={{ backgroundColor: "#f2f9f5" }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-30 h-39 object-cover rounded-lg"
                />

                <div className="flex-12" style={{ backgroundColor: "#0dbb59" }}>
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm mb-2">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center border rounded-lg">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="p-1"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="p-1"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t p-4 space-y-3">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <Link
              to="/checkout"
              onClick={onClose}
              className="block text-center bg-[#154734] text-white py-3 rounded-lg"
            >
              Checkout
            </Link>

            <Link
              to="/cart"
              onClick={onClose}
              className="block text-center border py-3 rounded-lg"
            >
              View Cart
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
