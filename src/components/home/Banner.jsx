import { BadgeCheck } from 'lucide-react';

export const Banner = () => {
  return (
    <>
      <header className="flex justify-evenly text-nowrap py-2 items-center bg-crtech-grey text-white">
        <p className="text-lg flex items-center gap-1">
          <span className="text-xl">
            <BadgeCheck color="#ff5800" />
          </span>
          <span className="text-xl font-bold">+12000</span> Productos
          Verificados
        </p>
        <div className="flex gap-2 text-sm">
          <p> Llámanos: La V 9:00 AM a 6:00 PM (+506) 22341002</p>
        </div>
        <div className="flex gap-2 text-sm">
          <button className="flex gap-2 cursor-pointer">Tiendas</button>
          <span className="flex gap-2 cursor-pointer">|</span>
          <button className="flex gap-2 cursor-pointer">
            www.crtechgaming.com
          </button>
        </div>
      </header>
    </>
  );
};
