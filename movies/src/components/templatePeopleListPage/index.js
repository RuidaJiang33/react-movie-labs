import React from "react";
import PeopleList from "../peopleList";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function PeopleListPageTemplate({ people, action }) {
  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Typography gutterBottom variant="h5" sx={{ paddingBottom: '15px', fontWeight: 'bold' }}>
          Popular People
        </Typography>
      </Grid>
      <Grid item container spacing={3}>
        <PeopleList action={action} people={people} />
      </Grid>
    </Grid>
  );
}

export default PeopleListPageTemplate;