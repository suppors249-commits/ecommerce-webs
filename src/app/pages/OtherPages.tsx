import { Link } from 'react-router-dom';
import { categories } from '@/data/products';
import { useShop } from '@/context/ShopContext';
import { ProductCard } from '@/app/components/ProductCard';
import { useState } from 'react';
import { ShoppingBag, MapPin, Mail, Phone } from 'lucide-react';

// Categories Page
export function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-semibold mb-8">Shop by Category</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/shop?category=${category.id}`}
            className="group bg-card rounded-xl overflow-hidden border hover:shadow-md transition-all"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{category.name}</h2>
              <p className="text-muted-foreground">{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// Wishlist Page
export function WishlistPage() {
  const { wishlist, removeFromWishlist } = useShop();

  if (wishlist.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <ShoppingBag className="h-24 w-24 mx-auto mb-6 text-muted-foreground" />
        <h2 className="text-2xl font-semibold mb-4">Your wishlist is empty</h2>
        <Link to="/shop" className="inline-flex bg-primary text-primary-foreground px-8 py-3 rounded-lg">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-semibold mb-8">My Wishlist ({wishlist.length})</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {wishlist.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

// Checkout Page
export function CheckoutPage() {
  const { cart, getCartTotal } = useShop();
  const shipping = 5.99;
  const total = getCartTotal() + shipping;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-semibold mb-8">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-card p-6 rounded-xl border">
            <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="px-4 py-2 border rounded-lg" required />
                <input type="text" placeholder="Last Name" className="px-4 py-2 border rounded-lg" required />
              </div>
              <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-lg" required />
              <input type="text" placeholder="Address" className="w-full px-4 py-2 border rounded-lg" required />
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="City" className="px-4 py-2 border rounded-lg" required />
                <input type="text" placeholder="ZIP Code" className="px-4 py-2 border rounded-lg" required />
              </div>
            </form>
          </div>

          <div className="bg-card p-6 rounded-xl border">
            <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
            <div className="space-y-3">
              <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:bg-muted">
                <input type="radio" name="payment" defaultChecked className="accent-primary" />
                <span>Credit/Debit Card</span>
              </label>
              <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:bg-muted">
                <input type="radio" name="payment" className="accent-primary" />
                <span>PayPal</span>
              </label>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-card p-6 rounded-xl border sticky top-24">
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
            <div className="space-y-3 mb-6">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>{item.name} x{item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t pt-3">
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Login Page
export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto bg-card p-8 rounded-xl border">
        <h1 className="text-3xl font-semibold mb-6 text-center">Login</h1>
        <form className="space-y-4">
          <div>
            <label className="block mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90">
            Sign In
          </button>
        </form>
        <div className="mt-6 text-center space-y-2">
          <Link to="/forgot-password" className="block text-sm text-accent-foreground hover:underline">
            Forgot Password?
          </Link>
          <div className="text-sm">
            Don't have an account?{' '}
            <Link to="/register" className="text-accent-foreground hover:underline">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Register Page
export function RegisterPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto bg-card p-8 rounded-xl border">
        <h1 className="text-3xl font-semibold mb-6 text-center">Create Account</h1>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="px-4 py-2 border rounded-lg" required />
            <input type="text" placeholder="Last Name" className="px-4 py-2 border rounded-lg" required />
          </div>
          <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-lg" required />
          <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded-lg" required />
          <input type="password" placeholder="Confirm Password" className="w-full px-4 py-2 border rounded-lg" required />
          <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90">
            Create Account
          </button>
        </form>
        <p className="mt-6 text-center text-sm">
          Already have an account?{' '}
          <Link to="/login" className="text-accent-foreground hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

// Profile Page
export function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-semibold mb-8">My Account</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="bg-card p-6 rounded-xl border space-y-2">
            <Link to="/profile" className="block py-2 px-4 rounded-lg bg-muted font-medium">Profile</Link>
            <Link to="/profile/orders" className="block py-2 px-4 rounded-lg hover:bg-muted">Orders</Link>
            <Link to="/wishlist" className="block py-2 px-4 rounded-lg hover:bg-muted">Wishlist</Link>
            <Link to="/profile/addresses" className="block py-2 px-4 rounded-lg hover:bg-muted">Addresses</Link>
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="bg-card p-6 rounded-xl border">
            <h2 className="text-2xl font-semibold mb-6">Personal Information</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2">First Name</label>
                  <input type="text" defaultValue="John" className="w-full px-4 py-2 border rounded-lg" />
                </div>
                <div>
                  <label className="block mb-2">Last Name</label>
                  <input type="text" defaultValue="Doe" className="w-full px-4 py-2 border rounded-lg" />
                </div>
              </div>
              <div>
                <label className="block mb-2">Email</label>
                <input type="email" defaultValue="john@example.com" className="w-full px-4 py-2 border rounded-lg" />
              </div>
              <button type="submit" className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// About Page
export function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-semibold mb-6 text-center">About Luxe Beauty</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-muted-foreground mb-6">
            Welcome to Luxe Beauty, your premier destination for high-quality cosmetics and beauty products.
            Founded in 2020, we've been dedicated to bringing you the finest beauty essentials from around the world.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            Our mission is to empower everyone to feel confident and beautiful in their own skin. We carefully curate
            our product selection to ensure that each item meets our high standards of quality, effectiveness, and safety.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-2">100+</h3>
              <p className="text-muted-foreground">Premium Products</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-2">50K+</h3>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-2">4.8</h3>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Contact Page
export function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-semibold mb-8 text-center">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-accent-foreground flex-shrink-0" />
              <div>
                <h3 className="font-medium mb-1">Address</h3>
                <p className="text-muted-foreground">123 Beauty Street, New York, NY 10001</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-accent-foreground flex-shrink-0" />
              <div>
                <h3 className="font-medium mb-1">Phone</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-accent-foreground flex-shrink-0" />
              <div>
                <h3 className="font-medium mb-1">Email</h3>
                <p className="text-muted-foreground">support@luxebeauty.com</p>
              </div>
            </div>
          </div>
          <div className="aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
            Map Placeholder
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="px-4 py-2 border rounded-lg" required />
              <input type="text" placeholder="Last Name" className="px-4 py-2 border rounded-lg" required />
            </div>
            <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-lg" required />
            <input type="text" placeholder="Subject" className="w-full px-4 py-2 border rounded-lg" required />
            <textarea placeholder="Message" rows={6} className="w-full px-4 py-2 border rounded-lg" required />
            <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export function ForgotPasswordPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto bg-card p-8 rounded-xl border">
        <h1 className="text-3xl font-semibold mb-6 text-center">Reset Password</h1>
        <p className="text-muted-foreground mb-6 text-center">
          Enter your email address and we'll send you a link to reset your password.
        </p>
        <form className="space-y-4">
          <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-lg" required />
          <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90">
            Send Reset Link
          </button>
        </form>
        <p className="mt-6 text-center text-sm">
          <Link to="/login" className="text-accent-foreground hover:underline">
            Back to Login
          </Link>
        </p>
      </div>
    </div>
  );
}
