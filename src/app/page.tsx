'use client';

import { useState } from 'react';
import { Header } from '@/components/header';
import { ProductCard } from '@/components/product-card';
import { products } from '@/lib/products';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';

export default function Home() {
  const maxProductPrice = Math.ceil(Math.max(...products.map((p) => p.price)));
  const [maxPrice, setMaxPrice] = useState(maxProductPrice);

  const filteredProducts = products.filter(
    (product) => product.price <= maxPrice
  );

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1 animate-scale-up">
        <section className="container px-4 md:px-6 py-8 md:py-12">
          <div className="mb-8 p-6 border rounded-lg shadow-sm bg-card">
            <h2 className="text-xl font-bold mb-4">Filter by Price</h2>
            <div className="grid gap-4">
              <div className="flex items-center gap-4">
                <Label
                  htmlFor="price-range"
                  className="shrink-0 font-semibold w-36"
                >
                  Max Price: ${maxPrice.toFixed(2)}
                </Label>
                <Slider
                  id="price-range"
                  max={maxProductPrice}
                  step={1}
                  value={[maxPrice]}
                  onValueChange={(value) => setMaxPrice(value[0])}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p className="col-span-full text-center text-muted-foreground">
                No products match the selected price range.
              </p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
