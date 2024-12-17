import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { ProductContextProvider } from './Contexts/ProductContext'

function Layout() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  function handleCart(element) {
    let tempArr = [...cart];
    let k=-1;
    for(let i=0;i<tempArr.length;i++)
    {
      if(tempArr[i].id===element.id)
      {
        k=i;
      }
    }
    if(k===-1)
    {
      tempArr.push(element);
    }
    else
    {
      tempArr.splice(k,1);
    }
    console.log(tempArr);
    setCart(tempArr);

  }
  return (
    <div>
      <ProductContextProvider value={{ products, setProducts, cart, setCart ,handleCart}}>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </ProductContextProvider>
    </div>
  )
}

export default Layout
