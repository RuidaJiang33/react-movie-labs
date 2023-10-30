import React from "react";
import Grid from "@mui/material/Grid";
import ImageListItem from "@mui/material/ImageListItem";
import { getPeople } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'

const TemplateMoviePage = ({ people, children }) => {
  const { data, error, isLoading, isError } = useQuery(
    ["images", { id: people.id }],
    getPeople
  );

  console.log(data)

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const image = data.profile_path

  return (
    <>
      {/* <MovieHeader people={people} /> */}

      <Grid container sx={{ padding: "15px" }}>
        <Grid item xs={3}>
          <div sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}>
              <ImageListItem key={image} cols={1}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${image}`}
                  alt={image}
                />
              </ImageListItem>
          </div>
        </Grid>

        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
}

export default TemplateMoviePage;