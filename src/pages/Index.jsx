import Carousel from "../componets/Carousel";
import Welcome from "../componets/Welcome";
import Main from "../layouts/Main";
export default function Index({ data }) {
    return (
        <Main>
            <main className='flex flex-col flex-grow min-h-screen md:bg-[url("../../src/assets/images/Background1.png")] w-full justify-evenly items-center pt-20 px-5  '>
                <Welcome />
                
            </main>
            <Carousel
                    title={data[0].title}
                    character_photo={data[0].character_photo}
                    cover_photo={data[0].cover_photo}
                    pepe={data[0].description}
                />
        </Main >
    )
}