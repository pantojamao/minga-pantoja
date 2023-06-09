import NavBar from "../componets/NavBar"
import Footer from "../componets/Footer"


export default function Main({ children }) {
    return (
        <>
            <NavBar />
            {/* vistas dinamicasss (por ahora SOLO index) */}
            {children}
            <Footer />
        </>
    )
}