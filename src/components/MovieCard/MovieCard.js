import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom";

function MovieCard({movie, isProfile, user}) { 


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

//  // step 2 
//  // if the user liked the post,
//  // the heart should be red
//  // else the heart should be grey
//  const likeColor = likedIndex > -1 ? 'red' : 'grey';


//  // step 3 onClick Handler
//  // if the user has liked the post, 
//  // clickHandler = removeLike
//  const clickHandler = likedIndex > -1 ? () => removeLike(post.likes[likedIndex]._id) : () => addLike(post._id)
  // if the user hasn't liked the post
  // clickHandler = addLike


	
  return (
	<Card key={movie._id} raised>
	{isProfile ? (
	  ""
	) : (
	  <Card.Content textAlign="left">
		<Card.Header>
		  <Link to={`/${movie.user.username}`}>
			{movie.user.username}
		  </Link>
		</Card.Header>
	  </Card.Content>
	)}
	<Image src={`${movie.photoUrl}`} wrapped ui={false} />
	<Card.Content>
	  <Card.Description>{movie.title}</Card.Description>
      <Card.Description>{movie.director}</Card.Description>
      <Card.Description>{movie.genres}</Card.Description>
      <Card.Description>{movie.platforms}</Card.Description>
      <Card.Description>{movie.releaseYear}</Card.Description>
	</Card.Content>
	<Card.Content extra textAlign={"right"}>
	  {/*<Icon name={"heart"} size="large" color={likeColor} onClick={clickHandler}/>*/}
	  {/*{post.likes.length} Likes*/}
	</Card.Content>
  </Card>
  )
}

export default MovieCard;