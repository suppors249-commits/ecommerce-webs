import { Link } from 'react-router-dom';
import { Search, X, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { products } from '@/data/products';

interface HeaderProps {
  onCartOpen: () => void;
  cartOpen: boolean;
}

export function Header({ onCartOpen, cartOpen }: HeaderProps) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [language, setLanguage] = useState<'en' | 'ar'>('en'); // لغة الموقع

  const translations = {
    en: {
      searchPlaceholder: "Search products...",
      logo: "VELORA",
      noResults: "No products found"
    },
    ar: {
      searchPlaceholder: "ابحث عن المنتجات...",
      logo: "فيلورا",
      noResults: "لا توجد منتجات"
    }
  };

  const t = translations[language];

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <header className="sticky top-0 z-90 w-full border-b bg-card/100 backdrop-blur text-[#154734]">
      <div className="container mx-auto px-5 md:px-2 flex items-center justify-between h-11">

        {/* الوسط: اللوجو */}
        <Link to="/" className="text-lg md:text-xl font-semibold tracking-tight">
          {t.logo}
        </Link>

        {/* اليمين: أيقونات البحث والسلة */}
        <div className="flex items-center gap-2">
          {!cartOpen && (
            <>
              {/* زر البحث */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-5 rounded-full hover:bg-gray-200 transition-colors"
              >
                <Search className="h-5 w-5" />
              </button>
            </>
          )}

          {/* زر Cart */}
          <button
            onClick={onCartOpen}
            className="p-2 rounded-full hover:bg-gray-200 transition-colors"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* خانة البحث */}
      {!cartOpen && searchOpen && (
        <div className="container mx-auto px-5 py-4 bg-white border-b relative text-black">
          {/* زر X للإغلاق */}
          <button
            onClick={() => { setSearchOpen(false); setSearchTerm(''); }}
            className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-200 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c4a682]"
          />

          {searchTerm && (
            <div className="mt-2 max-h-60 overflow-y-auto border rounded-lg bg-white text-black">
              {filteredProducts.length > 0 ? (
                filteredProducts.map(p => (
                  <Link
                    key={p.id}
                    to={`/product/${p.id}`}
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setSearchOpen(false)}
                  >
                    {p.name}
                  </Link>
                ))
              ) : (
                <div className="px-4 py-2 text-gray-500">{t.noResults}</div>
              )}
            </div>
          )}
        </div>
      )}
    </header>
  );
}
