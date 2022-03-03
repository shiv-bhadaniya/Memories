import React from 'react'
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import useStyles from "./styles";

import Post from "./Post/Post";

const Posts = ({setCurrentId}) => {

    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

  return (

    !posts.length ? <CircularProgress/> : (
            <Grid claaaName={classes.container} spacing = {3} container alignItems = "stretch">
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6} md={6}>
                        <Post post={post} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
            </Grid>
        )
  )

}

export default Posts
