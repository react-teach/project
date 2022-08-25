import React from "react";
import CircleIconCard from "../Cards/CircleIconCard";
import { Grid, Paper, Typography } from "@mui/material";

function Homepage() {
  return (
    <Grid
      container
      spacing={5}
      sx={{ px: 12, display: "flex", flexDirection: "row" }}
    >
      <Grid item xs={6} md={12} lg={6}>
        <CircleIconCard></CircleIconCard>
      </Grid>
      <Grid item xs={6} md={12} lg={6}>
        <CircleIconCard></CircleIconCard>
      </Grid>
    </Grid>
  );
}
export default Homepage;
