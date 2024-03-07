import React from 'react'

function TextArea({ placeholder, handleChange, value, readOnly }) {

    return (
        <div className="m-1 mb-0 rounded-sm bg-transparent ">
            <textarea className='w-full h-56 lg:h-80 rounded-sm resize-none dark:bg-[#1f1f50] outline-none text-black dark:text-white p-3 border border-black' readOnly={readOnly? readOnly : null} placeholder={placeholder ? placeholder : null} value={value} onChange={handleChange ? handleChange : null}></textarea>
        </div>
    )
}

export default TextArea