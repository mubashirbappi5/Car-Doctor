import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import React from "react";
import bannerimg from "../../../../public/assets/images/checkout/checkout.png";
import Image from "next/image";
const Serviceone = async ({ params }) => {
  const p = await params;

  const servicescollection = dbConnect("ServicesDb");
  const data = await servicescollection.findOne({ _id: new ObjectId(p.id) });
  return (
    <div>
      <section className=" flex justify-center">
        <figure className="   relative">
          <Image
            className="mx-auto"
            src={bannerimg}
            alt="banner"
            width={1137}
            height={300}
          />
          <div className="absolute w-full h-full border-2 bg-black bg-opacity-50 border-blue-500 top-0">
            <div className="flex items-center w-full h-full">
              <div className="ml-20">
                <h1 className="text-white font-bold text-3xl">
                  Service Details
                </h1>
              </div>
            </div>
          </div>
        </figure>
      </section>

      <section className="w-11/12 mx-auto p-3">
        <div>
          <Image
            className=" rounded-xl"
            src={data.img}
            alt="Serviceimg"
            width={752}
            height={200}
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{data.title}</h1>

          <p >{data.description}</p>
        </div>
        <div className="grid grid-cols-2 gap-8">
            {
                data.facility.map((fac,idx)=><div className="bg-gray-200 rounded-lg border-t-2 border-red-500  p-10" key={idx}>
                        <h1 className="text-xl font-semibold">{fac.name}</h1>
                        <p >{fac.details}</p>
                </div>)
            }
        </div>
      </section>

      
    </div>
  );
};

export default Serviceone;
