import React, { useEffect, useState } from 'react'
import useProductContext from './Contexts/ProductContext';
import { MdAddShoppingCart } from "react-icons/md";
import { ImCheckmark } from "react-icons/im";


function Home() {
  const [loading, setLoading] = useState(false);
  const { products, setProducts, handleCart, cart } = useProductContext();
  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        let response = await fetch("https://fakestoreapi.com/products");
        let data = await response.json();
        console.log(data)
        setProducts(data);
        setLoading(false);
      }
      catch (e) {
        setLoading(false);
        console.log(e);
      }
    }
    fetchProducts();
  }, [setProducts])
  if (loading) {
    return <div className='pt-36 px-12 min-h-[635px] text-4xl font-mono flex justify-center place-items-center'>Loading! Please Wait...</div>
  }
  return (
    <div className='pt-36 px-12 min-h-[635px]'>
      <div className='flex flex-wrap justify-around gap-12'>
        {products.map((el, id) => (<div className='flex flex-col gap-3 justify-around w-96 rounded-3xl p-5 px-8 hover:scale-105 duration-500 hover:shadow-2xl' style={{ boxShadow: "2px 4px 20px rgb(0,0,0,0.3)" }} key={id}>
          <div className='h-80 mt-2 w-[100%] flex place-content-center overflow-hidden rounded-3xl p-3' style={{ boxShadow: "inset 0px 0px 10px rgb(0,0,0,0.2)" }}>
            <img src={el.image} alt={el.category} />
          </div>
          <div className='flex flex-col gap-1'>
            <h1 className='text-wrap text-xl font-semibold'>{el.title}</h1>
            <div className='flex gap-1'><p className='font-semibold'>Rating :</p><p> {el.rating.rate}/5</p></div>
            <div className='flex gap-1'>
              <p className='font-semibold'>Available : </p>
              <p>{el.rating.count}</p>
            </div>
            <p className='text-2xl font-semibold'>$ {el.price}</p>
            <div className='flex justify-between place-items-center mt-2'>
              <button className={`bg-[darkturquoise] px-3 py-1.5 text-white font-semibold rounded-lg text-lg hover:bg-[#61e9eb] duration-300 flex place-items-center gap-2 ${(cart.findIndex(ele => ele.id === el.id) !== -1) ?"cursor-not-allowed":""}`} onClick={() => handleCart(el)}>{(cart.findIndex(ele => ele.id === el.id) === -1) ? "Add To Cart" : "Added to Cart"}{(cart.findIndex(ele => ele.id === el.id) === -1) ?<MdAddShoppingCart></MdAddShoppingCart>:<ImCheckmark></ImCheckmark>}</button>
              <button className='bg-blue-500 px-3 py-1.5 rounded-lg text-lg text-white font-semibold hover:bg-blue-400 duration-300'>Buy</button>
            </div>
          </div>
        </div>))}
      </div>
    </div>
  )
}

export default Home
