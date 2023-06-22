import { createBrowserRouter } from "react-router-dom";
import Index from "./Index";
import Main from "../layouts/Main.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
        { path: "/", element: <Index /> },
        { path: "/index", element: <Index /> },     
    ]
  },
]);

export default router;