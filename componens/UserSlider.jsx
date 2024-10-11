import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
export default function UserSlider() {


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (


    <Carousel s className='csrousel h-100  d-none d-md-block' responsive={responsive}
      // infinite={true}
      arrows={false}

    >
      <div style={{width:"100%", height:"100"}} className='slider'>

        <section  className='ms-5'>
          <br />
          <img className='mt-5' src="https://cosma.wpengine.com/wp-content/uploads/2021/03/home-test-04.jpg" alt="" style={{ borderRadius: "50%", width: "70px" }} />
          <p className='mt-3'>⭐⭐⭐⭐⭐</p>
          <p style={{width:"100%"}} className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel mi quam. Fusce vehicula vitae mauris sit amet tempor. Donec consectetur nisi eu mauris auctor, in egestodio mollis phasellus urna lacus.</p>
        
          <br />
        
          <span className='button-1 '> <span className=' button-1 '>----</span> Gwen tennison </span>
          <br />
        </section>
      </div>
      <div className='slider' style={{width:"100%", height:"100"}}>

        <section  className='ms-5'>
          <br />
          <img className='mt-5' src="https://cosma.wpengine.com/wp-content/uploads/2021/04/home-test-01.jpg" alt="" style={{ borderRadius: "50%", width: "70px" }} />
          <p className='mt-3'>⭐⭐⭐⭐⭐</p>
          <p style={{width:"100%"}} className='mt-3'>Cras vel mi quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Fusce vehicula vitae mauris sit amet tempor. Donec consectetur nisi eu mauris auctor, in egestodio mollis phasellus urna lacus.</p>
        
          <br />
        
          <span className='button-1 '> <span className=' button-1 '>----</span> Sophia </span>
          <br />
        </section>
      </div>
      <div className='slider' style={{width:"100%", height:"100"}}>
      <section  className='ms-5'>
          <br />
          <img className='mt-5' src="https://cosma.wpengine.com/wp-content/uploads/2021/04/home-test-03.jpg" alt="" style={{ borderRadius: "50%", width: "70px" }} />
          <p className='mt-3'>⭐⭐⭐⭐⭐</p>
          <p style={{width:"100%"}} className='mt-3'> Fusce vehicula vitae mauris sit amet tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel mi quam. Donec consectetur nisi eu mauris auctor, in egestodio mollis phasellus urna lacus.</p>
        
          
        
          <span className='button-1 '> <span className=' button-1 '>----</span> Emily</span>
          <br />
        </section>
      </div>
      <div className='slider' style={{width:"100%", height:"100"}}>

      <section  className='ms-5'>
          <br />
          <img className='mt-5' src="https://cosma.wpengine.com/wp-content/uploads/2021/04/home-test-02.jpg" alt="" style={{ borderRadius: "50%", width: "70px" }} />
          <p className='mt-3'>⭐⭐⭐⭐⭐</p>
          <p style={{width:"100%"}} className='mt-3'> Donec consectetur nisi eu mauris auctor, in egestodio mollis phasellus urna lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel mi quam. Fusce vehicula vitae mauris sit amet tempor. </p>
        
          <br />
        
          <span className='button-1 '> <span className=' button-1 '>----</span> Isabella</span>
          <br />
        </section>
      </div>
    </Carousel>






  )
}
