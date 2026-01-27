import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShopProvider } from "@/context/ShopContext";
import { LanguageProvider } from "@/context/LanguageContext";

import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { MobileBottomNav } from "@/app/components/MobileBottomNav";
import DiscountPopup from "@/app/components/DiscountPopup";
import CartDrawer from "@/app/components/CartDrawer";

import AnnouncementBar from "@/app/components/AnnouncementBar";

import { HomePage } from "@/app/pages/HomePage";
import { ShopPage } from "@/app/pages/ShopPage";
import { ProductDetailPage } from "@/app/pages/ProductDetailPage";

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
} from "@/app/pages/OtherPages";

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <Router>
      <ShopProvider>
        <LanguageProvider>
          <div className="min-h-screen flex flex-col font-sans">

            {/* شريط الإعلان */}
            <AnnouncementBar />

            {/* الهيدر مع معرفة إذا CartDrawer مفتوح */}
            <Header onCartOpen={() => setCartOpen(true)} cartOpen={cartOpen} />

            {/* محتوى الصفحة */}
            <main className="flex-1 pt-0 pb-20 md:pb-0">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/product/:id" element={<ProductDetailPage />} />
                <Route path="/categories" element={<CategoriesPage />} />
                <Route path="/wishlist" element={<WishlistPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </main>

            {/* Popup يظهر مرة واحدة عند دخول الصفحة */}
            <DiscountPopup />

            {/* Cart Drawer */}
            <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

            {/* شريط التنقل السفلي على الموبايل */}
            {!cartOpen && <MobileBottomNav />}

            {/* الفوتر */}
            <Footer />
          </div>
        </LanguageProvider>
      </ShopProvider>
    </Router>
  );
}
