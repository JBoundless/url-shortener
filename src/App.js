import React from 'react';
import './style.css';
import { Grid } from '@material-ui/core';
import Search from './components/Search';

export default function App() {
  return (
    <Grid
      className="App"
      container
      direction="column"
      justifyContent="center"
      alignitems="center"
    >
      <h1>URL Shortener</h1>
      <Search />
    </Grid>
  );
}
