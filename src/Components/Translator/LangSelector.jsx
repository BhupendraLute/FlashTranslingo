import React from 'react'

function LangSelector() {
    return (
        <div className='p-4 flex justify-start'>
            <div className="flex justify-center items-center">
                <label htmlFor="LangSelector">Language : </label>
                <select id="LangSelector" className='w-20 ml-2 py-1 px-2 rounded-md bg-white dark:bg-[#0f0f32] border border-black dark:border-white'>
                    <option value="">Auto</option>
                </select>
            </div>
        </div>
    )
}

export default LangSelector