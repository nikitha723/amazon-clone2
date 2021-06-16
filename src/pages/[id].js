import React from 'react';
import Header from '../components/Header';
import { useRouter } from 'next/router'
import Subheader from '../components/Subheader';
import Image from 'next/image'
import Currency from 'react-currency-formatter'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../slices/cartSlice'
// import { RoundedCornerTwoTone } from '@material-ui/icons';
import { selectItemDetail } from '../slices/itemDetailSlice'
import {StarIcon} from "@heroicons/react/solid"

function Details({product}) {

    const router = useRouter()
    const {id} = router.query

    const dispatch = useDispatch()
    const itemDetails = useSelector(selectItemDetail)

    console.log('itemDetails',itemDetails)

    // console.log('product', product)
    // console.log('product id', id)

    const bulletPoints = product.description.split(".").filter( word => word.length > 2 );;
    // console.log(bulletPoints)

    const addItemsToCart = () => {
        const productItem = {id, title: product.title, price: product.price, description: product.description, category: product.category, image: product.image, rating: itemDetails[0].rating, hasLimitedTimeDeal: itemDetails[0].hasLimitedTimeDeal, hasPrime: itemDetails[0].hasPrime}
        dispatch(addToCart(productItem))
    }

    const youSave = () => {
        return Math.floor((product.price * 1.5) - product.price)
    }

    // , hasPrime, rating

    return (
        <div>
            <Header />
            <Subheader className="mb-0"/>
            {/* <div className="my-0 flex items-center mx-auto">
                <Image src="https://images-na.ssl-images-amazon.com/images/G/01/PillPack/Wolfgang_merch/EDS/06-2021_EDSLaunch_ILM_Desktop-1x._CB668841729_.jpg"
                    width={1000}
                    height={200}
                    objectFit="contain"
                    // layout="fill"
                />
            </div> */}
            
            <div className="flex items-center mx-5 justify-between">
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
                    <div className="border-b mb-5 pb-5">
                        <p className="text-sm text-blue-600 redlink">{product.category}</p>
                        <h2 className="text-3xl mb-3 text-gray-500">{product.title}</h2>
                        <div className="flex border-b mb-5">
                        {
                            Array(itemDetails[0].rating)
                            .fill()
                            .map((_, i) => (
                                <StarIcon className="h-5 text-yellow-500" />
                            ))
                        }
                        </div>
                        <div className="mx-auto mb-3">
                                { itemDetails[0].hasLimitedTimeDeal && 
                                    <span className="bg-red-700 text-white p-1 my-2 space-y-2 text-sm">Limited time deal</span>
                                }
                            </div>
                            
                            <div className="flex items-center">
                                
                                {
                                    itemDetails[0].hasLimitedTimeDeal && 
                                    <div>
                                        <span>Was: </span>
                                        <div className="font-normal inline-block text-md line-through">
                                            <Currency quantity={product.price * 1.5} />
                                        </div>
                                        <span className="text-blue-500 text-sm font-normal redlink"> Details</span>
                                    </div>
                                    
                                }
                            </div>
                        <p className="text-md">Price: 
                            <div className="text-xl mr-3 text-red-700 font-medium inline-block ml-2">
                                <Currency quantity={product.price} /> <span className="text-gray-500 text-sm"> & </span><span className="text-blue-500 text-sm font-normal redlink">FREE Returns</span>
                            </div>
                        </p>
                        <p className="text-md">You Save: 
                            <div className="text-md mr-3 text-red-700 font-medium inline-block ml-2">
                                <Currency quantity={youSave()} /> 
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
                        {
                            itemDetails[0].hasPrime && 
                            <div className="flex items-center -mb-4">
                                <img src="https://links.papareact.com/fdw" alt="" className="w-12" />
                                <p className="text-sm text-gray-500"> FREE Shipping by Amazon</p>
                            </div>
                        }
                    </div>
    
                    <Image 
                        src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Sports/XCM_CUTTLE_1336268_1725553_US_3889463_355x70_en_US._CB667419647_.jpg"
                        width={500}
                        height={100}
                        objectFit="contain"
                        // layout="fill"
                    />
                    
                </div>
                {/* cart */}
                <div className="w-1/5 border p-4 items-center rounded-md m-2 ">
                        <div className="text-xl mr-3 text-red-700 font-medium inline-block  mb-3 whitespace-nowrap">
                            <Currency quantity={product.price} />
                            <p><span className="text-gray-500 text-sm"> & </span><span className="text-blue-600 text-sm font-normal redlink">FREE Returns</span></p>
                        </div>
                        <div className="flex items-center lg:whitespace-nowrap">
                            <p className="redlink text-sm text-blue-600">FREE Delivery: </p> 
                            <p className="font-bold text-black text-sm">{" "} Tuesday, June 15</p>
                        </div>
                        <p className="redlink text-sm text-blue-600 mb-3">Details</p>
                        <div className="flex items-center lg:whitespace-nowrap">
                            <p className="text-sm">Fastest Delivery: </p> 
                            <p className="font-bold text-black text-sm"> Friday, June 11</p>
                        </div>
                        <p className="text-gray-500 text-sm">Order within 2 hrs and 2 mins</p>
                        <p className="redlink text-sm text-blue-600 mb-3">Details</p>
                        <p className="text-green-800 font-medium text-lg mb-5">In Stock.</p>

                    <button className="button w-full rounded-full mb-3" onClick={addItemsToCart}>Add to Cart</button>
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
