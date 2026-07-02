import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import ReportToUs from "../pages/ReportToUs";
import ProductDetails from "../pages/ProductDetails";

const Router = createBrowserRouter([
    {
        path:'/',
        element:<Layout /> ,
        children:[
            {
                index:true,
                element:<Home /> ,
            },
            {
                path:"about",
                element:<About />
            },
            {
                path:'products',
                element:<Products />
            },
            {
        path: "products/:id",
        element: <ProductDetails />,
      },
            {
                path:"contact",
                element:<Contact />
            },
            {
                path:"report",
                element:<ReportToUs />
            }
        ]
    }
])

export default Router;