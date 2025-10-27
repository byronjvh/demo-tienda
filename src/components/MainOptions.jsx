import { useNavigate } from 'react-router'
import CategoryButton from './CategoryButton'
import PrimaryButton from './PrimaryButton'
import { Gear, Offer } from './Icons'
import { Store } from 'lucide-react';

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
          <PrimaryButton title="Tiendas" onClick={handleClickStores}>
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
