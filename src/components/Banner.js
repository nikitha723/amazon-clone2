import React from 'react';
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner(props) {
    return (
        <div className="relative">
            <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
            <Carousel 
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
            >
                <div>
                    <img loading="lazy" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2021/Marketing/EvergreenFree_DMUX-4110/Gateway/DV3A/US-EN_030121_FreeTierQ1Refresh_ACQ_GW_Hero_D_1500x600_CV3._CB655482702_.jpg" alt="" />
                </div>
                <div>
                    <img loading="lazy" src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/NDdhM2JmYjct/NDdhM2JmYjct-OGI3YTUyMDMt-w1500._CB668835500_.jpg" alt="" />
                </div>
                <div>
                    <img loading="lazy" src="https://images-na.ssl-images-amazon.com/images/G/01/em/pd21/xcm_em_Prime_Day_2021_857-USEN_D_PDS-HP-Tall-Hero_1500x600._CB667246497_.jpg" alt="" />
                </div>
                <div>
                    <img loading="lazy" src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/journeys/MzBiNjIyYjgt/MzBiNjIyYjgt-NWM5ZWJlYTct-w1500._CB669030425_.jpg" alt="" />
                </div>
            </Carousel>
        </div>
    );
}

export default Banner;