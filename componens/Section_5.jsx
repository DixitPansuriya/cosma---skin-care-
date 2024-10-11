import React from 'react'
import { Link } from 'react-router-dom'

export default function Section_5() {
  return (
    <div className='container'  style={{ background: "#FAF3EB", width:"100%"  }}>
      <br />
      <br />
      <br />
      <br />
      <div className='text-center  '>
        <p className=' '>Cosmetic Care Solutions</p>
        <h1 className='fs-1 mt-4 font-bold font-serif' >Body Care Results</h1>
        <p className='mt-3 fs-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-md-6 ">
            <div className="part-1 mt-5 ">
              <i class="fa-brands fa-pagelines button-1"> <span className='m-2'></span>Natural Ingredients</i>
              <p className='w-80 mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel mi quam. Fusce vehicula vitae mauris sit amet tempor donec consectetur.</p>

              <Link to={"/shope"} className='button-1'>SHOP NOW <i class="fa-solid mt-4 fa-arrow-right"></i></Link>
            </div>
            <div className="part-1  mt-5">
              <i class="fa-solid fa-droplet"><span className='m-2 button-1'></span>No Mineral Oil</i> 
              <p className='w-80 mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel mi quam. Fusce vehicula vitae mauris sit amet tempor donec consectetur.</p>

              <Link to={"/shope"} className='button-1'>SHOP NOW <i class="fa-solid mt-4 fa-arrow-right"></i></Link>



            </div>


            <div className="part-1  mt-5 ">
            <i class="fa-solid fa-cannabis "><span className='m-2'></span>Clean Cosmetics</i>
              <p className='w-80 mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel mi quam. Fusce vehicula vitae mauris sit amet tempor donec consectetur.</p>

              <Link to={"/shope"} className='button-1'>SHOP NOW <i class="fa-solid mt-4 fa-arrow-right"></i></Link>



            </div>

          </div>
          <div className="col-12 col-md-6">
            <img src="https://cosma.wpengine.com/wp-content/uploads/2021/03/hotspot-image1.jpg" alt="" />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />

    </div>
  )
}
