import React from 'react'
import data from './Data_5'
import { Link } from 'react-router-dom'


export default function Section_6() {
  return (
    <div className='container'>
      <p className='text-center font-bold font-serif'>Shop Products</p>
      <br />
      
      <h1 className='fs-2 text-center'>Our Collections</h1>
      <br />
      <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.

</p>
      <div className="row  ">
        {
          data.map((x)=>{
            return <Link to={"/Product/"+x._id} style={{height:"500px",textDecoration:"none"}} className="col-12  mt-5 col-md-3 itam d-flex justify-center">
           <div className='mt-5 p-3 '>
           <img className='text-center' src={x.img} style={{width:"247px",}} alt="" />
           <p className='text-center mt-2'>{x.title}</p>
           <p className='text-center mt-2'>{x.reting}</p>
           <p className='text-center p--1 mt-2'>{x.price}</p>
           <p className='text-center p-2 mt-2'>Select Options</p>

           </div>
            </Link>
          })
        }
      </div>
       
      
    </div>
  )
}
