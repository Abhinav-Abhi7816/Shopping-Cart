import React, { useEffect, useState } from 'react'
import useProductContext from './Contexts/ProductContext'
import { MdAddShoppingCart } from "react-icons/md";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { LiaShippingFastSolid } from "react-icons/lia";


function Cart() {
  const {cart,handleCart}=useProductContext();
  const [totalCost,setTotalCost]=useState(0);
  useEffect(()=>{
    function priceCal()
  {
    let tempArr=[...cart];
    let total=0
    for(let i=0;i<tempArr.length;i++)
    {
      total+=tempArr[i].price;
    }
    setTotalCost(total);
  }
  priceCal();
  },[cart]);

  if(!cart || cart.length===0 )
  {
    return <div className='pt-36 h-lvh px-12 min-h-[635px] md:text-4xl text-xl flex justify-center place-items-center'>Add Some Products to Cart...</div>
  }
  return (
    <div className='md:pt-48 pt-32 min-h-[635px]'>
      <div className='flex fixed md:top-24 top-16 z-10 w-[100%] justify-around place-items-center md:text-2xl text-sm font-semibold bg-[rgb(0,0,0,0.3)] md:px-3 md:py-3 py-2 px-3 mb-5'>
      <div className='flex gap-10 text-white'>
      <p>Total Products :{cart.length}</p>
      <p>Total Price : $ {totalCost}</p>
      </div>
      <button className='bg-green-500 text-white px-4 py-1.5 rounded-lg flex gap-2 place-items-center text-nowrap hover:bg-green-400 hover:scale-105 duration-300'>Ship All<LiaShippingFastSolid className='md:size-8 size-5'></LiaShippingFastSolid></button>
      </div>
      <div className='flex flex-wrap justify-around md:gap-12 gap-6 px-4'>
        {cart.map((el, id) => (<div className='flex flex-col gap-3 justify-around w-96 rounded-3xl md:p-5 p-4 md:px-8 px-4 hover:scale-105 duration-500 hover:shadow-2xl' style={{boxShadow:"2px 4px 20px rgb(0,0,0,0.3)"}} key={id}>
          <div className='md:h-64 mt-2 w-[100%] h-40 flex place-content-center overflow-hidden rounded-3xl p-3' style={{boxShadow:"inset 0px 0px 10px rgb(0,0,0,0.2)"}}>
            <img src={el.image} alt={el.category} />
          </div>
          <div className='flex flex-col'>
            <h1 className='text-wrap md:text-xl text-sm font-semibold'>{el.title}</h1>
            <div className='flex gap-1'><p className='font-semibold'>Rating :</p><p> {el.rating.rate}/5</p></div>
            <div className='flex gap-1'>
            <p className='font-semibold'>Available : </p>
            <p>{el.rating.count}</p>
            </div>
            <p className='md:text-2xl text-lg font-semibold'>$ {el.price}</p>
            <div className='flex justify-between place-items-center mt-2'>
              <button className='bg-[darkturquoise] px-3 py-1.5 text-white font-semibold rounded-lg md:text-lg text-sm hover:bg-[#61e9eb] duration-300 flex place-items-center gap-1' onClick={()=>handleCart(el)}>{(cart.findIndex(ele=>ele.id===el.id)===-1)?"Add To Cart":"Remove from Cart"}{(cart.findIndex(ele => ele.id === el.id) === -1) ?<MdAddShoppingCart></MdAddShoppingCart>:<MdOutlineRemoveShoppingCart></MdOutlineRemoveShoppingCart>}</button>
              <button className='bg-blue-500 px-3 py-1.5 rounded-lg md:text-lg text-sm text-white font-semibold hover:bg-blue-400 duration-300'>Buy</button>
            </div>
          </div>
        </div>))}
      </div>
    </div>
  )
}

export default Cart
