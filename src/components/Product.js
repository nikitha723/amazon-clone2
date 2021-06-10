import Image from 'next/image';
import React, { useState } from 'react';
import Currency from 'react-currency-formatter'
import {StarIcon} from "@heroicons/react/solid"
import { useRouter } from 'next/router'
import Link from 'next/link'

function Product({id, title, description, image, category, price}) {
    const MAX_RATING = 5;
    const MIN_RATING = 1;
    const router = useRouter()
    
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING 
    )

    const [hasPrime] = useState(
        Math.random() > 0.5
    ) 

    const [hasLimitedTimeDeal] = useState(
        Math.random() < 0.5
    )

    // const handleClick = (id) => {
    //     console.log('id', id)
    //     router.push(`/${id}`)
    // } 

    return (
        <Link href={`/${id}`}>
         {/* <Link href="/[id]" as="/id">
         <Link href={{
             pathname: '/[id]',
             query: { id: id },
           }}> */}
        <div className="relative flex flex-col items-center m-5 cursor-pointer bg-white z-30 p-10">
            <p className="absolute top-2 right-2 text-gray-300 text-sm italic">{category}</p>
            <Image 
                src={image}
                width={200}
                height={200}
                objectFit="contain"
            />
            <h4 className="mt-3 mb-1 font-bold">{title}</h4>

            <p className="my-2 text-xs line-clamp-2">{description}</p>
            
            <div className="flex">
                {
                    Array(rating)
                    .fill()
                    .map((_, i) => (
                        <StarIcon className="h-5 text-yellow-500" />
                    ))
                }
            </div>

            <div className="mx-auto">
                { hasLimitedTimeDeal && 
                    <p className="bg-red-700 text-white px-3 py-1 m-2 text-sm">Limited time deal</p>
                }
            </div>
            
            <div className="mb-5 flex items-center">
                <div className="font-semibold text-lg mr-3">
                    <Currency quantity={price} />
                </div>
                
                {
                    hasLimitedTimeDeal && 
                    <div className="font-normal text-md line-through">
                        <Currency quantity={price * 1.5} />
                    </div>
                    
                }
            </div>

            {
                hasPrime && 
                <div className="flex flex-col items-center -mt-5">
                    <img src="https://links.papareact.com/fdw" alt="" className="w-12" />
                    <p className="text-sm text-gray-500 -mt-3">FREE Shipping by Amazon</p>
                </div>
            }
            {/* <button className="mx-auto button">Add To Cart</button> */}
            
        </div>
        </Link>
    );
}

export default Product;