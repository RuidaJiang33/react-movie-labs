import { Button, Paper } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";

export default function PeopleDetailHeader({people}) {
  const navigate = useNavigate();

  return (
    <>
    <Paper>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <IconButton aria-label="go back" onClick={() => navigate(-1)} sx={{paddingLeft: 15}}>
          <ArrowBackIcon color="primary" fontSize="large" />
        </IconButton>
  
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <Link to={`/people/${people.id}`}>
            <Button>Outline</Button>
          </Link>
          <Link to={`/people/${people.id}/images`}>
            <Button>Media</Button>
          </Link>
        </div>
  
        <IconButton aria-label="go forward" onClick={() => navigate(+1)} sx={{paddingRight: 15}}>
          <ArrowForwardIcon color="primary" fontSize="large" />
        </IconButton>
      </div>
    </Paper>
  </>
  

  )
}