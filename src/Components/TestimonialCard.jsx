import React from 'react'

function TestimonialCard({name, photo, sentiment, review}) {
    return (
        <div className='rounded-lg bg-teal-100 dark:bg-black/5 ring-1 ring-black/5 border border-l-purple-900 shadow-lg hover:shadow-zinc-400 transition-shadow overflow-hidden glass'>
            <div className="flex gap-2 dark:bg-[#1a1a41] p-2">
                <img src={photo} alt="avatar" className='w-[54px] md:w-[62px] lg:w-[75px] h-[54px] md:h-[62px] lg:h-[75px] rounded-full border' />
                <div className="p-2 flex flex-col justify-start">
                    <p className='text-lg text-start text-lime-700 font-semibold'>{name}</p>
                    <small className='text-start text-gray-400'>Review: <span>{sentiment}</span></small>
                </div>
            </div>
            <div className="text-start p-4">
                <p>{review}</p>
            </div>
        </div>
    )
}

export default TestimonialCard