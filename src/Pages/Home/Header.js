import React from 'react';
import "./Header.css"
import pic1 from '../../assest/Ellipse 1.png'
import pic2 from '../../assest/Ellipse 2.png'
import pic3 from '../../assest/Ellipse 3.png'
import pic4 from '../../assest/Ellipse 4.png'

const Header = () => {
    return (
        <div style={{
            backgroundColor: '#9921E8',
        }}
            className="max-w-full  h-screen flex">
            <div className="px-12 mt-20">
                <h2 style={{ color: '#9921E8' }} className="bg-white rounded-lg px-4">#MOST TRUSTED CERTIFICATIONS BY THE INDUSTRY</h2>
                <h2 className="text-4xl mt-6 text-white">
                    Unleash Your SCRUM Skills,<br />Grab More Attention To Résumé
                </h2>
                <button style={{
                    background: "#A337EA"
                }} className="w-[128px] h-[32px] rounded-lg text-white mt-8">ENROLL NOW</button>
                <div>
                    <p></p>
                </div>
            </div>
            <div className="mt-8">
                <img className="img1" src={pic4} alt="" />
                <img className="img2" src={pic3} alt="" />
                <img className="img3" src={pic2} alt="" />
                <img className="img4" src={pic1} alt="" />
            </div>
        </div>
    );
};

export default Header;