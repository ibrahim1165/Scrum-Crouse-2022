import React from 'react';

const Contact = () => {
    return (
        <div style={{
            backgroundColor:"#5F72BE"}} className="w-[1112px] h-[120px] px-20  mx-auto mt-48">
           <div
            className="container contact flex items-center justify-center"> 
               <div  className="text-white mt-4 px-6">
                   <h3>Email Us</h3>
                   <p className="mt-4">Connect with us in case of any queries, complaints or feedbacks...</p>
               </div>
               <div className="px-6 mt-12">
                   <button className="btn h-[50px] w-[327px] text-white bg-primary">CONTACT US</button>
               </div>
           </div>
       </div>
    );
};

export default Contact;