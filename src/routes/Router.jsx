import { createBrowserRouter } from "react-router-dom"
import ErrorPage from "../components/pages/ErrorPage/ErrorPage"
import Layout from "../components/Layout/Layout"
import Home from "../components/pages/Home/Home"
import ListedBook from "../components/pages/ListedBook/ListedBook"
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
        element:<ListedBook/>
      },
      {
        path:"/read-pages",
        element:<ReadPages/>
      },
    ]
  }
])

export default Router
