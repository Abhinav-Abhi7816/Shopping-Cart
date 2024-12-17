import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout';
import Cart from './Components/Cart'
import Home from './Components/Home'

function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout></Layout>} >
        <Route path='' element={<Home></Home>}></Route>
        <Route path='cart' element={<Cart></Cart>}></Route>
      </Route>
    ),
    {basename:"/Shopping-Cart"}
  )
  
  
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
