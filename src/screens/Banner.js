import React from "react";
import { Container } from "react-bootstrap";
import { Link} from 'react-router-dom';

const Banner = () => {
  return (
    <section className="banner" id="home" data-scroll-section>
      <Container>
        
          <h1 className="title">ORGANIC FARMING</h1>
          {/* <p className="para">
            Compared with conventional agriculture, organic farming uses fewer
            pesticides, reduces soil erosion, decreases nitrate leaching into
            groundwater and surface water, and recycles animal wastes back into
            the farm. These benefits are counterbalanced by higher food costs
            for consumers and generally lower yields.
          </p> */}
          <p className="para">Real Quality</p>
          <div className="btn-box">
            <button className="btn1"><Link className="text" to="product">See All Products</Link></button>
            <button className="btn1"><Link className="text" to="about">About Us</Link></button>
          </div>
        
      </Container>
    </section>
  );
};

export default Banner;
