import React, { useContext } from 'react'
import { Context } from '../../context/context'

function LangSelector({onLanguageChange, defaultLang, defaultLangName}) {

    const { languages } = useContext(Context)

    const handleChange = (event) => {
        const selectedLanguage = event.target.value;
        onLanguageChange(selectedLanguage);
      };


    return (
        <div className='p-4 flex justify-start'>
            <div className="flex justify-center items-center">
                <label htmlFor="LangSelector">Language : </label>
                <select id="LangSelector" onChange={handleChange} className='w-[12rem] ml-2 py-1 px-2 rounded-md bg-white dark:bg-[#0f0f32] border border-black dark:border-white'>
                    <option className='p-2' value={defaultLang}>{defaultLangName}</option>
                    {languages && languages.map((language)=>(
                        <option className='p-2' key={language.code} value={language?.code}>{language.name}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default LangSelector