import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <footer className="flex flex-col items-center   mt-auto mb-0 bg-gray-100 py-8 pb-0 md: w-full lg:w-full">
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
    )
}
