import guitar1 from '../assets/products/guitar1.jpg';

export function ProductPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-start gap-6">
        <img
          src={guitar1}
          className="w-96 rounded-md self-center"
          alt="Violão Di Giorgio Clássico 38E"
        />
        <div className="flex flex-col gap-6 flex-1 s">
          <div className='flex flex-col gap-2 '>
            <h2 className="text-3xl">Violão Di Giorgio Clássico 38E</h2>
            <p className="text-lg">R$ 1200</p>
          </div>
          <button className="text-slate-50 font-bold w-fit bg-slate-700 hover:bg-slate-600 transition-colors rounded-md text-sm p-2">
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl text-slate-900 font-bold">Descrição</h3>
        <p className="text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
          accusantium doloremque voluptas quidem necessitatibus ea libero error
          placeat? Corporis consequuntur quibusdam optio omnis, totam aperiam
          sint minus amet sunt natus.
        </p>
      </div>
    </div>
  );
}
