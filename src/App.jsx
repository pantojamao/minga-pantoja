import Index from "../src/pages/Index";
import Main from "./layouts/Main"
function App() {

  let data = [
    {
      title: 'Shonen',
      character_photo: '../../src/assets/icons/AvatarCarousel.svg',
      cover_photo: '../../src/assets/icons/ImgCarrusel.png',
      description: 'Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.'
    }
  ]
  return (
    <div className='flex flex-col min-h-screen items-center justify-between bg-[url("../../src/assets/images/Background.png")] bg-center bg-cover
		md:bg-none md:bg-white'>
        <Index data={data} />
    </div>

  )
}

export default App
