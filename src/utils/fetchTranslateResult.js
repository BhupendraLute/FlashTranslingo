

async function fetchTranslationResult(srcLang, targetLang, inputText) {
	const url = 'https://text-translator2.p.rapidapi.com/translate';
	const options = {
		method: 'POST',
		headers: {
			'content-type': 'application/x-www-form-urlencoded',
			'X-RapidAPI-Key': 'd52b7c9c52msha0773577ae6b316p1c9ca4jsn2ff78fc2005e',
			'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
		},
		body: new URLSearchParams({
			source_language: srcLang,
			target_language: targetLang,
			text: inputText
		})
	};

	try {
		const response = await fetch(url, options);
		const result = await response.json();
		const data = result?.data
		return data;
	} catch (error) {
		console.error(error);
		throw new Error(error?.message)
	}
}

export default fetchTranslationResult;