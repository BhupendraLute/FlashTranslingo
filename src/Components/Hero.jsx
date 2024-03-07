import React from 'react'
import { Link } from 'react-router-dom';


function Hero() {
    return (
        <section className="w-full text-center p-12 flex flex-col lg:flex-row justify-center">
            <div className="relative flex-1 flex flex-col justify-center items-center">
                <div className="absolute bg-blue-900 w-[48rem] h-[48rem] rounded-full top-[-20rem] left-[-25rem] z-10"></div>
                <div className='relative z-50 py-4 lg:py-2'>
                    <h1 className='text-5xl font-extrabold'>Translate Any Text Instantly!</h1>
                    <p className='mt-4 font-semibold text-2xl md:text-3xl'>Break Language Barriers Effortlessly with <span className="text-orange-600 font-bold">FlashTranslingo.</span></p>
                    <div className="mt-8"><Link to={"/translator"} className='py-2 px-4 rounded-lg text-white bg-orange-400 hover:bg-blue-800 dark:hover:bg-blue-800 dark:bg-orange-400 ring-1 ring-black/5 hover:shadow-md transition-all duration-200 font-bold'>Translate Now</Link></div>
                </div>
            </div>
            <div className="relative flex-1">
                <div className="absolute bg-orange-500 w-[10rem] h-[10rem] rounded-full right-[-1.5rem] top-[-1.5rem] z-10"></div>
                <img src="assets/images/hero-img.jpg" alt="heor-image" className='relative w-full lg:h-full p-1 lg:p-10 rounded-2xl lg:rounded-[3.5rem] overflow-hidden z-50' />
                <div className="absolute bg-orange-300 w-[18rem] h-[18rem] rounded-full left-[-3rem] bottom-0 z-10"></div>
            </div>
        </section>
    )
}

export default Hero