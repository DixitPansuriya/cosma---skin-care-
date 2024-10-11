import React from 'react'
import { Link } from 'react-router-dom'

export default function Section_3() {
    return (
        <div className='container'>
            <div className="row">
                <div className=" col-12  col-md-6 sec_2">
                    <center>
                    <div className="div-1">
                        <img src="https://cosma.wpengine.com/wp-content/uploads/2021/03/category-img.jpg" alt="" className='img-1' />

                    </div>
                    <div className="text   d-none  d-md-block ">
                       
                            <h1 style={{ fontSize: "40px", fontFamily: "inherit" }}>NEW ARRIVALS</h1>
                            <p className='fs-5'>SHOP COLLECTION</p>
                            <div className='boder'></div>
                       
                    </div>
                    </center>
                </div>
                <div className="col-12 col-md-6">
                    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://cosma.wpengine.com/wp-content/uploads/2021/03/home-scroll-01.jpg" class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h1 className='fs-2'>Beautiful &amp; Soft <br />Skin</h1>
                                    <Link to={"/shope"} className='button-1 fs-4 '>shop essential <i class="fa-solid mt-4 fa-arrow-right"></i></Link>

                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="https://cosma.wpengine.com/wp-content/uploads/2021/03/collection-1.jpg" class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h1 className='fs-2'>New Elevated  <br /> Look</h1>
                                    <Link to={"/shope"} className='button-1 fs-4 '>shop essential <i class="fa-solid mt-4 fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            

        </div>

        
    )
}
