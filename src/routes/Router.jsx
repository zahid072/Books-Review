import { createBrowserRouter } from "react-router-dom"
import ErrorPage from "../components/pages/ErrorPage/ErrorPage"
import Layout from "../components/Layout/Layout"
import Home from "../components/pages/Home/Home"






const Router = createBrowserRouter ([
  {
    path:"/",
    element:<Layout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/",
        element:<Home/>
      },
    ]
  }
])

export default Router
