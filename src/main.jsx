import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,Router,RouterProvider } from 'react-router-dom'
import ViewStory from './ViewStory.jsx'
import Profile from './Profile.jsx'
import App from './App.jsx'


const router =createBrowserRouter(
  [
   {
    path:'/',
      element:<App/>
    },
    {
      path:'/story/:id/:tot',
      element:<ViewStory/>
    },
    {
      path:'/profile',
      element:<Profile/>
    },
    {
      path:'/Home',
      element:<App/>
    }
   ]
)
createRoot(document.getElementById('root')).render(
<RouterProvider router={router}/>
)
