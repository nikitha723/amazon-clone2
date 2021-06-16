import React from 'react'
import Image from 'next/image' 
import { StarIcon } from '@heroicons/react/outline';
import Currency from 'react-currency-formatter'
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../slices/cartSlice';
import { removeFromSaveForLater, saveForLater } from '../slices/saveForLaterSlice';

export default function SavedForLater( { id, title, price, description, category, image, rating, hasLimitedTimeDeal, hasPrime } ) {

    const dispatch = useDispatch()

    const removeItemFromSavedList = () => {
        dispatch(removeFromSaveForLater({id}))
    }

    const moveToCart = () => {
        const product = {
            id, title, price, description, category, image, rating, hasLimitedTimeDeal, hasPrime
        }
        dispatch(addToCart(product))
        dispatch(removeFromSaveForLater({id}))
    }

  return (
    <div className="grid grid-cols-5">
        <Image 
            src={image}
            height={200}
            width={200}
            objectFit="contain"
        />
        <div className="col-span-3 mx-4">
            <p className="text-lg redlink text-blue-600 line-clamp-2">{title}</p>
            <div className="flex">
            {
                Array(rating)
                .fill()
                .map((_, i) => (
                    <StarIcon className="h-5 text-yellow-500" />
                ))
            }
            </div>
            <p className="text-green-800 text-sm mt-1">In Stock</p>
            <p className="text-sm my-2 line-clamp-2">{description}</p>
            {/* { hasLimitedTimeDeal && 
                    <p className="bg-red-700 text-white px-3 py-1 m-2 text-sm">Limited time deal</p>
                } */}
            <div className="flex items-center">
                <p className="text-blue-600 redlink text-sm border-r pr-2" onClick={removeItemFromSavedList}>Delete</p>
                <p className="text-blue-600 redlink text-sm pl-2" onClick={moveToCart}>Move to cart</p>
            </div>
        </div>

        <div className="justify-self-end font-bold">
            <Currency quantity={price} />
        </div>
      
    </div>
  )
}

