import { createBrowserRouter } from "react-router-dom"
import ErrorPage from "../components/pages/ErrorPage/ErrorPage"
import Layout from "../components/Layout/Layout"
import Home from "../components/pages/Home/Home"
import BooksList from "../components/pages/BooksList/BooksList"
import ReadPages from "../components/pages/ReadPages/ReadPages"






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
        path:"/listed-book",
        element:<BooksList/>
      },
      {
        path:"/read-pages",
        element:<ReadPages/>
      },
    ]
  }
])

export default Router
