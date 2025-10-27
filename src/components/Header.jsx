import { Search } from 'lucide-react';
import { Banner } from './home/Banner';
import { Cart } from './Icons';
import { Link } from 'react-router';

export default function Header() {
    return (
        <>
            <Banner />
            <div className='grid grid-cols-2 md:grid-cols-3 items-center gap-2 md:gap-8 py-6 px-2'>
                <Link to="/">
                    <img className='w-full max-w-56 place-self-center' src="https://cdn-ilaabjh.nitrocdn.com/OzMRamyAKVKkRfGWMkLhcUdtvVYEmpJD/assets/images/optimized/rev-ecca6a1/crtechstore.com/wp-content/uploads/2020/06/Logo-cr-tech-06.png" alt="logo" />
                </Link>
                <div className='place-self-center border border-gray-400 rounded-xl h-12 hidden gap-1.5 w-full max-w-96 items-center p-1.5 md:flex'>
                    <input className='w-full h-full p-1' type="text" placeholder='Encuentra lo que buscas' />
                    <button className='h-full aspect-square rounded-lg flex justify-center items-center bg-orange-500 text-white cursor-pointer'><Search width="22" /></button>
                </div>
                <div className='place-self-center flex items-center gap-2 text-sm md:text-base'>
                    <button className='cursor-pointer'>Ingresar</button>
                    |
                    <button className='cursor-pointer'>Registrarse</button>
                    <button className='text-orange-500 rounded-md cursor-pointer'><Cart size='28px' /></button>
                </div>
            </div>
        </>
    )
}