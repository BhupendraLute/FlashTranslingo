import React, { useContext, useEffect, useState } from 'react'
import TextArea from '../Components/Translator/TextArea'
import LangSelector from '../Components/Translator/LangSelector'
import { Context } from '../context/context'

function Translator() {

	const { getTranslatedText } = useContext(Context)

	const [inputText, setInputText] = useState("")
	const [translatedText, setTranslatedText] = useState("")
	const [sourceLanguage, setSourceLanguage] = useState("en");
	const [targetLanguage, setTargetLanguage] = useState("hi");

	const handleChange = async (e) => {
		setInputText(e.target.value)
	}

	useEffect(() => {
		let timeoutId;
		clearTimeout(timeoutId)
		timeoutId = setTimeout(() => {
			inputText !== "" ? getTranslatedText(inputText, sourceLanguage, targetLanguage).then((res) => {
				return setTranslatedText(res)
			}) : setTranslatedText("")
		}, 400);

		return () => clearTimeout(timeoutId);
	}, [inputText, sourceLanguage, targetLanguage])

	const handleSourceLanguageChange = (selectedLanguage) => {
		setSourceLanguage(selectedLanguage);
	};

	const handleTargetLanguageChange = (selectedLanguage) => {
		setTargetLanguage(selectedLanguage);
	};





	return (
		<section className='relative w-full min-h-[85vh] pt-14 md:pt-24 pb-14 overflow-hidden'>
			<div className="absolute bg-blue-900 w-[48rem] h-[48rem] rounded-full top-[-20rem] left-[-25rem] z-10"></div>
			<div className="absolute bg-yellow-300 w-[34rem] h-[34rem] rounded-full bottom-[-10rem] right-[-10rem] z-10"></div>
			<div className="relative mt-8 mx-auto w-[92%] lg:w-4/5 flex flex-col lg:flex-row gap-4 lg:gap-0 border-black border dark:border-white bg-black/40 dark:bg-black/15 rounded-lg overflow-hidden z-[99] glass">
				<div className="relative flex flex-col flex-1 ">
					<div className="flex justify-start">
						<LangSelector onLanguageChange={handleSourceLanguageChange} defaultLang={"en"} defaultLangName={"English"} />
					</div>
					<div>
						<TextArea handleChange={handleChange} value={inputText ? inputText : ""} placeholder={"Type here to translate..."} />
					</div>
				</div>

				<div className="flex flex-col flex-1  ">
					<div className="flex justify-end">
						<LangSelector onLanguageChange={handleTargetLanguageChange} defaultLang={"hi"} defaultLangName={"Hindi"} />
					</div>
					<div>
						<TextArea readOnly={true} value={translatedText ? translatedText : ""} placeholder={"Translation result will be displayed here..."} />
					</div>
				</div>

			</div>

		</section>
	)
}

export default Translator