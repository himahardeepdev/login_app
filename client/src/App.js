import { createBrowserRouter , RouterProvider } from "react-router-dom"

/* import all the compentes  */ 
import Username from './components/Username';
import Register from './components/Register';
import Password from './components/Password';
import Profile from './components/Profile';
import  Recovery from './components/Recovery';
import Reset from './components/Reset';
const router = createBrowserRouter([
  {
    path : "/",
    element : <Username/>
  },
  {
    path : "/register",
    element : <Register></Register>
  },
  {
    path : "/password",
    element : <Password></Password>
  },{
    path : "/profile" ,
    element : <Profile></Profile>
  },{
    path : "/recovery",
    element : <Recovery></Recovery>
  },{
    path : "/reset",
    element : <Reset></Reset>
  }
])

export default function App() {
  return (
   <main>
    <RouterProvider router={router} ></RouterProvider>
   </main>
  )
}