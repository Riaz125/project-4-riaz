import React from 'react';
import { Card, Image, Rating } from 'semantic-ui-react'
import { updateRating } from '../../utils/ratingsApi';

function MovieCard({movie, addRating, user}) { 



const ratingIndex = movie.ratings.findIndex(rating => rating.userName === user.username)



let total = 0;

movie.ratings.forEach(function(rating) {
  total += rating.rating;
});

let average = (total / movie.ratings.length);



const handleRate = (e, { rating, maxRating }) => {
    if(ratingIndex > -1) {
      updateRating(movie.ratings[ratingIndex]._id, rating)
      console.log("updateRating is being called")
    } else {
      addRating(movie._id, rating)
      console.log(ratingIndex, "ratingIndex")
      console.log("addrating is being called")
    }
  }

  return (
	<Card key={movie._id} raised>
	<Image src={`${movie.photoUrl}`} wrapped ui={false} />
	<Card.Content>
	  <Card.Description><h3>{movie.title}</h3></Card.Description>
      <Card.Description>Director: {movie.director}</Card.Description>
      <Card.Description>Genres: {movie.genres}</Card.Description>
      <Card.Description>Platforms: {movie.platforms}</Card.Description>
      <Card.Description>Release Year: {movie.releaseYear}</Card.Description>
	</Card.Content>
	<Card.Content extra textAlign={"right"}>
  <Rating icon='star' defaultRating={average} maxRating={5} onRate={handleRate} />
	  {average} Rating
	</Card.Content>
  </Card>
  )
}

export default MovieCard;