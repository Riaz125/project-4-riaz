const express = require('express');
const router = express.Router();
const ratingsCtrl = require('../../controllers/ratings')
const multer = require('multer');
const upload = multer();

// /api/posts/someId/likes
router.post('/movies/:id/ratings', upload.single('rating'), ratingsCtrl.create)
// /api/likes/:id
router.put('/ratings/:id', upload.single('rating'), ratingsCtrl.update)

module.exports = router;