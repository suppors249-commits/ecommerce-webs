import { useState, useMemo } from 'react';
import { ProductCard } from '@/app/components/ProductCard';
import { products, categories } from '@/data/products';
import { Filter, SlidersHorizontal, X } from 'lucide-react';

export function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(
        (p) => p.category.toLowerCase() === selectedCategory
      );
    }

    // Filter by price
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Sort products
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategory, sortBy, priceRange]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center lg:text-left">
        Shop Our Products
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside
          className={`lg:w-64 bg-white rounded-xl border p-6 sticky top-24 ${
            showFilters ? 'block' : 'hidden lg:block'
          }`}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-semibold flex items-center gap-2">
              <Filter className="w-5 h-5" /> Filters
            </h2>
            <button
              onClick={() => setShowFilters(false)}
              className="lg:hidden"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Categories */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">Category</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="category"
                  value="all"
                  checked={selectedCategory === 'all'}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="accent-primary"
                />
                <span className="text-sm">All Products</span>
              </label>
              {categories.map((cat) => (
                <label
                  key={cat.id}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="category"
                    value={cat.id}
                    checked={selectedCategory === cat.id}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="accent-primary"
                  />
                  <span className="text-sm">{cat.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">Price</h3>
            <input
              type="range"
              min="0"
              max="200"
              value={priceRange[1]}
              onChange={(e) =>
                setPriceRange([0, parseInt(e.target.value)])
              }
              className="w-full accent-primary mb-2"
            />
            <div className="flex justify-between text-sm text-gray-500">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>

          <button
            onClick={() => {
              setSelectedCategory('all');
              setPriceRange([0, 200]);
              setSortBy('featured');
            }}
            className="w-full py-2 mt-2 bg-gray-100 rounded-lg text-sm hover:bg-gray-200"
          >
            Reset Filters
          </button>
        </aside>

        {/* Products Section */}
        <div className="flex-1">
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <p className="text-gray-500 text-sm">
              Showing {filteredProducts.length} products
            </p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 px-3 py-2 border rounded-lg"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border rounded-lg bg-white"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="name">Name: A-Z</option>
              </select>
            </div>
          </div>

          {/* Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">
              No products found matching your filters.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
