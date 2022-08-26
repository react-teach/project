import React from "react";
import CircleIconCard from "../cards/CircleIconCard";
import CircleIconCard2 from "../cards/CircleIconCard2";
import { Grid } from "@mui/material";
import IconCard from "../cards/IconCard";

function Showcase() {
  return (
    <>
      <h1>styled-component ile yazıldı</h1>
      <Grid
        container
        spacing={5}
        sx={{ px: 12, pb: 5, display: "flex", flexDirection: "row" }}
      >
        <Grid item xs={12} md={6} lg={6}>
          <CircleIconCard></CircleIconCard>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <CircleIconCard></CircleIconCard>
        </Grid>
      </Grid>
      <h1>material uı ile yazıldı</h1>
      <Grid
        container
        spacing={5}
        sx={{ px: 12, display: "flex", flexDirection: "row" }}
      >
        <Grid item xs={12} md={6} lg={6}>
          <CircleIconCard2></CircleIconCard2>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <CircleIconCard2></CircleIconCard2>
        </Grid>
      </Grid>
      <h1>styled-component ile yazıldı</h1>
      <Grid
        container
        spacing={5}
        sx={{ px: 12, display: "flex", flexDirection: "column" }}
      >
        <Grid item xs={12} md={4} lg={4}>
          <IconCard></IconCard>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <IconCard></IconCard>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <IconCard></IconCard>
        </Grid>
      </Grid>
    </>
  );
}
export default Showcase;
