import dbConnect from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import React from 'react';

const Serviceone =async ({params}) => {
    const p = await params

    const servicescollection = dbConnect('ServicesDb')
    const data = await servicescollection.findOne({_id:new ObjectId(p.id)})
    return (
        <div>
            <h1>this is services id {p.id} </h1>
        <h2>
            {data.title}
        </h2>
        </div>
    );
};

export default Serviceone;