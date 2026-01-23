import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShopProvider } from '@/context/ShopContext';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { MobileBottomNav } from '@/app/components/MobileBottomNav';
import DiscountPopup from '@/app/components/DiscountPopup';

import AnnouncementBar from "@/app/components/AnnouncementBar";
import { LanguageProvider } from '@/context/LanguageContext';

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
        <LanguageProvider>
          <div className="min-h-screen flex flex-col font-sans">

          
           

            {/* شريط الإعلان الجديد */}
            
                 <AnnouncementBar />  
               
            

            {/* الهيدر */}
           <Header />

            {/* المحتوى الرئيسي */}
            <main className="flex-1 pt-0 pb-20 md:pb-0">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
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
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </main>

            {/* Popup يظهر مرة واحدة عند دخول الصفحة */}
            <DiscountPopup />

            {/* شريط التنقل السفلي على الموبايل */}
            <MobileBottomNav />

            {/* الفوتر */}
            <Footer />

          </div>
        </LanguageProvider>
      </ShopProvider>
    </Router>
  );
}
