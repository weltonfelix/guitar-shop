import { ProductCard } from '../components/ProductCard';

import guitar1 from '../assets/products/guitar1.jpg';

export function HomePage() {
  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <ProductCard
        title="Violão Di Giorgio Clássico 38E"
        price={1200}
        imageURL={guitar1}
      />
      <ProductCard
        title="Violão Di Giorgio Clássico 38E"
        price={1200}
        imageURL={guitar1}
      />
      <ProductCard
        title="Violão Di Giorgio Clássico 38E"
        price={1200}
        imageURL={guitar1}
      />
      <ProductCard
        title="Violão Di Giorgio Clássico 38E"
        price={1200}
        imageURL={guitar1}
      />
      <ProductCard
        title="Violão Di Giorgio Clássico 38E"
        price={1200}
        imageURL={guitar1}
      />
      <ProductCard
        title="Violão Di Giorgio Clássico 38E"
        price={1200}
        imageURL={guitar1}
      />
      <ProductCard
        title="Violão Di Giorgio Clássico 38E"
        price={1200}
        imageURL={guitar1}
      />
      <ProductCard
        title="Violão Di Giorgio Clássico 38E"
        price={1200}
        imageURL={guitar1}
      />
    </div>
  );
}
