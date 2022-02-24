const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    userId: {type: Schema.Types.ObjectId, ref:'User'},
    userName: String,
    content: String,
    rating: { type: Number, min: 1, max: 5, default: 5 },
  },
  {
    timestamps: true,
  }
);

const movieSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    title: String,
    photoUrl: String,
    director: String,
    genres: String,
    platforms: String,
    releaseYear: Number,
    reviews: [reviewSchema]
  
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Movie', movieSchema);
