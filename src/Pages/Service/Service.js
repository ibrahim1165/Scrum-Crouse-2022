import React from 'react';

const Service = ({service}) => {
    const{name,discreption,img}=service;
    return (
        <div>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
            <p className="font-bold">{name}</p>
            <p className="title-1">{discreption}</p>
           {/* <p><Rating /></p>  */}
           <button className="btn btn-sm btn-outline mt-2">ENROLL NOW</button>
            </div> 
        </div>
    );
};

export default Service;