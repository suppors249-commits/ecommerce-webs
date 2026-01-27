import { useState, useMemo } from "react";
import { ProductCard } from "@/app/components/ProductCard";
import { products } from "@/data/products";

export function ShopPage() {
  const productsPerPage = 8; // عدد المنتجات في كل صفحة
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / productsPerPage);

  // المنتجات التي سيتم عرضها في الصفحة الحالية
  const currentProducts = useMemo(() => {
    const start = (currentPage - 1) * productsPerPage;
    const end = start + productsPerPage;
    return products.slice(start, end);
  }, [currentPage]);

  // لتغيير الصفحة
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" }); // ترجع لفوق عند تغيير الصفحة
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8 text-[#154734]">Products</h1>

      {/* Grid المنتجات */}
      {currentProducts.length > 0 ? (
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-gray-500">No products found.</div>
      )}

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-3 py-1 rounded border ${
              page === currentPage
                ? "bg-orange-500 text-white border-orange-500"
                : "text-gray-700 border-gray-300 hover:bg-gray-200"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}
