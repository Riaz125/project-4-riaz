import React from 'react';
import { Card, Icon, Image, Rating } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import { updateRating } from '../../utils/ratingsApi';

function MovieCard({movie, addRating, isProfile, user}) { 


  // post.likes = [{userId: 1234, username: 'jim', _id: 'likeId1234'}]
  // user = {username: 'jim, _id: 'userId1234'} <- logged in user

  // if the logged in user's id is in the post.likes array of objects, then the logged user has liked the post, so the heart
  // should be red
  // onClick removeLike Function

  // if the logged in users id is not in post.likes array of objects, then the logged in user has NOT liked the post, so the heart
  // should be grey
  // on click CreateLike Function



  // Step 1 Is the logged user in the post.likes array?
  // if the user liked this post, it will return the index of the like
  // if not liked = -1 
//  const likedIndex = post.likes.findIndex(like => like.username === user.username)

//  const ratingIndex = movie.rating.findIndex(rating => rating.username === user.username)

////  // step 2 
////  // if the user liked the post,
////  // the heart should be red
////  // else the heart should be grey
////  const likeColor = likedIndex > -1 ? 'red' : 'grey';
  

////  // step 3 onClick Handler
////  // if the user has liked the post, 
////  // clickHandler = removeLike
////  const clickHandler = likedIndex > -1 ? () => removeLike(post.likes[likedIndex]._id) : () => addLike(post._id)
//  // if the user hasn't liked the post
//  // clickHandler = addLike
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