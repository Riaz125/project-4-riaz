import React, { useState } from 'react';

import { Button, Form, Grid, Header, Image,  Segment } from 'semantic-ui-react'

export default function AddMovieForm(props){
  const [selectedFile, setSelectedFile] = useState('')
  const [state, setState] = useState({
    title: '',
    director: '',
    genres: '',
    platforms: '',
    releaseYear: '',
  })

  function handleFileInput(e){
    setSelectedFile(e.target.files[0])
  }


  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
             
    const formData = new FormData()
    formData.append('photo', selectedFile); // this key matches the key in multer in the 
	// routes/api/posts create route upload.single('photo')
    for (let key in state){
        formData.append(key, state[key])
    }

	props.handleAddMovie(formData)
    // Have to submit the form now! We need a function!
  }

  return (
    
    <Grid textAlign='center' verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Segment>
        
            <Form  autoComplete="off" onSubmit={handleSubmit}>
            
              <Form.Input
                  className="form-control"
                  name="title"
                  value={state.title}
                  placeholder="Enter Movie Title"
                  onChange={handleChange}
                  required
              />   

              <Form.Input
                  className="form-control"
                  name="director"
                  value={state.director}
                  placeholder="Enter Director"
                  onChange={handleChange}
                  required
              />   

              <Form.Input
                  className="form-control"
                  name="genres"
                  value={state.genres}
                  placeholder="Enter Genre"
                  onChange={handleChange}
                  required
              />   

              <Form.Input
                  className="form-control"
                  name="platforms"
                  value={state.platforms}
                  placeholder="Enter Streaming Platforms"
                  onChange={handleChange}
                  required
              />   

              <Form.Input
                  className="form-control"
                  name="releaseYear"
                  value={state.releaseYear}
                  placeholder="Enter Release Year"
                  onChange={handleChange}
                  required
              />   


              <Form.Input
                className="form-control"
                type="file"
                name="photo"
                placeholder="upload image"
                onChange={handleFileInput}
              />   
              <Button
                type="submit"
                className="btn"
              >
                ADD MOVIE
              </Button>
            </Form>
          </Segment>
      </Grid.Column>
    </Grid>
   
  ); 
}