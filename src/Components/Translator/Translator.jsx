import React, { useContext, useEffect, useState } from 'react'
import TextArea from './TextArea'
import LangSelector from './LangSelector'
import { Context } from '../../context/context'

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
		<section className='relative w-full pt-14 '>
			<div className="relative mt-8 mx-auto w-[92%] lg:w-4/5 flex flex-col lg:flex-row gap-4 lg:gap-0 bg-gray-100 border border-black dark:border-white dark:bg-transparent rounded-lg overflow-hidden glass">
				<div className="relative flex flex-col flex-1 ">
					<div className="flex justify-start">
						<LangSelector onLanguageChange={handleSourceLanguageChange} defaultLang={"en"} defaultLangName={"English"} />
					</div>
					<div>
						<TextArea handleChange={handleChange} value={inputText ? inputText : ""} placeholder={"Type here tuo translate..."} />
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