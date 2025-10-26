import './App.css'
import CategoryButton from './components/CategoryButton'
import PrimaryButton from './components/PrimaryButton'
import { Gear, Offer } from './components/Icons'
import ProductsList from './productos.json'
import { useEffect, useState } from 'react'
import ProductCard from './components/ProductCard'
import { Store } from 'lucide-react';
import { FloatingChatbot } from './components/chat/FloatingChat'
import { Link } from 'react-router'

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
    if (products) return
    setTimeout(() => {
      setProducts(ProductsList)
    }, 500);
  }, [])



  return (
    <>
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
          <PrimaryButton title="Tiendas">
            <Store width="22" />
          </PrimaryButton>
          <PrimaryButton title="PC Builder">
            <Gear />
          </PrimaryButton>
          <PrimaryButton title="Ofertas">
            <Offer size='22px' />
          </PrimaryButton>
        </div>
      </div>
      <main className='flex gap-8 justify-center mt-4'>
        {
          products ? (
            <>
              <aside className='w-56'>
                <div className='bg-gray-300 font-bold px-2 text-center'>FILTRAR POR</div>
              </aside>
              <div className='p-8 border-t border-gray-300'>
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
                      <Link to={`/${product.sku}`}>
                        <ProductCard
                          name={product.name}
                          price={product.price}
                          image={product.image} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <div>Cargando...</div>
          )
        }
        <FloatingChatbot />
      </main>
    </>
  )
}

export default App
