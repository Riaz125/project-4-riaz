import React from 'react';
import { Card, Image} from 'semantic-ui-react'

function ImdbCard({movie}) { 
  return (
	<Card raised>
	<Image src={`${movie.imageurl}`} wrapped ui={false} />
	<Card.Content>
      <Card.Description>{movie.title}</Card.Description>
      <Card.Description>{movie.genre}</Card.Description>
      <Card.Description>{movie.released}</Card.Description>
      <Card.Description>{movie.imdbrating}</Card.Description>
	</Card.Content>
  </Card>
  )
}

export default ImdbCard;