import React from "react";
import Header from "../headerMovieList";
import PeopleList from "../peopleList";
import Grid from "@mui/material/Grid";

function PeopleListPageTemplate({ people, title, action }) {
  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={3}>
        <PeopleList action={action} people={people} />
      </Grid>
    </Grid>
  );
}

export default PeopleListPageTemplate;