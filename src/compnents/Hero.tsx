import React from 'react'

import { BsArrowRight } from "react-icons/bs";

const Hero = () => {

    const HeroImage = ({image, heading, price, tagLine }) => {
        return (
            <>
            <img src={image} alt="Hero Image"className='w-full h-full object-cover rounder-lg' />
                <div className="absolute max-w-[470px sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4 "  >
                    <p className='text-2xl hidden sm:block'> {tagLine} </p>
                    <h2 className="text-2xl  font-bold">{heading}</h2>
                    <p className='text-gray-500 text-xl sm:text-md pt-4 '>Starting At</p>
                    <div className="font-medium pb-4 text-red-600 text-2xl sm:text-4xl sm:pb-8">
                        ${price}/kg
                    </div>
                    <div className="bg-accentDark hover:bg-accent text-white flex rounded-full w-fit items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer"> Shop Now <BsArrowRight /> </div>
                </div>
            </>
            
        )

    }
  return (
    <div className="container pt-8">
        <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
            <div className="relative xl:col-span-2 xl:row-start-1 xl:row-end-[-1]">

                <HeroImage
                 image="../../public/images/hero__1.webp"
                 heading="Dried Fruits Best Quality"
                  tagLine="100% Original Dry fruits"
                   price="9.99"
                    />
                
           
            </div>
                <div className="relative">
                <HeroImage
                 image="../../public/images/hero__2.webp"
                 heading="Best Yummy Pizza"
                 tagLine=""
                   price="25"
                    />
                </div>
                <div className="relative">
                <HeroImage
                 image="../../public/images/hero__3.webp"
                 heading="Best Yummy Chips"
                 tagLine=""
                   price="10"
                    />
                </div>
        </div>
    </div>
  )
}


export default Hero