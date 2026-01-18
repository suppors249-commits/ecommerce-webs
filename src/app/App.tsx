import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShopProvider } from '@/context/ShopContext';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { HomePage } from '@/app/pages/HomePage';
import { ShopPage } from '@/app/pages/ShopPage';
import { ProductDetailPage } from '@/app/pages/ProductDetailPage';
import { CartPage } from '@/app/pages/CartPage';
import {
  CategoriesPage,
  WishlistPage,
  CheckoutPage,
  LoginPage,
  RegisterPage,
  ForgotPasswordPage,
  ProfilePage,
  AboutPage,
  ContactPage,
} from '@/app/pages/OtherPages';

export default function App() {
  return (
    <Router>
      <ShopProvider>
        <div className="min-h-screen flex flex-col" style={{ fontFamily: 'Inter, sans-serif' }}>
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/wishlist" element={<WishlistPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/profile/*" element={<ProfilePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ShopProvider>
    </Router>
  );
}
