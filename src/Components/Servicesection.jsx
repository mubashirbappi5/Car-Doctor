import dbConnect from '@/lib/dbConnect';
import React from 'react';
import Card from './Card';
import Link from 'next/link';

const Servicesection =async () => {
    
    const servicescollection = dbConnect('ServicesDb')
     const data = await servicescollection.find({}).toArray();
    
    return (
        <div className='max-w-5xl mx-auto'>
           <div className=''>
            <h1 className='text-4xl font-bold text-center'>Our Service Area </h1>
            <p className='text-gray-400 text-sm text-center'>the majority have suffered alteration in some form, by injected  humour, or randomised words <br /> which don't look even slightly believable. </p>
           </div>
           <section className='grid grid-cols-3 gap-5'>
            {
                data.map(service=><Card service={service}/>)
            }
           </section>

         <div className='flex justify-center my-10'>
         <Link href={'/service'} className='border-2 text-red-500 px-4 py-1 border-red-500 '>More Services</Link>
         </div>

            
        </div>
    );
};

export default Servicesection;