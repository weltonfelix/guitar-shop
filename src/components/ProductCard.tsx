interface ProductCardProps {
  imageURL: string;
  title: string;
  price: number;
}

function ProductCard({ imageURL, price, title }: ProductCardProps) {
  const currency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <a
      href="#"
      className="flex flex-col bg-slate-200 rounded-lg w-full overflow-clip"
    >
      <img src={imageURL} className="w-full" alt={title} />
      <div className="px-4 py-2 flex flex-col gap-1">
        <span className="text-sm block">{title}</span>
        <div className="flex justify-between">
          <span className="text-md text-bold">{currency.format(price)}</span>
          <button className="bg-slate-400 hover:bg-slate-500 transition-colors rounded-md text-sm w-8 h-8 self-end">
            +
          </button>
        </div>
      </div>
    </a>
  );
}

export default ProductCard;
