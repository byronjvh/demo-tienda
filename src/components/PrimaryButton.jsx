function PrimaryButton({ children, title }) {
    return (
        <button className='cursor-pointer font-bold text-orange-500 border-2 border-orange-500 px-3.5 py-1 rounded-md relative text-nowrap'>
            {title}
            <span className="absolute left-full bottom-full translate-y-3.5 -translate-x-3.5 bg-white p-0.5">{children}</span>
        </button>
    )
}

export default PrimaryButton