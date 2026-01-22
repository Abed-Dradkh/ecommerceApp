'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/header';
import { ProductCard } from '@/components/product-card';
import { products } from '@/lib/products';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Skeleton } from '@/components/ui/skeleton';

export default function Home() {
  const [sortOrder, setSortOrder] = useState('low-to-high');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOrder === 'low-to-high') {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1 animate-scale-up">
        <section className="container px-4 md:px-6 py-8 md:py-12">
          <div className="mb-8 p-6 border rounded-lg shadow-sm bg-card flex items-center justify-between">
            <h2 className="text-xl font-bold">Products</h2>
            <div className="flex items-center gap-4">
              <Label htmlFor="sort-order" className="shrink-0 font-semibold">
                Sort by:
              </Label>
              <Select onValueChange={setSortOrder} value={sortOrder}>
                <SelectTrigger id="sort-order" className="w-[180px]">
                  <SelectValue placeholder="Sort by price" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low-to-high">Price: Low to High</SelectItem>
                  <SelectItem value="high-to-low">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {isClient
              ? sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              : Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <Skeleton className="h-48 w-full rounded-lg" />
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-5 w-1/2" />
                    <div className="flex items-center justify-between mt-2">
                      <Skeleton className="h-8 w-24" />
                      <Skeleton className="h-10 w-32" />
                    </div>
                  </div>
                ))}
          </div>
        </section>
      </main>
    </div>
  );
}
