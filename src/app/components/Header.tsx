import { Link } from 'react-router-dom';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import { useShop } from '@/context/ShopContext';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const { getCartCount } = useShop();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur">
      <div className="container mx-auto px-2 md:px-4">
        <div className="flex h-16 items-center justify-between w-full">

          {/* Menu على الشمال */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {/* Logo في الوسط */}
        <Link
  to="/"
  className="mx-auto text-lg md:text-xl font-semibold tracking-tight text-[#c4a682]"
>
  VELORA
</Link>


          {/* Cart و Profile على اليمين */}
          <div className="flex items-center space-x-3 md:space-x-4">
            <Link to="/cart" className="relative hover:text-accent-foreground transition-colors">
              <ShoppingCart className="h-5 w-5 md:h-6 md:w-6" />
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-accent-foreground text-[10px] text-white">
                  {getCartCount()}
                </span>
              )}
            </Link>
            <Link to="/profile" className="hover:text-accent-foreground transition-colors">
              <User className="h-5 w-5 md:h-6 md:w-6" />
            </Link>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t"
          >
            <nav className="container mx-auto px-2 py-4 flex flex-col space-y-3">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-sm hover:text-accent-foreground transition-colors">
                Home
              </Link>
              <Link to="/shop" onClick={() => setMobileMenuOpen(false)} className="text-sm hover:text-accent-foreground transition-colors">
                Shop
              </Link>
              <Link to="/categories" onClick={() => setMobileMenuOpen(false)} className="text-sm hover:text-accent-foreground transition-colors">
                Categories
              </Link>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-sm hover:text-accent-foreground transition-colors">
                About
              </Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-sm hover:text-accent-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
