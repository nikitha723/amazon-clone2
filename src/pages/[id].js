import React from 'react';
import Header from '../components/Header';
import { useRouter } from 'next/router'
import Subheader from '../components/Subheader';
import Image from 'next/image'
import Currency from 'react-currency-formatter'

function Details({product}) {

    const router = useRouter()
    const {id} = router.query
    console.log('product', product)
    console.log('product id', id)

    const bulletPoints = product.description.split(".").filter( word => word.length > 0 );;
    console.log(bulletPoints)

    return (
        <div>
            <Header />
            <Subheader />
            
            <div className="flex items-center m-5 justify-between">
                {/* image */}
                <div className="p-10 w-2/5 ">
                    <Image 
                    src={product.image}
                    width={400}
                    height={400}
                    objectFit="contain"
                />
                </div>
                {/* content */}
                <div className="w-2/5 m-5 p-5 h-3/4 ">
                    <p className="text-sm text-blue-600 redlink">{product.category}</p>
                    <h2 className="text-3xl mb-3 text-gray-500">{product.title}</h2>
                    <p className="text-md">Price: 
                        <div className="text-xl mr-3 text-red-700 font-medium inline-block ml-2">
                            <Currency quantity={product.price} /> <span className="text-gray-500 text-sm"> & </span><span className="text-blue-500 text-sm font-normal redlink">FREE Returns</span>
                        </div>
                    </p>
                    {/* <h2>{product.price}</h2> */}
                    {/* <p className="mt-3">{product.description}</p> */}
                    <ul className="list-disc text-md pt-5">
                        {
                            bulletPoints.map((b, i) => (
                                <li key={i}>{b}</li>
                            ))
                        }
                    </ul>
                    
                </div>
                {/* cart */}
                <div className="w-1/5 border p-4 items-center rounded-md m-2">
                        <div className="text-xl mr-3 text-red-700 font-medium inline-block  mb-3">
                            <Currency quantity={product.price} />
                            <p><span className="text-gray-500 text-sm"> & </span><span className="text-blue-600 text-sm font-normal redlink">FREE Returns</span></p>
                        </div>
                        <div className="flex items-center">
                            <p className="redlink text-sm text-blue-600">FREE Delivery: </p> 
                            <p className="font-bold text-black text-sm">{" "} Tuesday, June 15</p>
                        </div>
                        <p className="redlink text-sm text-blue-600 mb-3">Details</p>
                        <div className="flex items-center">
                            <p className="text-sm">Fastest Delivery: </p> 
                            <p className="font-bold text-black text-sm"> Friday, June 11</p>
                        </div>
                        <p className="text-gray-500 text-sm">Order within 2 hrs and 2 mins</p>
                        <p className="redlink text-sm text-blue-600 mb-3">Details</p>
                        <p className="text-green-800 font-medium text-lg mb-5">In Stock.</p>

                    <button className="button w-full rounded-full mb-3">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default Details;


//to get data depending on the id that is passed, we should use getServerSideProps
//if we want to get static data ie data does depend on the id then use getStaticProps

export const getServerSideProps = async (context) => {
    const res = await fetch(
      `https://fakestoreapi.com/products/${context.params.id}`
    );
    const product = await res.json();
  
    return {
      props: {
        product,
      },
    };
  };
