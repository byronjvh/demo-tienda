export default function ProductCard({ name, image, price }) {
    return (
        <article className='max-w-48 text-sm flex flex-col gap-1 items-center p-2 cursor-pointer animate-fadeInUp opacity-0 transition-shadow duration-200 hover:shadow-lg'>
            <img className='h-40 aspect-square object-contain' src={image} alt={name} />
            <span className='bg-orange-500 text-white py-1 px-3 font-bold self-start rounded-tl-lg rounded-br-lg'>Envío Rápido</span>
            <h4 className='h-10 line-clamp-2'>{name}</h4>
            <p className='w-full font-bold text-base text-orange-500'>{price}</p>
        </article>
    )
}