import { createBrowserRouter } from "react-router-dom"
import ErrorPage from "../components/pages/ErrorPage/ErrorPage"
import Layout from "../components/Layout/Layout"
import Home from "../components/pages/Home/Home"
import ListedBook from "../components/pages/ListedBook/ListedBook"
import ReadPages from "../components/pages/ReadPages/ReadPages"
import BookDetails from "../components/BookDetails/BookDetails"
import NewRelease from "../components/pages/newReleases/NewRelease"
import Read from "../components/pages/ReadBooks/Read"
import Wishlist from "../components/pages/wishlistBooks/Wishlist"






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
        element:<ListedBook/>,
      },
      {
        path:"/read-pages",
        element:<ReadPages/>
      },
      {
        path:"/new-releases",
        element:<NewRelease/>
      },
      {
        path:"/book-details/:id",
        element:<BookDetails/>
      },
    ]
  }
])

export default Router
