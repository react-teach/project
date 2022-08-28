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
        sx={{
          px: 12,
          py: 12,
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: "#f1f1f1",
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <IconCard></IconCard>
          <IconCard></IconCard>
          <IconCard></IconCard>
        </Grid>
        <Grid item lg={4}>
          <img
            width={400}
            src="https://sorucevap.inekle.com/images/inekle-app-ozellikler.png"
            loading="lazy"
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <IconCard></IconCard>
          <IconCard></IconCard>
          <IconCard></IconCard>
        </Grid>
      </Grid>
    </>
  );
}
export default Showcase;
