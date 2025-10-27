import { useEffect, useState } from 'react';
import { TiendasCard } from '../components/tiendas/TiendasCard';
import TiendasList from '../../public/data/tiendas.json';

export const Tiendas = () => {
  const [tiendas, setTiendas] = useState(null);
  const [expandedStores, setExpandedStores] = useState({});

  // Simula llamada a la api
  useEffect(() => {
    setTimeout(() => {
      setTiendas(TiendasList);
    }, 500);
  }, []);

  /**
   * Función para alternar el estado de expansión de una tienda específica.
   * Utiliza el index como identificador único.
   */
  const handleToggleInfo = (index) => {
    setExpandedStores(prevState => ({
      ...prevState,
      [index]: !prevState[index] // Invierte el estado actual (true a false, o viceversa)
    }));
  };

  return (
    <main className="max-w-7xl mx-auto py-8">
      <header className="flex justify-evenly text-nowrap py-20 items-center bg-crtech-grey text-white"></header>
      {tiendas ? (
        <>
          <div className="flex justify-evenly mx-auto px-4 sm:px-6 lg:px-8 bg-gray-100 rounded-3xl mt-4">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tiendas?.map((tienda, index) => {
                // Determina si la tienda debe mostrar la información completa
                const isExpanded = !!expandedStores[index];
                
                return (
                  <li key={index}>
                    <TiendasCard
                      horario={tienda.horario}
                      imagenTienda={tienda.imagenTienda}
                      tienda={tienda.tienda}
                      ubicacion={tienda.ubicacion}
                      onToggle={() => handleToggleInfo(index)}
                      isExpanded={isExpanded}
                      telefono={tienda.telefono}
                      linkMaps={tienda.linkMaps}
                      linkWaze={tienda.linkWaze}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      ) : (
        <div className="text-center p-8">Cargando...</div>
      )}
    </main>
  );
};