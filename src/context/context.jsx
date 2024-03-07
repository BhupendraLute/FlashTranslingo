import React, { createContext, useEffect, useState } from 'react';
import fetchLanguages from '../utils/fetchLanguages';
import fetchTranslationResult from '../utils/fetchTranslateResult';

export const Context = createContext();

export const DataProvider = ({ children }) => {

  const [languages, setLanguages] = useState([])
  const [recentTranslation, setRecentTranslation] = useState([])
  const [translatedText, setTranslatedText] = useState(null)

  useEffect(() => {
    const data = fetchLanguages()
    data.then((data)=>{
      console.log(data.languages);
    setLanguages(()=>data.languages)
    })
    console.log("languages: ", languages);
    
  }, [])


  async function getTranslatedText(inputText, srcLang='en', targetLang='hi'){
    const data = await fetchTranslationResult(srcLang, targetLang, inputText)
    const result = data?.translatedText
    return result
  }


  return (
    <Context.Provider value={{ languages, getTranslatedText }}>
      {children}
    </Context.Provider>
  );
};