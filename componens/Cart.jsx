import React from 'react'

export default function Cart({cart,setCart}) {
  return (
    <div>

     {
        cart.map((x)=>{
            return <li>{x.title}</li>
        })
     }   

    </div>
  )
}
