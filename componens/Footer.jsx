import React from 'react'

export default function Footer() {
    return (
        <footer>
            <hr />
            <center>
            <nav className='d-flex row   justify-content-between ' style={{height:"70px"}}>
                
                <div className="option col-12 col-md-4 " >
                    <ul className='d-flex gap-3 m-4'>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="startup  col-12 col-md-4  ">
                    <p className='m-4'>© 2021 Cosma. All Rights Reserved</p>
                </div>
                <div className="lcon   col-12 col-md-4 ">
                    <i class="fa-brands button-1 m-4 fa-facebook "></i>
                    <i class="fa-brands button-1 m-4 fa-instagram"></i>
                    <i class="fa-brands button-1 m-4 fa-twitter"></i>
                    <i class="fa-brands button-1 m-4 fa-pinterest"></i>
                    <i class="fa-brands button-1 m-4 fa-spotify"></i>
                </div>
            </nav>

            </center>
        </footer>
    )
}
