import { Link, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { FaGuitar, FaShoppingCart } from 'react-icons/fa';

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
            <h1 className="font-bold text-2xl text-slate-700 leading-10 flex gap-1 items-center">
              <FaGuitar />
              GuitarShop
            </h1>
          </Link>
          <LinkButton
            to="/cart"
            className="items-center justify-center relative flex gap-2"
          >
            <FaShoppingCart size={24} />
            {cartItemsCount > 0 && (
              <span className="absolute top-[0.6rem] left-[1.2rem] mx-auto text-slate-700 text-xs">
                {cartItemsCount}
              </span>
            )}
            Carrinho
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
