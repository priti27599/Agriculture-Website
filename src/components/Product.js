import React from 'react';
import Spices from "../Images/c1.png";
import Flour  from "../Images/c2.png";
import Veg from "../Images/c3.png";

const Product = () => {
  return (
    <section className='product'>
      <h1>Products</h1>
       <div className='box1'>
          <div className='card2'>
           <img src={Spices} alt=""/>
           <button className='btn2'>SHOP SPICES</button>
           </div>
           <div className='card2'>
           <img src={Flour} alt=""/>
           <button className='btn2'>SHOP FLOUR</button>
           </div>
           <div className='card2'>
           <img src={Veg} alt=""/>
           <button className='btn2'>SHOP VEGGIES</button>
           </div>
           <div className='card2'>
           <img src={Spices} alt=""/>
           <button className='btn2'>SHOP SPICES</button>
           </div>
           <div className='card2'>
           <img src={Flour} alt=""/>
           <button className='btn2'>SHOP FLOUR</button>
           </div>
           <div className='card2'>
           <img src={Veg} alt=""/>
           <button className='btn2'>SHOP VEGGIES</button>
           </div>
           <div className='card2'>
           <img src={Spices} alt=""/>
           <button className='btn2'>SHOP SPICES</button>
           </div>
           <div className='card2'>
           <img src={Flour} alt=""/>
           <button className='btn2'>SHOP FLOUR</button>
           </div>
           <div className='card2'>
           <img src={Veg} alt=""/>
           <button className='btn2'>SHOP VEGGIES</button>
           </div>
        </div>
    </section>
  )
}

export default Product