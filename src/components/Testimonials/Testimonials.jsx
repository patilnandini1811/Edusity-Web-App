import React, { useRef, useState } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef(); // Reference to the slider (ul element)
  const [position, setPosition] = useState(0); // Stores slider position

  const slideForward = () => {
    if (position > -50) { 
      setPosition(position - 25); // Move left by 25%
    }
  };

  const slideBackward = () => {
    if (position < 0) {
      setPosition(position + 25); // Move right by 25%
    }
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="Next" className="next-btn" onClick={slideForward} />
      <img src={back_icon} alt="Back" className="back-btn" onClick={slideBackward} />
      
      <div className="slider">
        <ul ref={slider} style={{ transform: `translateX(${position}%)` }}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Shreyasi</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions I have ever made.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Piyush</h3>
                  <span>Edusity, India</span>
                </div>
              </div>
              <p>The supportive community, state-of-the-art facilities, and commitment to academic excellence exceeded my expectations.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Radhika</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Choosing Edusity was one of the best decisions I have ever made.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Dev</h3>
                  <span>Edusity, Sweden</span>
                </div>
              </div>
              <p>The commitment to academic excellence has truly exceeded my expectations.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
