import { Link, useLocation } from 'react-router-dom';

import { Home, Grid, Info, ShoppingCart, User } from 'lucide-react';

import { useShop } from '@/context/ShopContext';

export function MobileBottomNav() {
  const location = useLocation();
  const { getCartCount } = useShop();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-card md:hidden " style={{ backgroundColor: "#f2f9f5" }}>
      <div className="flex justify-around items-center h-20">

        {/* الأقسام */}
        <Link to="/categories" className="flex flex-col items-center  text-[#154734]">
          <div className={`p-0 rounded-full ${isActive('/categories') ? 'bg-[#154734]/30' : ''}`}>
            <Grid className={`h-7 w-9 ${isActive('/categories') ? 'text-[#154734]' : 'text-muted-foreground'}`} />
          </div>
         
        </Link>

        {/* أيقونة جديدة: عنا */}
        <Link to="/about" className="flex flex-col items-center text-xs">
  <div className={`p-3 rounded-full ${isActive('/about') ? 'bg-[#154734]/20' : ''}`}>
    <Info className={`h-7 w-9 ${isActive('/about') ? 'text-[#154734]' : 'text-muted-foreground'}`} />
  </div>
</Link>


        {/* الرئيسية ← الأيقونة أكبر */}
        <Link to="/" className="flex flex-col items-center text-xs -mt-3">
          <div className={`p-3 rounded-full ${isActive('/') ? 'bg-[#154734]/40' : ''}`}>
            <Home className={`h-7 w-7 ${isActive('/') ? 'text-[#154734]' : 'text-muted-foreground'}`} />
          </div>
         
        </Link>

        {/* السلة */}
        <Link to="/cart" className="flex flex-col items-center text-xs relative">
          <div className={`p-2 rounded-full ${isActive('/cart') ? 'bg-[#154734]/20' : ''}`}>
            <ShoppingCart className={`h-7 w-9 ${isActive('/cart') ? 'text-[#154734]' : 'text-muted-foreground'}`} />
          </div>
          <span className={`${isActive('/cart') ? 'text-[#154734]' : 'text-muted-foreground'}`}></span>

       
        </Link>

        {/* حسابي */}
        <Link to="/profile" className="flex flex-col items-center text-[#154734]">
          <div className={`p-2 rounded-full ${isActive('/profile') ? 'bg-[#154734]/20' : ''}`}>
            <User className={`h-7 w-9 ${isActive('/profile') ? 'text-[#154734]' : 'text-muted-foreground'}`} />
          </div>
          
        </Link>

      </div>
    </nav>
  );
}
