import NavBar from "../componets/NavBar"
import Footer from "../componets/Footer"
import { Outlet } from "react-router-dom"


export default function Main() {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}