import React from 'react'
import Banner from "../assets/orange-pattern.jpg"

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%"
}

const Subscribe = () => {
    return (
        <div className='mb-20 bg-gray-100 dark:bg-gray-800' style={BannerImg} data-aos="zoom-in">
            <div className="p-[1rem] lg:px-[14rem] py-10 backdrop-blur-sm">
                <div className='space-y-6 max-w-xl mx-auto'>
                    <h1 className='text-2xl !text-center sm:text-left sm:text-4xl font-semibold text-white'>Get Notified About New Products</h1>
                    <input type="text" data-aos="fade-up" placeholder='Enter Your Email' className='w-full p-3 bg-white rounded'/>
                </div>
            </div>
        </div>
    )
}

export default Subscribe