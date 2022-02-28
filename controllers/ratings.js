const Movie = require('../models/movie');

module.exports = {
    create
}



async function create(req, res){
	console.log(req.body, " <- req.body", req.file, " <photo", req.user, "<--- create ratings in controller")
	console.log(req, "rating in create in controller")
		try {
			// model talking to mongodb
			const movie = await Movie.findById(req.params.id);

            movie.ratings.push({
                user: req.user,
                userName: req.user.username,
                rating: req.body.rating,
			})


			await movie.save()

			// respond to the client
			// What file on the client can we log out this response?
			res.status(201).json({data: 'rating added'})


		} catch(err){
			console.log(err)
			res.status(400).json({err})
		}
 }
 


