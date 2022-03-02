import { getMouseEventOptions } from '@testing-library/user-event/dist/utils';
import React from 'react';
import { Card, Image, Label, Segment} from 'semantic-ui-react'


function ImdbCard({movie}) { 
  const genres = movie.genre.join(', ')
  console.log(genres)
  return (
	<Card raised>
	<Image src={`${movie.imageurl}`} wrapped ui={false} />
	<Card.Content>
      <Card.Description><h4>{movie.title}</h4></Card.Description>
      <Segment>Genres:  {genres}</Segment>
      <Label as='a' color='white'>
        Released:
      <Label.Detail>{movie.released}</Label.Detail>
      </Label>
      <Label as='a' color='yellow'>
        IMDB:
      <Label.Detail>{movie.imdbrating}</Label.Detail>
      </Label>
	</Card.Content>
  </Card>
  )
}

export default ImdbCard;