import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from "react-router"
import RootLayout from "./components/RootLayout"
import Home from "./pages/Home"


let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout/>}>
    <Route index element={<Home/>}></Route>

  </Route>
))

function App() {


  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
