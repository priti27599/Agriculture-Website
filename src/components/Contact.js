import React from "react";

const Contact = () => {
  return (
    <section className="contact">
      <h1>Contact Us</h1>
      <div className="contact-det">
        <form action="mailto:wheatpremiu@gmail.com" method="post">
          <div className="user-detail">
            <div className="inbox-box">
              <label>First Name:</label>
              <br />
              <input type="text" placeholder="your first name" value="" />
            </div>
            <div className="inbox-box">
              <label>Last Name:</label>
              <br />
              <input type="text" placeholder="your last name" value="" />
            </div>
            <div className="inbox-box">
              <label>Message</label>
              <br />
              <textarea type="text" placeholder="your message here" value="" />
            </div>
            <div className="inbox-box">
              <label>Email</label>
              <br />
              <input type="email" placeholder="your email" value="" />
            </div>
            {/* <input type="submit" value="SEND MESSAGE" className='btnn'/> */}
            <button className="btnn">SEND MESSAGE</button>
          </div>
        </form>

        {/* <div className="box-1">
          <div className="box-lg">
            <span className="title3">ADDRESS</span>
            <br />
            <span className="bo">
              {" "}
              42 Henford Hill, Much Cowame, HSR 7 +91 9999999999 |
              wheat.premium.com
            </span>
          </div>
          <div className="box-lg">
            <span className="title3">PHONE</span>
            <br />
            <span className="bo"> +91 9999999999</span>
          </div>
          <div className="box-lg">
            <span className="title3">E-MAIL</span>
            <br />
            <span className="bo">wheatpremiu@gmail.com </span>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
