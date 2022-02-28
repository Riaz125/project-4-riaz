import tokenService from "./tokenService";

// Create two function
// One to create a like 

// one to delete a like 

// both of these are going to make api calls to the like routes defined in the express app /route/likes.js routes

const BASE_URL = '/api';

export function create(movieId, rating){
	const formData = new FormData()
    formData.append('rating', rating);
	return fetch(`${BASE_URL}/movies/${movieId}/ratings`, { // <- this end point is communicating with the create route in /routes/likes.js on express server
		method: 'POST',
		body: formData,
		headers: {
			'Authorization': 'Bearer ' + tokenService.getToken() // <- the jwt contains the user who is sending the like
		}
	}).then(res => {
		if (res.ok) return res.json();
		throw new Error('Error in creating the rating, Check your express terminal!')
	})
}

export function removeLike(ratingsId){
	return fetch(`${BASE_URL}/likes/${ratingsId}`, {
		method: 'DELETE',
	    headers: {
			'Authorization': 'Bearer ' + tokenService.getToken() // <- the jwt contains the user who is sending the like
		}	
	}).then(res => {
		console.log(res.ok, " <- res.ok")
		if(res.ok) return res.json();
		throw new Error('Error in deleting the rating, check your express terminal!')
	})
}