export default function Welcome() {
    return (
        <div className='flex flex-col justify-center items-center flex-grow mt-5 mb-10 text-white w-full h-96 rounded-lg px-5 mx-auto bg-none md:items-start md:bg-center md:bg-cover lg:w-full'>
            <h2 className='font-poppins font-bold  text-5xl mb-1 text-center md:text-left xl:text-6xl'>For the love of manga</h2>
            <p className='font-poppins text-2xl mb-1'>Explore our varieties</p>
            <p className='text-2xl hidden font-bold mb-2 md:flex'>#MingaLove ❤</p>
            <button className="w-full px-8 font-roboto border-none bg-white text-red-400  p-2 justify-center text-xl rounded-lg selection: block md:hidden">Sign In!</button>
        </div>

    )
}