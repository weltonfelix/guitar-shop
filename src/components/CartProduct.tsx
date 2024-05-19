import { currency } from '../util/currencyFormatter';

interface CartProductProps {
  product: Product | Omit<Product, 'description'>;
}

export function CartProduct({ product }: CartProductProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 flex-1">
      <img
        src={product.imageURL}
        className="rounded-md"
        width={96}
        alt={product.title}
      />
      <span className="text-lg">{product.title}</span>
      <span className="font-bold">{currency.format(product.price)}</span>
    </div>
  );
}
