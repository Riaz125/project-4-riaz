const Movie = require('../models/movie');

const { v4: uuidv4 } = require("uuid");
const S3 = require("aws-sdk/clients/s3");
const s3 = new S3(); // initialize the S3 constructor

const BUCKET = process.env.BUCKET;

module.exports = {
    create,
    index
}



function create(req, res){
	console.log(req.body, " <- req.body", req.file, " <photo", req.user)

	const filePath = `${uuidv4()}${req.file.originalname}`;
	const params = {Bucket: BUCKET, Key: filePath, Body: req.file.buffer}

	// s3 making a request to aws s3 bucket
	s3.upload(params, async function(err, data){
		// check aws error
		if (err) return res.status(400).json({err})
		// We're inside of the response from aws 
		try {
			// model talking to mongodb
			let movie = await Movie.create({
				user: req.user,
                title: req.body.title,
                director: req.body.director,
                genres: req.body.genres,
                platforms: req.body.platforms,
                releaseYear: req.body.releaseYear,
				photoUrl: data.Location
			})

			movie = await Movie.populate('user')

			// respond to the client
			// What file on the client can we log out this response?
			res.status(201).json({movie})


		} catch(err){
			console.log(err)
			res.status(400).json({err})
		}


	})


 }
 


async function index(req, res) {
	try {
	  // this populates the user when you find the posts
	  // so you'll have access to the users information
	  // when you fetch teh posts
	  const movies = await Movie.find({}).populate("user").exec();
	  res.status(200).json({ movies: movies });
	} catch (err) {
	  res.status(400).json({ err });
	}
  }