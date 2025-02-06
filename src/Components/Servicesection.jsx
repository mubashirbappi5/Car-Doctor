import dbConnect from '@/lib/dbConnect';
import React from 'react';

const Servicesection =async () => {
    
    const servicescollection = dbConnect('ServicesDb')
     const data = await servicescollection.find({}).toArray();
    
    return (
        <div>
           <div>
            <h1 className='text-4xl font-bold text-center'>Our Service Area </h1>
            <p className='text-gray-400 text-sm text-center'>the majority have suffered alteration in some form, by injected  humour, or randomised words <br /> which don't look even slightly believable. </p>
           </div>

            
        </div>
    );
};

export default Servicesection;