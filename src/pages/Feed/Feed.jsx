import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import AddMovie from "../../components/AddMovie/AddMovie";
import MovieFeed from "../../components/MovieFeed/MovieFeed";
import * as moviesAPI from "../../utils/movieApi";
// import {create, getAll} from '../../utils/postApi'
import { Grid } from "semantic-ui-react";

export default function Feed({ user, handleLogout }) {
  const [movies, setMovies] = useState([]); // <- likes are inside of the each post in the posts array
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  // C create in Crud for Likes
  // we will invoke these functions when the heart is clicked in the post card,
  // so we need to pass the function down to the postCard in order for it to use it
//  async function addLike(postId) {
//    try {
//      const data = await likesAPI.create(postId);
//      console.log(data, " this is from addLike");
//      getPosts(); // < - will get all the posts and update the state, with our like added to the post
//    } catch (err) {
//      console.log(err.message);
//    }
//  }

//  // we will invoke these functions when the heart is clicked in the post card,
//  // so we need to pass the function down to the postCard in order for it to use it
//  async function removeLike(likeId) {
//    try {
//      const data = await likesAPI.removeLike(likeId);
//      getPosts(); // < - will get all the posts and update the state, with our like added to the post
//    } catch (err) {
//      console.log(err.message);
//      setError(err.message)
//    }
//  }

  // C create in Crud
  // we invoke this function in addPost component when the submit button on our form is clicked
  // so we need to pass it as a prop
  async function handleAddMovie(movie) {
    try {
      setLoading(true);
      const data = await moviesAPI.create(movie); // our server is going to return
      // the created post, that will be inside of data, which is the response from
      // the server, we then want to set it in state
      console.log(data, " this is response from the server, in handleAddPost");
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
      console.log(data, " this is data,");
      setMovies([...data.movies]);
    } catch (err) {
      console.log(err.message, " this is the error");
      setError(err.message);
    }
  }

  // useEffect runs once
  // the component is first rendered (whenever you first view the component)
  // Component Lifecycle in react
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
            isProfile={false}
            user={user}
            //addLike={addLike}
            loading={loading}
            //removeLike={removeLike}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}