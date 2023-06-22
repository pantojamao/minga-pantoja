import Carousel from "../componets/Carousel";
import Welcome from "../componets/Welcome";
import Main from "../layouts/Main";
import FormInput from "../componets/FormInput"
import NavBar from "../componets/NavBar";
export default function Index() {
    return (
        <Main>
            <main className='flex flex-col flex-grow min-h-screen md:bg-[url("../../src/assets/images/Background1.png")] w-full justify-evenly items-center pt-20 px-5  '>
                {/* <Welcome /> */}

                <FormInput />
            </main>
            {/* <Carousel}
                /> */}
                
        </Main >
    )
}