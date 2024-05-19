import { LinkButton } from '../components/Buttons';

import { useCartStore } from '../cartStore';
import { currency } from '../util/currencyFormatter';
import { CartProduct } from '../components/CartProduct';

export function CartPage() {
  const { products, updateAmount, removeFromCart } = useCartStore();

  if (products.length == 0) {
    return (
      <div className="flex justify-center items-center">
        <p>Seu carrinho está vazio</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl text-slate-700">Carrinho</h1>
      <div className="flex flex-col gap-4">
        <ul className="flex flex-col gap-4 mt-10">
          {products.map((product) => (
            <li
              key={product.id}
              className="flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <CartProduct product={product} />
              <div className="flex self-end md:self-center items-center gap-4">
                <input
                  className="bg-slate-200 rounded-md w-20 p-2"
                  type="number"
                  name="amount"
                  value={product.amount}
                  onChange={(e) => {
                    updateAmount(product.id, parseInt(e.target.value));
                  }}
                  id={`p-${product.id}.amount`}
                  min="1"
                />
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="text-slate-50 font-bold w-fit bg-slate-700 hover:bg-slate-600 transition-colors rounded-md text-sm p-2"
                >
                  Remover
                </button>
              </div>
            </li>
          ))}
        </ul>
        <p className="text-xl font-bold self-end">
          Total:{' '}
          {currency.format(
            products.reduce((acc, p) => acc + p.price * p.amount, 0)
          )}
        </p>
        <LinkButton to="/checkout" className="md:w-fit">
          Finalizar Compra
        </LinkButton>
      </div>
    </div>
  );
}
