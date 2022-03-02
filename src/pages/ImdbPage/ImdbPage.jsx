import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import AddMovie from "../../components/AddMovie/AddMovie";
import ImdbFeed from "../../components/ImdbFeed/ImdbFeed";
import * as imdbAPI from '../../utils/imdbApi';
import { Grid } from "semantic-ui-react";

export default function ImdbPage({ user, handleLogout }) {
  const [movies, setMovies] = useState([]); // <- likes are inside of the each post in the posts array
  const [error, setError] = useState("");
  


  async function getIMDB() {
    try {
      const imdb = await imdbAPI.getAllIMDB();
      const data = {movies: imdb.results};
      console.log(data, " this is data,");
      setMovies([...data.movies]);
    } catch (err) {
      console.log(err.message, " this is the error");
      setError(err.message);
    }
  }

  useEffect(() => {
    getIMDB();
  }, []);

  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column>
          <Header user={user} handleLogout={handleLogout} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 450 }}>
          <ImdbFeed
            movies={movies}
            numMoviesCol={2}
            user={user}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}