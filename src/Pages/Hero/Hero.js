import React from 'react';
import "./Hero.css"
import victor from '../../assest/Vector .png'
import victor2 from '../../assest/Vector 2.png'
const Hero = () => {
    return (
        <div className="works" id="works">
        {/* left side */}
        <div className="w-left">
          <div className="awesome">
            {/* dark Mode */}
            <span className="">
            Start learning with <br />us right now!
            </span>
            <span>Brands & Clients</span>
            <p className="text-2xl mt-4 text-black font-bold">Choose from 100+ online video courses with new updates.</p>
            <spane>
              Lorem ispum is simpley dummy text of printing of printing Lorem
              <br />
              ispum is simpley dummy text of printingLorem ispum is simpley dummy
              text
              <br />
              y dummy text of printingLorem
              <br />
              ispum is simpley dummy text of printing
            </spane>
            <div
              className="blur s-blur1"
              style={{ background: "#ABF1FF94" }}
            ></div>
          </div>
  
          {/* right side */}
        </div>
        <div className="w-right">
          <div
            initial={{ rotate: 45 }}
            whileInView={{ rotate: 0 }}
            viewport={{ margin: "-40px" }}
            transition={{ duration: 3.5, type: "spring" }}
            className="w-mainCircle"
          >
            <div className="w-secCircle">
              <img src={victor} alt="" />
            </div>
            <div className="w-secCircle">
              <h3>Live <br />Classes</h3>
            </div>
            <div className="w-secCircle">
              <h3>100K+ <br />Views</h3>
            </div>{" "}
            <div className="w-secCircle">
              <h2>1000+<br />Lessons</h2>
            </div>
            <div className="w-secCircle">
              <img src={victor2} alt="" />
            </div>
          </div>
          {/* background Circles */}
          <div className="w-backCircle blueCircle"></div>
          <div className="w-backCircle yellowCircle"></div>
        </div>
      </div>
    );
};

export default Hero;