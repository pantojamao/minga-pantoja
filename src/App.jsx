import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
function App() {


  return (
    <>
      <div className="flex flex-col min-h-screen bg-[url('../../src/assets/images/imgHomeMovile.png')] bg-cover bg-no-repeat bg-center p-0">
        <nav className="flex justify-between items-center p-4 bg-gray-100 w-full bg-transparent">
          <img src="../../src/assets/icons/Menu.svg" alt="Logo" className="h-8" />
          <img src="../../src/assets/icons/Logo.svg" alt="Logo" className="h-8" />
        </nav>
        <main className="flex flex-col items-center justify-center px-4 mb-16">
          <h1 className="font-roboto text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white text-center mb-6">Your favorite comic book store</h1>
          <p className="font-roboto text-base md:text-lg lg:text-xl xl:text-2xl text-white text-justify mb-8">From classics to novelties, we have everything you need to immerse yourself in your favorite universes. Explore our catalog and live the adventure of your life.</p>
          <button className="font-roboto text-lg md:text-xl lg:text-2xl xl:text-3xl bg-blue-500 text-white w-full rounded-full py-4 px-8 font-bold tracking-wider">Get Started</button>
        </main>


        <footer className="flex flex-col items-center   mt-auto mb-0 bg-gray-100 py-8 pb-0">
          <div className="social flex justify-center space-x-4 mb-4">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-black text-lg">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-black text-lg">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-black text-lg">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <ul className="flex flex-wrap justify-center mb-4">
            <li className="m-2">
              <a href="#">Inicio</a>
            </li>
            <li className="m-2">
              <a href="#">Terminos</a>
            </li>
            <li className="m-2">
              <a href="#">Politicas de Privacidad</a>
            </li>
            <div className="btn-group dropup m-2">
              <button
                type="button list-inline-item"
                className="btn dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Metodos de Pago
              </button>
              {/* <ul className="dropdown-menu">
        <li className="dropdown-item">Visa</li>
        <li className="dropdown-item">MasterCard</li>
        <li className="dropdown-item">PayPal</li>
        <li className="dropdown-item">Ualá</li>
      </ul> */}
            </div>
          </ul>
          <div className="w-full py-2 bg-slate-200 text-center text-sm mt-4">
            <span className="text-gray-600">Desarrollado por</span>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/mauricio-alexander-pantoja-cabrer-desarrollador/"
              className="text-red-500"
            >
              Mao Pantoja
            </a>
            <span className="mx-1">&bull;</span>
            <span>2023</span>
          </div>
        </footer>
      </div>

    </>


  )
}

export default App
