import { Search } from 'lucide-react';
import { Banner } from './home/banner';
import { Cart } from './Icons';

export default function Header() {
    return (
        <>
            <Banner />
            <div className='grid grid-cols-3 items-center gap-8 py-6'>
                <img className='w-56 place-self-center' src="https://cdn-ilaabjh.nitrocdn.com/OzMRamyAKVKkRfGWMkLhcUdtvVYEmpJD/assets/images/optimized/rev-ecca6a1/crtechstore.com/wp-content/uploads/2020/06/Logo-cr-tech-06.png" alt="logo" />
                <div className='place-self-center border border-gray-400 rounded-xl h-12 flex gap-1.5 w-full max-w-96 items-center p-1.5 '>
                    <input className='w-full h-full p-1' type="text" placeholder='Encuentra lo que buscas' />
                    <button className='h-full aspect-square rounded-lg flex justify-center items-center bg-orange-500 text-white cursor-pointer'><Search width="22" /></button>
                </div>
                <div className='place-self-center flex gap-2'>
                    <button className='cursor-pointer'>Ingresar</button>
                    |
                    <button className='cursor-pointer'>Registrarse</button>
                    <button className='text-orange-500 rounded-md cursor-pointer'><Cart size='28px' /></button>
                </div>
            </div>
        </>
    )
}