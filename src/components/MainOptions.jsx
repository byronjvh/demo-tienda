import { useNavigate } from 'react-router'
import CategoryButton from './CategoryButton'
import PrimaryButton from './PrimaryButton'
import { Gear, Offer } from './Icons'
import { LucideMenu, Menu, MenuIcon, MenuSquare, MenuSquareIcon, SquareMenu, Store } from 'lucide-react';

export const MainOptions = () => {

  const CATEGORIES = [
    'Tecnología',
    'Gaming',
    'Components',
    'Periféricos',
    'Smart Home',
    'Redes y Seguridad',
    'Tecno Educación'
  ]

  const navigation = useNavigate()

  const handleClickStores = () => {
    navigation('/tiendas')
  }

  return (
    <>
      <div className='flex justify-evenly items-center py-4 px-2 gap-2'>
        <button className='flex lg:hidden items-center font-bold gap-1 cursor-pointer hover:text-gray-700 transition-colors duration-200'>
          <Menu size={26} /> <span className='hidden md:inline'>Menú</span>
        </button>
        <ul className='hidden gap-6 text-lg flex-wrap lg:flex'>
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
        <div className='flex gap-3 sm:gap-6 flex-nowrap justify-end'>
          <PrimaryButton className="hidden sm:inline" title="Tiendas" onClick={handleClickStores}>
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
    </>
  )
}
