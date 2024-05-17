import guitar1 from './assets/products/guitar1.jpg';
import ProductCard from './components/ProductCard';

function App() {
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
      <main className="grid px-8 gap-8 my-6 mt-24 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-[992px] mx-auto">
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
      </main>
    </>
  );
}

export default App;
