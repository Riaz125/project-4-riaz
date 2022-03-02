
export function getAllIMDB() {
    return fetch("https://ott-details.p.rapidapi.com/advancedsearch?start_year=2020&end_year=2021&min_imdb=6&max_imdb=7.8&genre=action&language=english&type=movie&sort=highestrated&page=1", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "ott-details.p.rapidapi.com",
            "x-rapidapi-key": "59875b1b5cmsh8127719c2cf1825p17dfa9jsnf2e519a5c3ce"
        }

	}).then(res => {
		if (res.ok) return res.json();
		throw new Error('Error in IMDB-API! Hey Check the Express Terminal');
	  })
}