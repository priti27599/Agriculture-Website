import React from 'react';
import Spices from "../Images/c1.png";
import Flour  from "../Images/c2.png";
import Veg from "../Images/c3.png";

const Products = () => {
  return (
    <section className='product' data-scroll-section>
        <h1>Our Product Categories</h1>
        <p>Get splendid quality products at unbelievable lower prices.</p>

        <div className='box1'>
          <div className='card2'>
           <img src={Spices} alt=""/>
           <button>SHOP SPICES</button>
           </div>
           <div className='card2'>
           <img src={Flour} alt=""/>
           <button>SHOP FLOUR</button>
           </div>
           <div className='card2'>
           <img src={Veg} alt=""/>
           <button>SHOP VEGGIES</button>
           </div>
        </div>
    </section>
  )
}

export default Products