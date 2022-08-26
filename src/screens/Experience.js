import React from "react";
import { Container} from "react-bootstrap";
import L1 from "../Images/l1.png";
import L2 from "../Images/l2.png";
import L3 from "../Images/l3.png"

const Experience = () => {
  return (
    <section className="experience" data-scroll-section>
      <Container>
        <h1>Experience the Best</h1>
        <p>
          Experience the best quality, organically grown produce straight from
          the fields
        </p>
        <p className="para1">
          We are on a mission to make sure that every household gets an option
          to get fresh, organically grown, chemical free, healthy edibles
          straight from the fields without and mediator. It works like a charm
          for getting that health and fitnes back.
        </p>

        <div className="box">
          
            <div className="card1">
              <img src={L1} alt="free"/>
              <span>Chemical Free</span>
            </div>
            
            
            <div className="card1">
              <img src={L2} alt="grown"/>
              <span>Organically Grown</span>
            </div>
            
            
            <div className="card1">
              <img src={L3} alt="health"/>
              <span>Good for Health</span>
            </div>
           
        </div>
      </Container>
    </section>
  );
};

export default Experience;
