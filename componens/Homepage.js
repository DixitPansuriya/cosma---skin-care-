import React   from 'react'
import Section_1 from './Section_1'
import Section_2 from './Section_2'
import Section_3 from './Section_3'
import Section_5 from './Section_5'
import Section_6 from './Section_6'
import UserSlider from './UserSlider'
import Section_7 from './Section_7'
import Section_8 from './Section_8'
import SEction_9 from './SEction_9'
import Footer from './Footer'





function Homepage() {

  return <>
  <div className='sec-1'>
  <Section_1/>
  </div>

 <div className=' mt-5 '>
 <Section_2/>
 
 </div>
 <br />
 <br />
 <br />
 <br />
 <div className=' mt-5'  >
<Section_3/>
 </div>
<br />
<br />
<br />
 <div className='container-fuld'  >
  <Section_5/>

  
</div>
<br />
<br />
<br />

  
<Section_6/>

<br />
<br /><br />
<br /><br />
<br /><br />
<br /><br />
<br />

<UserSlider/>

<br/>
<br/>
<br/>
<br/>
<Section_7/>
<br/>
<br/>
<div className='mt-5' style={{overflow:"hidden"}}>
<Section_8 />
<br/>
<br/>
<br/>
<br/>
<br/>

</div>
<SEction_9/>
<br/>
<br/>
<br/>

<div className='mt-5' style={{overflow:"hidden"}}>
  <Footer/>
</div>

    </>
}

export default Homepage
