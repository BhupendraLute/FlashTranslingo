

async function fetchLanguages() {
    const url = 'https://text-translator2.p.rapidapi.com/getLanguages';
    // const url = `${import.meta.env.RAPIDAPI_URL}/getLanguages`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd52b7c9c52msha0773577ae6b316p1c9ca4jsn2ff78fc2005e',
            'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const data = await result?.data;
        return data
    } catch (error) {
        console.error(error);
        return null
    }
}

export default fetchLanguages