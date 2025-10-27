import './App.css'
import ProductsList from './productos.json'
import { useEffect, useState } from 'react'
import ProductCard from './components/ProductCard'
import { FloatingChatbot } from './components/chat/FloatingChat'
import { Link } from 'react-router'
import { MainOptions } from './components/MainOptions'

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
      <MainOptions/>
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
