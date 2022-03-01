const Movie = require('../models/movie');
const User = require('../models/user')

module.exports = {
    create,
	update
}



async function create(req, res){
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

			res.status(400).json({err})
		}
 }

 async function update(req, res) {
	console.log("update controller")
	try {
		const movie = await Movie.findOne({'ratings._id': req.params.id, 'ratings.userName': req.user.username});
		const rating = await movie.ratings.id(req.params.id);
		rating.rating = req.body.rating;
		console.log(rating);
		await movie.save();
		res.status(201).json({data: 'rating updated'})

	} catch(err) {
		console.log(err)
		res.status(400).json({err})
	}
 }


