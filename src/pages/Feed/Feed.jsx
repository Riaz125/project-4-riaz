import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import AddMovie from "../../components/AddMovie/AddMovie";
import MovieFeed from "../../components/MovieFeed/MovieFeed";
import * as moviesAPI from "../../utils/movieApi";
import * as ratingsAPI from '../../utils/ratingsApi';
import * as imdbAPI from '../../utils/imdbApi';
import { Grid } from "semantic-ui-react";

export default function Feed({ user, handleLogout }) {
  const [movies, setMovies] = useState([]); // <- likes are inside of the each post in the posts array
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  

  async function addRating(movieId, rating) {
    try {
      const data = await ratingsAPI.create(movieId, rating);
      getMovies();
    } catch (err) {
      console.log(err.message, "addRating in Feed component error")
    }
  }

  async function updateRating(ratingId, rating) {
    try {
      const data = await ratingsAPI.updateRating(ratingId, rating)
      getMovies();
    } catch (err) {
      console.log(err.message, "updateRating in Feed component error")
    }
  }



  async function handleAddMovie(movie) {
    try {
      setLoading(true);
      const data = await moviesAPI.create(movie);
      console.log(data, " this is response from the server");
      setMovies([data.movie, ...movies]);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      console.log(err);
      setError(err.message);
    }
  }

  // R read in crud
  async function getMovies() {
    try {
      const data = await moviesAPI.getAll();
      console.log(data, " this is data frm getMovies");
      setMovies([...data.movies]);
    } catch (err) {
      console.log(err.message, " this is the error");
      setError(err.message);
    }
  }

  useEffect(() => {
    getMovies();
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
          <AddMovie handleAddMovie={handleAddMovie} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 450 }}>
          <MovieFeed
            movies={movies}
            numMoviesCol={1}
            user={user}
            addRating={addRating}
            updateRating={updateRating}
            loading={loading}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}