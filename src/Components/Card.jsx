import Link from 'next/link';
import React from 'react';

const Card = ({service}) => {
    const {title,img,price,_id}= service
    return (
        <div>
            <div className="card card-compact bg-base-100 w-72  border p-4">
  <figure>
    <img
      src={img}
      alt={title} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
   <p>Price:${price}</p>
   <Link href={`/service/${_id}`}>click</Link>
  </div>
</div>
            
        </div>
    );
};

export default Card;