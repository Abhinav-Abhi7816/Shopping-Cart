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
    return <div className='pt-36 px-12 min-h-[635px] text-4xl flex justify-center place-items-center'>Add Some Products to Cart...</div>
  }
  return (
    <div className='pt-48 min-h-[635px]'>
      <div className='flex fixed top-24 z-10 w-[100%] justify-around place-items-center text-2xl font-semibold bg-[rgb(0,0,0,0.3)] p-3 mb-5'>
      <div className='flex gap-10 text-white'>
      <p>Total Products :{cart.length}</p>
      <p>Total Price : $ {totalCost}</p>
      </div>
      <button className='bg-green-500 text-white px-4 py-1.5 rounded-lg flex gap-2 place-items-center hover:bg-green-400 hover:scale-105 duration-300'>Ship All<LiaShippingFastSolid size={30}></LiaShippingFastSolid></button>
      </div>
      <div className='flex flex-wrap justify-around gap-12'>
        {cart.map((el, id) => (<div className='flex flex-col gap-3 justify-around w-96 rounded-3xl p-5 px-8 hover:scale-105 duration-500 hover:shadow-2xl' style={{boxShadow:"2px 4px 20px rgb(0,0,0,0.3)"}} key={id}>
          <div className='h-80 mt-2 w-[100%] flex place-content-center overflow-hidden rounded-3xl p-3' style={{boxShadow:"inset 0px 0px 10px rgb(0,0,0,0.2)"}}>
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
              <button className='bg-[darkturquoise] px-3 py-1.5 text-white font-semibold rounded-lg text-lg hover:bg-[#61e9eb] duration-300 flex place-items-center gap-1' onClick={()=>handleCart(el)}>{(cart.findIndex(ele=>ele.id===el.id)===-1)?"Add To Cart":"Remove from Cart"}{(cart.findIndex(ele => ele.id === el.id) === -1) ?<MdAddShoppingCart></MdAddShoppingCart>:<MdOutlineRemoveShoppingCart></MdOutlineRemoveShoppingCart>}</button>
              <button className='bg-blue-500 px-3 py-1.5 rounded-lg text-lg text-white font-semibold hover:bg-blue-400 duration-300'>Buy</button>
            </div>
          </div>
        </div>))}
      </div>
    </div>
  )
}

export default Cart
