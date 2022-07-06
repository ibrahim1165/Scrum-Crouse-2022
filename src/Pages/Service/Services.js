import React from 'react';
import img from '../../assest/Rectangle 5.png'
import Service from './Service';
const Services = () => {
    const services=[
        {
            id:1,
            name:"Learn SCRUM: The Complete Beginner Course",
            discreption:"Samay Jain, Ex-KPMG",
            img:img
        },
        {
            id:2,
            name:"Learn SCRUM: The Complete Beginner Course",
            discreption:"Samay Jain, Ex-KPMG",
            img:img
        },
        {
            id:3,
            name:"Learn SCRUM: The Complete Beginner Course",
            discreption:"Samay Jain, Ex-KPMG",
            img:img
        },
        {
            id:4,
            name:"Learn SCRUM: The Complete Beginner Course",
            discreption:"Samay Jain, Ex-KPMG",
            img:img
        },
    ]
    return (
        <div>
            <div>
           <div className="mt-44 text-2xl font-bold px-8">
                <h2 className="">A broad range of courses</h2>
                <p className="text-sm">Choose from 100+ online video courses with new additions published every month</p>
            </div>
            <div className="container grid grid-cols-1 md:grid-cols-4 mt-20 mx-auto gap-1 mb-4 px-20 lg:px-0">
            {
                services.map(service=><Service
                key={service.id}
                service={service}
                ></Service>)
            }
        </div>    
        </div> 
        </div>
    );
};

export default Services;