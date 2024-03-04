import React, { useState } from 'react'
import TextArea from './TextArea'
import LangSelector from './LangSelector'

function Translator() {
  

  return (
    <section className='relative w-full pt-14 '>
      <div className="relative mt-8 mx-auto w-[92%] lg:w-4/5 flex flex-col lg:flex-row gap-4 lg:gap-0 bg-gray-100 border border-black dark:border-white dark:bg-[#1f1f50] rounded-lg overflow-hidden">
        <div className="relative flex flex-col flex-1 ">
          <div className="flex justify-start">
            <LangSelector />
          </div>
          <div className="">
            <TextArea  placeholder={"Type here tuo translate..."} />
          </div>
        </div>

        <div className="flex flex-col flex-1  ">
          <div className="flex justify-end">
            <LangSelector />
          </div>
          <div className="">
            <TextArea placeholder={"Translation result will be displayed here..."} />
          </div>
        </div>

      </div>

    </section>
  )
}

export default Translator