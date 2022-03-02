import React from "react";
import { Card, Dimmer, Segment, Image } from "semantic-ui-react";
import ImdbCard from "../ImdbCard/ImdbCard";
import Loader from '../Loader/Loader'

export default function ImdbFeed({
  movies,
  numMoviesCol,
  user,
  loading,
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
        <ImdbCard
          movie={movie}
          user={user}
        />
      );
    })}
  </Card.Group>




 
  );
}