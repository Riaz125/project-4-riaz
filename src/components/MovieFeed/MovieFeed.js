import React from "react";
import { Card, Dimmer, Segment, Image } from "semantic-ui-react";
import MovieCard from "../MovieCard/MovieCard";
import Loader from '../Loader/Loader'

export default function MovieFeed({
  movies,
  numMoviesCol,
  user,
  loading,
  addRating,
}) {

 


  return (

    <Card.Group itemsPerRow={numMoviesCol} stackable>
    {loading ? (
      <Segment>
        <Dimmer active inverted>
          <Loader size="small">Loading</Loader>
        </Dimmer>
        <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
      </Segment>
    ) : null}
    {movies.map((movie) => {
      return (
        <MovieCard
          movie={movie}
          key={movie._id}
          user={user}
          addRating={addRating}
        />
      );
    })}
  </Card.Group>




 
  );
}