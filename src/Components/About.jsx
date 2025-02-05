import React from 'react';
import img1 from '../../public/assets/images/about_us/person.jpg'
import Image from 'next/image';
import img2 from '../../public/assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className='flex justify-between gap-10 w-full max-w-5xl mx-auto my-20'>

            <div className='relative' >
            <Image className=' w-[800px] h-[370px]  border' src={img1} alt='person' />
            <Image className='absolute left-9 top-4 w-72 rounded-xl border-4 border-white'  src={img2 } alt='parts'/>
            </div>
            <div className='space-y-6 w-11/12'>
                <h3 className='font-semibold text-red-500'>About Us</h3>
                <h1 className='text-4xl font-bold'>We are qualified & of experience in this field</h1>
                <p className='text-[#737373]  text-sm'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <button className='btn bg-red-400'>Get More Info</button>
            </div>
            
        </div>
    );
};

export default About;