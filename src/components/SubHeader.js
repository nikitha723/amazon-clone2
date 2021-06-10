import React from 'react'
import Image from 'next/image'

export default function Subheader() {
  return (
    <header className="border">
      <div className="flex p-1 items-center">
          <div className="ml-5 mr-10 flex items-center">
              <Image 
                src="https://images-na.ssl-images-amazon.com/images/G/01/nav2/images/gui/amazon-fashion-store-new._CB485923950_.png"
                width={200}
                height={50}
                objectFit="contain"
                className="cursor-pointer"
              />
          </div>
          <div className="flex items-center space-x-20 text-xs text-amazon_blue-light">
                <p className="link hover:underline text-orange-500">Women</p>
                <p className="link">Men</p>
                <p className="link">Kids</p>
                <p className="link">Luggage</p>
                <p className="link">Sales & Deals</p>
                <p className="link">New Arrivals</p>
                <p className="link">Our Brands</p>
                <div className="justify-between">
              <Image
                src="https://images-na.ssl-images-amazon.com/images/G/01/softlines/subnav/images/pwFlyout/icons/prime_wardrobe_logo._CB485931548_.png"
                width={200}
                height={50}
                objectFit="contain"
                className="justify-between"
              />
          </div>
          </div>
          

      </div>
    </header>
  )
}
