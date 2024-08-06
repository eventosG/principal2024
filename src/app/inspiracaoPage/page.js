"use client";
import Image from "next/image";
import React from "react";
export default function InspiracaoSelected() {
  return (
    <div className='container lg:mx-auto lg:min-h-50vh'>
      <div className='grid grid-cols-1 gap-4'>
        <div className='flex flex-col'>       
            <div className="my-12 flex justify-center">
                <Image
                src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                className="h-auto rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                alt="" />
            </div>
            <div className='flex justify-center mb-12'>
                <div className='grid grid-cols-12 gap-4 mb-4'>
                        <div>
                            <Image
                            src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                            className="h-auto rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                            alt="" />
                        </div>
                        <div>
                            <Image
                            src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                            className="h-auto rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                            alt="" />
                        </div>
                        <div>
                            <Image
                            src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                            className="h-auto rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                            alt="" />
                        </div>
                        <div>
                            <Image
                            src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                            className="h-auto rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                            alt="" />
                        </div>
                        <div>
                            <Image
                            src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                            className="h-auto rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                            alt="" />
                        </div>
                        <div>
                            <Image
                            src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                            className="h-auto rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                            alt="" />
                        </div>
                </div>
            </div> 
        </div>
      </div>
       
    </div>    
  );
}