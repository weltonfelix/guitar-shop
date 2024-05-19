import { useEffect, useState } from 'react';

import { ProductCard } from '../components/ProductCard';

export function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('/products.json')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading)
    return (
      <div className="flex justify-center items-center">
        <p>Carregando...</p>
      </div>
    );

  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product: Product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          imageURL={product.imageURL}
        />
      ))}
    </div>
  );
}
