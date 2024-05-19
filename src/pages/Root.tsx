import { Link, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { LinkButton } from '../components/Buttons';

import { useCartStore } from '../cartStore';

export function Root() {
  const { countProducts } = useCartStore();
  const cartItemsCount = countProducts();

  return (
    <>
      <header className="fixed w-full bg-[#f7fafc] top-0">
        <div className="flex justify-between align-center px-8 py-5 max-w-[992px] mx-auto">
          <Link to="/">
            <h1 className="font-bold text-2xl text-slate-700 leading-10">
              GuitarShop
            </h1>
          </Link>
          <LinkButton to="/cart">
            Carrinho{cartItemsCount > 0 && ` (${cartItemsCount})`}
          </LinkButton>
        </div>
      </header>
      <main className="px-8 my-6 mt-24 max-w-[992px] mx-auto">
        <Outlet />
      </main>
      <ToastContainer />
    </>
  );
}
