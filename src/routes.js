import { createBrowserRouter } from "react-router-dom";
import Homepage from './pages/Homepage/Homepage'
import Faq from './pages/Faq/Faq'
export const routes=createBrowserRouter([
    {
        path:'/',
        element:<Homepage/>
    },
    {
        path:"/faq",
        element:<Faq />,
    },
 
])