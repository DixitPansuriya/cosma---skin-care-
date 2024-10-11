import React from 'react'
import { Link } from 'react-router-dom'

export default function Section_1() {
    return (
        <div>
            <div className="container-fuld">

                <div className="row">
                    <div className="col-12 sec_1">
                        <img src="https://cosma.wpengine.com/wp-content/uploads/2021/03/banner.jpg" class="img-fluid" alt="" />
                        <div className="  box carousel-caption d-none d-md-block">
                            <p className='H-1'>
                                Clean beauty</p>
                                <p className='p-1'>For colorful people</p>

                                <Link to={"/shope"} className='button'>Shop Now <span><i class="fa-solid fa-arrow-right"></i></span></Link>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
