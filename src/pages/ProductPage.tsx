import axios from 'axios';
import { useLoaderData } from 'react-router-dom';

import { currency } from '../util/currencyFormatter.ts';
import { useCartStore } from '../cartStore.ts';
import { Button } from '../components/Buttons.tsx';

export async function loader({ params }: { params: { id: string } }) {
  const { data } = (await axios.get(`/products.json`)) as { data: Product[] };
  return {
    product: data.find((product) => product.id.toString() === params.id),
  };
}

export function ProductPage() {
  const { product } = useLoaderData() as { product: Product };

  const { addToCart } = useCartStore();

  if (!product) {
    return (
      <div className="flex justify-center items-center">
        <p>Produto não encontrado</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-start gap-6">
        <img
          src={product.imageURL}
          className="w-96 rounded-md self-center"
          alt={product.title}
        />
        <div className="flex flex-col gap-6 flex-1 s">
          <div className="flex flex-col gap-2 ">
            <h2 className="text-3xl">{product.title}</h2>
            <p className="text-lg">{currency.format(product.price)}</p>
          </div>
          <Button
            onClick={() => addToCart({ ...product, amount: 1 })}
            className="w-fit"
          >
            Adicionar ao Carrinho
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl text-slate-900 font-bold">Descrição</h3>
        <p className="text-justify">{product.description}</p>
      </div>
    </div>
  );
}
