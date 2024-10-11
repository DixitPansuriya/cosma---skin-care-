import React from 'react'
import { Link } from 'react-router-dom'

export default function Section_8() {
    return (
        <>
            <div className="container-fuld sec_8 ">
                <br />
                <br />


                <div className="row  align-self-center mt-3">
                    <div className="col-12 col-md-3 d-flext align-self-center mt-3 ">
                        <div className='ms-3'>
                            <p className='sec8-p'>---Follow Us</p>
                            <h1 className='sec8-h1 fs-1'>Our Collections</h1>
                            <h2 className='sec8-h2 fs-4'>#cosmetics</h2>
                        </div>
                    </div>

                    <div className="col-12 col-md-3 box_col mt-3">
                        <img src="https://cosma.wpengine.com/wp-content/uploads/2021/03/insta1.jpg" alt="" style={{ width: "100%" }} />
                        <div className="box_1 button-1">
                            <Link to={"https://www.instagram.com/iamdesign001/"} class="fa-brands fa-instagram fs-2 button-1" style={{ height: "100%", display: "flex", alignItems: "center", textDecoration:"none" , justifyContent: "center" }} ></Link>
                        </div>
                    </div>


                    <div className="col-12 col-md-3 box_col mt-3">
                        <img src="https://cosma.wpengine.com/wp-content/uploads/2021/03/insta2.jpg" alt="" style={{ width: "100%" }} />
                        <div className="box_1 button-1">
                            <Link to={"https://www.instagram.com/iamdesign001/"} class="fa-brands fa-instagram fs-2 button-1" style={{ height: "100%", display: "flex",  alignItems: "center", textDecoration:"none" , justifyContent: "center" }} ></Link>
                        </div>
                    </div>

                    <div className="col-12 col-md-3 box_col mt-3">
                        <img src="https://cosma.wpengine.com/wp-content/uploads/2021/03/insta3.jpg" alt="" style={{ width: "100%" }} />
                        <div className="box_1 button-1">
                            <Link to={"https://www.instagram.com/iamdesign001/"} class="fa-brands fa-instagram fs-2 button-1" style={{ height: "100%", display: "flex", alignItems: "center",  textDecoration:"none" , justifyContent: "center" }} ></Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
