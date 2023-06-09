export default function Carousel({title,character_photo,cover_photo,pepe}) {
    return (
        <div className='flex items-center justify-evenly bg-gradient-to-r from-[#FF5722] to-[#F97316] rounded-lg mt-5 hidden px-5
        md:flex md:h-56'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <img className='h-64 self-end ' src={character_photo}/>
            <img className='h-56 mb-12 sel-end' src={cover_photo}/>
            <div className='text-l p-5 px-10 text-white
            sm:w-10/12
            xl:w-6/12'>
                <h3 className='text-2xl'>{title}</h3>
                <p className='text-xs
                xl:text-sm'>{pepe}</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>
    )
}