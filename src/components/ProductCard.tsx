import { Link } from 'react-router-dom';

import { useCartStore } from '../cartStore';
import { currency } from '../util/currencyFormatter';

interface ProductCardProps {
  id: number;
  imageURL: string;
  title: string;
  price: number;
}

export function ProductCard({ imageURL, id, price, title }: ProductCardProps) {
  const { addToCart } = useCartStore();

  return (
    <Link
      to={`/product/${id}`}
      className="flex flex-col bg-slate-200 rounded-lg w-full overflow-clip"
    >
      <img src={imageURL} className="w-full h-64 object-cover" alt={title} />
      <div className="px-4 py-2 flex flex-col gap-1 justify-between flex-1">
        <span className="text-sm max-h-10 line-clamp-2 text-ellipsis">
          {title}
        </span>
        <div className="flex justify-between">
          <span className="text-md text-bold">{currency.format(price)}</span>
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart({
                id,
                title,
                price,
                imageURL,
                amount: 1,
              });
            }}
            className="bg-slate-400 hover:bg-slate-700 transition-colors rounded-md text-sm w-8 h-8 self-end"
          >
            +
          </button>
        </div>
      </div>
    </Link>
  );
}
