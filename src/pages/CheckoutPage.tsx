import { useNavigate } from 'react-router-dom';
import { Bounce, toast } from 'react-toastify';

import { CartProduct } from '../components/CartProduct';
import { Input } from '../components/Input';
import { Button } from '../components/Buttons';

import { useCartStore } from '../cartStore';
import { currency } from '../util/currencyFormatter';

export function CheckoutPage() {
  const { products, clearCart } = useCartStore();
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    toast.success('Compra realizada com sucesso!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'light',
      transition: Bounce,
      onClose: () => {
        clearCart();
        navigate('/');
      },
    });
  }

  return (
    <div>
      <h1 className="text-2xl text-slate-700">Finalizar Compra</h1>

      {products.length === 0 ? (
        <div className="flex justify-center items-center">
          <p>Seu carrinho está vazio</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <ul className="flex flex-col gap-4 mt-10">
            {products.map((product) => (
              <li
                key={product.id}
                className="flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <CartProduct product={product} />
              </li>
            ))}
          </ul>
          <p className="text-xl font-bold self-end">
            Total:{' '}
            {currency.format(
              products.reduce((acc, p) => acc + p.price * p.amount, 0)
            )}
          </p>
          <hr />
          <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
            <fieldset className="grid md:grid-cols-2 gap-4">
              <Input
                label="Nome"
                id="name"
                type="text"
                autoComplete="name"
                required
              />
              <Input
                label="CPF"
                id="cpf"
                type="text"
                autoComplete="cpf"
                required
              />
              <Input
                label="Email"
                id="email"
                type="email"
                autoComplete="email"
                required
              />
              <Input
                label="Telefone"
                id="phone"
                type="tel"
                autoComplete="tel"
                required
              />
            </fieldset>
            <fieldset className="grid md:grid-cols-2 gap-4">
              <Input
                label="Endereço"
                id="address"
                type="text"
                autoComplete="address"
                required
              />
              <Input
                label="Número"
                id="number"
                type="text"
                autoComplete="number"
              />
              <Input
                label="Complemento"
                id="complement"
                type="text"
                autoComplete="complement"
              />
              <Input
                label="CEP"
                id="zip"
                type="text"
                autoComplete="zip"
                required
              />
              <Input
                label="Bairro"
                id="neighborhood"
                type="text"
                autoComplete="neighborhood"
                required
              />
              <Input
                label="Cidade"
                id="city"
                type="text"
                autoComplete="city"
                required
              />
              <Input
                label="Estado"
                id="state"
                type="text"
                autoComplete="state"
                required
              />
            </fieldset>

            <Button className="w-fit self-end" type="submit">
              Finalizar Compra
            </Button>
          </form>
        </div>
      )}
    </div>
  );
}
