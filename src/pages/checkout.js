import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'
import { useSession } from 'next-auth/client'
import { useSelector } from 'react-redux'
import { selectItems, selectTotal } from '../slices/cartSlice'
import CheckedOutProduct from '../components/CheckedOutProduct'
import { selectSaveForLaterItems } from '../slices/saveForLaterSlice'
import SavedForLater from '../components/SavedForLater'
import Currency from 'react-currency-formatter'
import { grey } from '@material-ui/core/colors'

export default function Checkout() {
    const [session] = useSession()
    const items = useSelector(selectItems)
    const total = useSelector(selectTotal)
    const saveForLaterItems = useSelector(selectSaveForLaterItems)

    return (
        <div className="bg-gray-100">
            <Header />
            <main className="lg:flex">
                {/* left */}
                <div className="shadow-sm mx-auto">
                    <Image 
                        src="https://links.papareact.com/ikj"
                        width={1020}
                        height={250}
                        objectFit="contain"
                    />

                    <div className="bg-white m-5 flex flex-col p-5 space-y-10">
                        <h1 className="text-3xl ">
                            {
                                items.length === 0 ? 
                                <div className="flex items-center -mb-7">
                                    <div className="bg-blue-50 rounded-full p-7 mx-5 my-auto">
                                        <Image 
                                            src="https://freepngimg.com/download/web_design/42851-3-cart-free-clipart-hd.png"
                                            width={100}
                                            height={100}
                                            objectFit="contain"
                                            
                                        />
                                    </div>
                                    
                                    <p className="font-medium text-md">Your Amazon Cart is empty.</p>
                                </div> : 
                                <div>
                                Shopping Cart
                                <div className="grid grid-cols-5 border-b pb-1">
                                    <div className="col-span-4"></div>
                                    <div className="text-sm text-gray-600 justify-self-end">Price</div>
                                </div>
                                </div>
                            }
                        </h1>

                       {items.map((item, i) => 
                            <CheckedOutProduct 
                                key={i}
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                description={item.description}
                                category={item.category}
                                image={item.image}
                                rating={item.rating}
                                hasLimitedTimeDeal={item.hasLimitedTimeDeal}
                                hasPrime={item.hasPrime}
                            />
                       )}
                        <div className="grid grid-cols-5">
                            <div className="col-span-4"></div>
                            <div className="text-md justify-self-end -mt-8">{
                                items.length === 0 ? '' : 
                                <div className="flex">
                                    Subtotal ({items.length} items): 
                                    <div className="font-bold">
                                        <Currency quantity={total} />
                                    </div>
                                </div>
                            }</div>
                        </div>
                    </div>

                    <div className="bg-white m-5 flex flex-col p-5 space-y-10">
                        <h1 className="text-3xl border-b mb-4 pb-1">
                            {
                                saveForLaterItems.length === 0 ? 'You have not saved any items.' : 'Your Items'
                            }
                        </h1>

                       {saveForLaterItems.map((item, i) => 
                            <SavedForLater 
                                key={i}
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                description={item.description}
                                category={item.category}
                                image={item.image}
                                rating={item.rating}
                                hasLimitedTimeDeal={item.hasLimitedTimeDeal}
                                hasPrime={item.hasPrime}
                            />
                       )}

                    </div>
                    
                </div>

                {/* right */}
                
                    {
                        items.length > 0 && (
                            <div className="flex flex-col bg-white p-10 shadow-md my-5 mr-5">
                            
                                <h2 className="whitespace-nowrap text-lg">Subtotal ({items.length} items): {" "}
                                    <span className="font-bold">
                                        <Currency quantity={total} />
                                    </span>
                                </h2>

                                <button
                                    role="link"
                                    className={`button font-normal rounded-md ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}

                                >
                                    {!session ? 'Sign in to checkout' : 'Proceed to Checkout'}
                                </button>
                            </div>
                            
                        )
                    }

                {/* </div> */}
                <div>

                </div>
            </main>
        </div>
    )
}