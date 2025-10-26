import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ProductsList from '../productos.json'

export default function Product() {
    const [product, setProduct] = useState(null)
    let { sku } = useParams();

    // simula llamada a la api
    useEffect(() => {
        setTimeout(() => {
            setProduct(ProductsList?.find(el => el.sku === sku))
        }, 500);
    }, [])

    console.log(product)
    return (
        <div className='w-full mx-auto max-w-7xl flex flex-col items-center mt-4 py-4 gap-8'>
            {
                product ? (
                    <>
                        <div className='grid grid-cols-2' >
                            <div>
                                <img className='place-self-center' src={product.image} alt={product.name} />
                                <div className='flex gap-3 justify-center'>
                                    {
                                        product.gallery.map(img => (
                                            <img className='h-32' src={img} alt={product.name} />
                                        ))
                                    }
                                </div>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h1 className='text-xl'>{product.name}</h1>
                                <p className='text-2xl text-orange-500 font-bold'>{product.price}</p>
                                <div>
                                    <p className='text-sm'>SKU: {product.sku}</p>
                                    <button className='bg-orange-500 cursor-pointer px-4 py-2 font-bold text-white rounded-md'>Añadir al Carrito</button>
                                </div>
                                <p className='text-gray-500'>{product.description}</p>
                            </div>
                        </div>
                        <div className='w-full py-8 border-t border-gray-300'>
                            <h3 className='font-bold text-xl mb-2'>Especificaciones</h3>
                            <ul className='flex flex-col gap-2'>
                                {
                                    product.atributes.map((atribute, key) => {
                                        const [[name, value]] = Object.entries(atribute);
                                        return (
                                            <li key={key}>
                                                <p className='capitalize'>
                                                    <b>{name.replace('_', ' ')}: </b> {value}
                                                </p>
                                            </li>
                                        )
                                    })
                                }

                            </ul>
                        </div>
                    </>
                ) : (
                    <div>Cargando...</div>
                )
            }
        </div>
    )
}
