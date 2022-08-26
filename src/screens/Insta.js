import React from 'react';
import Img1 from '../Images/i1.png';
import Img2 from "../Images/i2.png";
import Img3 from "../Images/i3.png";
import Img4 from "../Images/i4.png";
import Img5 from "../Images/i5.png";
import Img6 from "../Images/i6.png";


const Insta = () => {
  return (
    <section className='insta' data-scroll-section>
        <h3>We are on instagram @wheat_premium</h3>
        <div className='box3'>
          <img src={Img1} alt=""/>
          <img src={Img2} alt=""/>
          <img src={Img3} alt=""/>
          <img src={Img4} alt=""/>
          <img src={Img5} alt=""/>
          <img src={Img6} alt=""/>
        </div>
    </section>
  )
}

export default Insta