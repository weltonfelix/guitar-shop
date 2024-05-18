import { Outlet } from 'react-router-dom';

export function Root() {
  return (
    <>
      <header className="fixed w-full bg-[#f7fafc] top-0">
        <div className="flex justify-between align-center px-8 py-5 max-w-[992px] mx-auto">
          <h1 className="font-bold text-2xl text-slate-700 leading-10">
            GuitarShop
          </h1>
          <a
            href="#"
            className="bg-slate-700 hover:bg-slate-600 transition-colors text-slate-50 font-bold p-2 rounded-lg"
          >
            Carrinho
          </a>
        </div>
      </header>
      <main className="px-8 my-6 mt-24 max-w-[992px] mx-auto">
        <Outlet />
      </main>
    </>
  );
}
