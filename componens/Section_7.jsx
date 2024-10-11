import React from 'react'
import { Link } from 'react-router-dom'

export default function Section_7() {
    return (
        <>
            <div className="container">
                <p className='text-center font-semibold'>Perfect Beauty</p>
                <center>
                    <div className='line mt-2 border border-dark '></div>

                </center>
                <h1 className='fs-1 text-center mt-4'>Latest Cosmetic News</h1>
                <p className='text-center mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>



                <div className="row mt-5 ms-2">
                    <div className="col-12 col-md-4 mt-4  ">
                        <div className='div-1 sec_7'>
                            <img src="https://cosma.wpengine.com/wp-content/uploads/2020/10/blog-03.jpg" alt="" className='img-1' />

                        </div>
                        <div>
                            <h1 className='fs-4 mt-5  button-1'>

                                Does serum contain lightweight formula?
                            </h1>

                            <p className='mt-3'>Cosmetic Creams Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea...</p>
                            <div className="div ">
                                <Link to={"/shope"} className='button-1'> READ MORE<i class="fa-solid mt-4 fa-arrow-right"></i></Link>
                            </div>

                        </div>
                    </div>


                    <div class="col-12 col-md-6 mt-4">
                        <div class="row">
                            <div class="col-12 col-md-6 ">
                                <img class="" src="https://cosma.wpengine.com/wp-content/uploads/2020/12/blog-01.jpg" alt=""
                                    width="100%" />
                            </div>


                            <div class="col-12 col-md-6 mt-4 ">
                                <p className=''>December 7, 2020</p>
                                <h1 className='button-1  fs-3 from-stone-800' style={{ fontFamily: "initial" }}>Treat your skin with organic products</h1>
                                <p className='mt-4'>Cosmetic Creams Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea...</p>
                                <Link to={"/shope"} className='button-1'> READ MORE<i class="fa-solid mt-4 fa-arrow-right"></i></Link>

                            </div>                            <div class="col-12 col-md-6 mt-4 ">
                                <img class="" src="https://cosma.wpengine.com/wp-content/uploads/2020/11/blog-details-02.jpg" alt=""
                                    width="100%" />
                            </div>
                            <div class="col-12 col-md-6 mt-5 ">
                                <p className=''>November 9, 2020</p>
                                <h1 className='button-1  fs-3 from-stone-800' style={{ fontFamily: "initial" }}>Interesting ingredients used in cosmetic</h1>
                                <p className='mt-4'>Cosmetic Creams Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea...</p>
                                <Link to={"/shope"} className='button-1'> READ MORE<i class="fa-solid mt-4 fa-arrow-right"></i></Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
