import './App.css'
import CategoryButton from './components/CategoryButton'
import PrimaryButton from './components/PrimaryButton'
import { Cart, Gear, Offer } from './components/Icons'
import ProductsList from './productos.json'
import { useEffect, useState } from 'react'

const CATEGORIES = [
  'Tecnología',
  'Gaming',
  'Components',
  'Periféricos',
  'Smart Home',
  'Redes y Seguridad',
  'Tecno Educación'
]

function App() {
  const [products, setProducts] = useState(null)

  // simula llamada a la api
  useEffect(() => {
    setTimeout(() => {
      setProducts(ProductsList)
    }, 500);
  }, [])

  return (
    <>
      <header className='flex justify-evenly text-nowrap py-2 items-center'>
        <p className='text-lg flex items-center gap-1'><span className='text-xl font-bold'>+12000</span> productos garantizados</p>
        <div className='flex gap-2 text-sm'>
          <p> Call Center (+506) 2234 1032 / WhatsApp (+506) 8900 5090 </p>
          --
          <p> L-V 8:00 AM - 5:00 PM / DOM 8:00 AM - 4:00 PM</p>
        </div>
        <button className='flex gap-2 cursor-pointer'>
          Nuestras Tiendas
        </button>
      </header>
      <div className='grid grid-cols-3 items-center gap-8 py-6'>
        <img className='w-56 place-self-center' src="https://cdn-ilaabjh.nitrocdn.com/OzMRamyAKVKkRfGWMkLhcUdtvVYEmpJD/assets/images/optimized/rev-ecca6a1/crtechstore.com/wp-content/uploads/2020/06/Logo-cr-tech-06.png" alt="logo" />
        <div className='place-self-center border border-gray-400 rounded-xl h-12 flex gap-1.5 w-full max-w-96 items-center p-1.5 '>
          <input className='w-full h-full p-1' type="text" placeholder='Encuentra lo que buscas' />
          <button className='h-full aspect-square rounded-lg bg-orange-500 text-white font-bold cursor-pointer'>S</button>
        </div>
        <div className='place-self-center flex gap-2'>
          <button className='cursor-pointer'>Ingresar</button>
          |
          <button className='cursor-pointer'>Registrarse</button>
          <button className='text-orange-500 rounded-md cursor-pointer'><Cart size='28px' /></button>
        </div>
      </div>
      <div className='flex justify-evenly items-center py-4 '>
        <ul className='flex gap-6 text-lg'>
          {
            CATEGORIES.map((category, key) => (
              <li key={key}>
                <CategoryButton >
                  {category}
                </CategoryButton>
              </li>
            ))
          }
        </ul>
        <div className='flex gap-6 '>
          <PrimaryButton title="PC Builder">
            <Gear />
          </PrimaryButton>
          <PrimaryButton title="Ofertas">
            <Offer size='22px' />
          </PrimaryButton>
        </div>
      </div>
      <main className='flex gap-8 justify-center'>
        {
          products ? (
            <>
              <aside className='w-56'>
                <div>filtros</div>
              </aside>
              <div className=''>
                <div className='flex text-sm justify-between px-2'>
                  <p>Mostrando 1-{products.length} de {products.length} resultados</p>
                  <select id="order-select">
                    <option value="">Ordenar por... </option>
                    <option value="highest">Precio mayor a menor</option>
                    <option value="lowest">Precio menor a mayor</option>
                  </select>
                </div>
                <ul className='grid grid-cols-4 gap-2'>
                  {products?.map(product => (
                    <li key={product.sku}>
                      <article className='max-w-48 text-sm flex flex-col gap-1 items-center p-2 cursor-pointer'>
                        <img className='h-40 aspect-square object-contain' src={product.image} alt={product.name} />
                        <span className='bg-orange-500 text-white py-1 px-3 font-bold self-start rounded-tl-lg rounded-br-lg'>Envío Rápido</span>
                        <h4 className='h-10 line-clamp-2'>{product.name}</h4>
                        <p className='w-full font-bold text-base text-orange-500'>{product.price}</p>
                      </article>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <div>Cargando</div>
          )
        }
      </main>
    </>
  )
}

export default App
