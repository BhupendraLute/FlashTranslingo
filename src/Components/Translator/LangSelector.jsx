import React, { useContext } from 'react'
import { Context } from '../../context/context'

function LangSelector() {

    const { languages } = useContext(Context)


    return (
        <div className='p-4 flex justify-start'>
            <div className="flex justify-center items-center">
                <label htmlFor="LangSelector">Language : </label>
                <select id="LangSelector" className='w-[12rem] ml-2 py-1 px-2 rounded-md bg-white dark:bg-[#0f0f32] border border-black dark:border-white'>
                    <option value="en">English</option>
                    {languages && languages.map((language)=>(
                        <option key={language.code} value={language?.code}>{language.name}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default LangSelector