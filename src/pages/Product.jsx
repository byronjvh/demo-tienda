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
        <>
            Laptop: {sku}
        </>
    )
}
