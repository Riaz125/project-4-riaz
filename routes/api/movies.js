const express = require('express');
const router = express.Router();
const moviesCtrl = require('../../controllers/movies');
const multer = require('multer');
const upload = multer();
router.post('/', isAuthenticated, upload.single('photo'), moviesCtrl.create);
router.get('/', moviesCtrl.index);
router.get('/imdb');


function isAuthenticated(req, res, next){
	if(req.user){
		next()
	} else {
		res.status(401).json({data: 'Not Authorized!'})
	}
}



module.exports = router;