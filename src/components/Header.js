import React, { useState } from 'react';
import Image from 'next/image'
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
    
} from '@heroicons/react/outline'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import RadioButtonCheckedOutlinedIcon from '@material-ui/icons/RadioButtonCheckedOutlined';

function Header(props) {

    const [showRegion, setShowRegion] = useState(false)
    const [showPrimeModal, setShowPrimeModal] = useState(false)

    const region = (
        <div className="absolute  justify-between w-60 bg-white border top-25 right-25 p-5 mt-5 cursor-default">
            <div className="flex items-center mb-5 border-b pb-3">
                <RadioButtonCheckedOutlinedIcon className="text-yellow-400 mr-2" />
                <p className="text-black">English - EN</p>
            </div>
             
            <div className="flex">
                <Image src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg" 
                    width={70}
                    height={20}
                    objectFit="cover"
                />
                <p className="text-black ml-3">You are shopping on Amazon.com</p>
            </div>
            
        </div>
        
    )

    const primeModal = (
        <div className="absolute top-5 w-500 bg-white p-4 border cursor-default" onMouseEnter={() => setShowPrimeModal(true)} onMouseLeave={() => setShowPrimeModal(false)}>
                <div className="flex flex-col bg-amazon_blue-prime w-310 h-390 px-10 pt-5 pb-3 w-full text-white font-bold  items-center">
                <div>
                    <Image src="https://m.media-amazon.com/images/G/01/marketing/prime/JoyDelivered/prime_logo_RGB_PRIME_OAT._CB439327201_.png"
                        width={100}
                        height={70}
                        objectFit="contain"
                    />
                </div>
                <p className="mt-5 -mb-6 text-2xl mx-10">Music.</p>
                <br />
                <div className="flex">
                    <p className="text-2xl ml-17 mr-2">Movies.</p>  
                    <p className="text-2xl mr-17">Munchies.</p>
                </div>
                
                <p className="mt-3 text-sm text-center">Shopping and entertainment all in one place.</p>
                <button className="bg-yellow-500 px-5 py-2 my-5 rounded-md font-bold text-amazon_blue-light hover:bg-yellow-400">Try Prime</button>
                <Image src="https://m.media-amazon.com/images/G/01/marketing/prime/JoyDelivered/Prime-Gateway-Flyout-Non-Member-Ph1-Multi-illustration-1000x1258_v2._CB437406087_.png"
                    width={1000}
                    height={500}
                    objectFit="contain"
                />
            </div>
        </div>
        
    )
    
    return (
        <header>
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                {/* logo */}
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image 
                        src="https://links.papareact.com/f90"
                        width={150}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer"
                    />
                </div>

                {/* location */}

                <div className="hidden lg:flex mx-4 items-center">
                    <LocationOnOutlinedIcon className="text-white mt-2" />
                    <div className="text-white text-xs link focus:border-white">
                        <p>Hello</p>
                        <p className="font-bold md:text-sm">Select your address</p>
                    </div>
                </div>

                {/* search */}
                <div className="hidden sm:flex items-center h-10 bg-yellow-400 flex-grow cursor-pointer rounded-md hover:bg-yellow-500">
                    <input type="text" className="p-2 h-full rounded-l-md w-6 flex-grow flex-shrink hover:outline-none px-4" />
                    <SearchIcon className="h-12 p-4" />
                </div>

                {/* right-side */}
                <div className="flex items-center text-xs text-white space-x-6 mx-6">
                    <div className="hidden md:flex cursor-pointer mt-3 relative" onMouseEnter={() => setShowRegion(true)} onMouseLeave={() => setShowRegion(false)}>
                        <Image src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg" 
                            width={30}
                            height={20}
                            objectFit="cover"
                        />
                        {showRegion ? region : ''}
                    </div>
                    

                    <div className="link">
                        <p>Hello, Nikitha Devan</p>
                        <p className="font-bold md:text-sm">Account & Lists</p>
                    </div>

                    <div className="link">
                        <p>Returns</p>
                        <p className="font-bold md:text-sm">& Orders</p>
                    </div>

                    <div className="relative link flex items-center">
                        <span className="absolute top-0 right-0 md:right-6 h-4 w-4 bg-yellow-400 text-center text-black font-bold rounded-full">0</span>
                        <ShoppingCartIcon className="h-10" />
                        <p className="hidden md:inline font-bold text-sm pt-3">Cart</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center space-x-5 text-sm bg-amazon_blue-light text-white p-2">
                <p className="flex items-center link">
                    <MenuIcon className="h-6 mr-1" />
                    All
                </p>
                <p className="link">
                    Best Sellers
                </p>
                <p className="link">
                    Customer Service
                </p>
                <div className="link relative" onMouseEnter={() => setShowPrimeModal(true)} onMouseLeave={() => setShowPrimeModal(false)}>
                    <p>Prime</p>
                    {showPrimeModal ? primeModal : ''}
                </div>
                
                <p className="link">
                    New Releases
                </p>
                <p className="link hidden lg:inline-flex">
                    Today's Deals
                </p>
                <p className="link hidden lg:inline-flex">
                    Books
                </p>
                <p className="link hidden lg:inline-flex">
                    Pharmacy
                </p>
                <p className="link hidden lg:inline-flex">
                    Fashion
                </p>
            </div>
            {/* {primeModal} */}
        </header>
    );
}

export default Header;