import { ContextProvider } from "./context";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Signup from "./signup";
import Home from "./home";
import Login from "./login"
import Pro from "./pro";
function App(){
const route=createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
   {
    path:"/Signup",
    element:<Signup/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/protected",
    element:<Pro/>
  }
])

  return (
   <ContextProvider>
    <RouterProvider router={route}/>
   </ContextProvider>
  )
}

export default App;
