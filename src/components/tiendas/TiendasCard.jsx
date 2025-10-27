import React from 'react';
import { Clock, MapPin, MapPinned, PhoneCall } from 'lucide-react';

export const TiendasCard = ({
  imagenTienda,
  tienda,
  ubicacion,
  telefono,
  horario,
  linkWaze,
  linkMaps,
  isExpanded, 
  onToggle,
}) => {

  // Función para manejar el clic en el botón de toggle
  const handleToggleClick = (e) => {
    e.preventDefault();
    onToggle();
  };

  return (
    <article className="max-w-xl mx-auto bg-white rounded-3xl shadow-xl my-6 p-4">
      <div className="flex gap-4">
        {/* Contenedor de la Imagen */}
        <div className="shrink-0 w-40 h-40">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={imagenTienda}
            alt={tienda}
          />
        </div>

        {/* Contenido de Título y Ubicación */}
        <div className="flex flex-col justify-center py-2">
          <h2 className="text-xl font-bold text-gray-900 leading-snug">
            {tienda}
          </h2>
          <p className="mt-1 text-base text-gray-600">
            {ubicacion}
          </p>

          {/* Botón "Más Información" (visible solo si NO está expandido) */}
          {!isExpanded && (
            <div className="mt-3">
              <a 
                href="#" 
                onClick={handleToggleClick} 
                className="text-base text-gray-600 border-b border-gray-600 hover:text-gray-900 cursor-pointer font-semibold"
              >
                Más Información
              </a>
            </div>
          )}
        </div>
      </div>
      
      
      {isExpanded && (

      <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
        
        {/* Teléfono */}
        <div className="flex items-center text-gray-800">
          <PhoneCall className='mr-3 text-orange-500' />
          <span className="text-base font-semibold">{telefono}</span>
        </div>
        
        {/* Horario */}
        <div className="flex items-center text-gray-800">
          <Clock className='mr-3 text-orange-500' /> 
          <span className="text-base font-semibold">{horario}</span>
        </div>
        
        {/* Enlaces de Ubicación */}
        <div className="flex items-center pt-2">
          <div className="flex gap-2 mr-3">
             <a href={linkWaze} target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition">
                <MapPin className='inline-block bg-gray-200 rounded-lg text-center leading-8'/>
             </a>
             <a href={linkMaps} target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition">
                <MapPinned className='inline-block bg-gray-200 rounded-lg text-center leading-8' />
             </a>
          </div>
          <span className="text-base text-gray-600 border-b border-gray-600 hover:text-gray-900 cursor-pointer">
            Haz click para acceder a la ubicación
          </span>
        </div>

        {/* Botón de Menos Información */}
        <div className="mt-3">
          <a href="#" onClick={handleToggleClick}className="text-base text-gray-600 border-b border-gray-600 hover:text-gray-900 cursor-pointer">
            Menos información
          </a>
        </div>
      </div>
      )}

    </article>
  );
};