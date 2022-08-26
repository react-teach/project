import React from "react";
import PhotoCameraFrontIcon from "@mui/icons-material/PhotoCameraFront";
import { Grid, Paper, Typography } from "@mui/material";

function CircleIconCard2() {
  return (
    <Paper
      sx={{
        p: 8,
        margin: "auto",
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        boxShadow: "rgba(100, 100, 111, 0.5) 0px 7px 29px 0px",
        textAlign: "center",
        transition: ".5s",
        "&:hover": {
          background: "#2AA275",
          color: "#FFFFFF",
          transform: "translateY(-5px)",
          ".icon": {
            background: "#FFFFFF",
            ".faIcon": {
              color: "#2AA275",
            },
          },
        },
      }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Grid
          className="icon"
          sx={{
            background: "#2AA275",
            borderRadius: "50%",
            margin: "auto",
          }}
        >
          <Grid
            className="faIcon"
            sx={{
              width: 75,
              height: 75,
              color: "#FFFFFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <PhotoCameraFrontIcon sx={{ fontSize: 48 }} />
          </Grid>
        </Grid>
        <Grid>
          <Typography variant="h6" component="h2" my={2}>
            Canlı Ders
          </Typography>
        </Grid>
        <Grid>
          <Typography variant="body1" fontSize={16}>
            Aldığın dakikaları istersen inekle.com’da da kullanabilirsin.
            Sayısal, sözel tüm derslerden birebir online özel ders alabilir;
            konu eksiklerini giderebilir veya yapamadığın soruları canlı derste
            sorabilirsin.
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default CircleIconCard2;
