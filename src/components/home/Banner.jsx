import { BadgeCheck } from 'lucide-react';

export const Banner = () => {
  return (
    <>
      <header className="flex justify-evenly text-nowrap py-6 items-center bg-crtech-grey text-white">
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
          <a className="flex gap-2 cursor-pointer">Tiendas</a>
          <span className="flex gap-2 cursor-pointer">|</span>
          <a className="flex gap-2 cursor-pointer hover:text-orange-600" href='https://www.crtechgaming.com'>
            www.crtechgaming.com
          </a>
        </div>
      </header>
    </>
  );
};
