import React from 'react'
import { Link } from 'react-router-dom'

export default function Section_2() {
    return (
        <div className="container">
            <div className="row">
                <div className="wow animate__animated animate__backInLeft col-12 col-md-6">
                   <div className='img-box'>
                   <img src="https://cosma.wpengine.com/wp-content/uploads/2021/03/about-img.jpg" className='img-fluid' alt="" />
                   </div>
                </div>
                <div className="col-12 col-md-6">
                    <h1 className='fs-1 font-serif'>About Our
                        <br />
                        Iconic Products</h1>
                    <p className=' mt-4' style={{ color: "gray" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel mi quam. Fusce vehicula vitae mauris sit amet tempor. Donec consectetur nisi eu mauris auctor, in egestodio mollis phasellus urna lacus.</p>
                   <div className="div mt-5">
                   <Link to={"/shope"} className='button-1'>KNOW MORE <i class="fa-solid mt-4 fa-arrow-right"></i></Link>
                   </div>
                </div>
            </div>

        </div>
    )
}
