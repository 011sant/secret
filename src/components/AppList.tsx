import React from 'react';
import { ProductCard } from './ProductCard';

interface AppListProps {
  products: {
    title: string;
    description: string;
    icon: React.ReactNode;
    link: string;
    stats?: string[];
  }[];
}

export function AppList({ products }: AppListProps) {
  console.log("AppList component rendered");
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <ProductCard
          key={product.title}
          title={product.title}
          description={product.description}
          icon={product.icon}
          link={product.link}
          stats={product.stats}
        />
      ))}
    </div>
  );
}
