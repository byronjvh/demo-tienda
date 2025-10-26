import { Arrow } from './Icons'


function CategoryButton({ children }) {
    return (
        <button className='font-bold cursor-pointer flex gap-1 items-center'>
            {children}
            <span><Arrow /></span>
        </button>
    )
}

export default CategoryButton