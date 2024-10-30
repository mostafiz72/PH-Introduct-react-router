import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import About from './Components/About.jsx';
import Users from './Components/users.jsx';
import User from './Components/user.jsx';
import Posts from './Components/Posts.jsx';
import Error from './Components/Error.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/users",
        element: <Users/>,
      },
      {
        path: "/user",
        element: <User/>,
      },
      {
        path: "/posts",
        element: <Posts/>,
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
