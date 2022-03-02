import React from 'react';
import { Card, Icon, Image, Rating } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import { updateRating } from '../../utils/ratingsApi';

function MovieCard({movie, addRating, isProfile, user}) { 



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
	  <Card.Description>{movie.title}</Card.Description>
      <Card.Description>{movie.director}</Card.Description>
      <Card.Description>{movie.genres}</Card.Description>
      <Card.Description>{movie.platforms}</Card.Description>
      <Card.Description>{movie.releaseYear}</Card.Description>
	</Card.Content>
	<Card.Content extra textAlign={"right"}>
  <Rating icon='star' defaultRating={average} maxRating={5} onRate={handleRate} />
	  {average} Rating
	</Card.Content>
  </Card>
  )
}

export default MovieCard;