import React from "react";
import styled from "styled-components";
import PhotoCameraFrontIcon from "@mui/icons-material/PhotoCameraFront";
import { Typography } from "@mui/material";

function CircleIconCard() {
  return (
    <Div>
      <div align="center">
        <div className="icon">
          <PhotoCameraFrontIcon className="faIcon" />
        </div>
        <Typography variant="h6" component="h2" my={2}>
          Canlı Ders
        </Typography>
        <Typography variant="body1" fontSize={16}>
          Aldığın dakikaları istersen inekle.com’da da kullanabilirsin. Sayısal,
          sözel tüm derslerden birebir online özel ders alabilir; konu
          eksiklerini giderebilir veya yapamadığın soruları canlı derste
          sorabilirsin.
        </Typography>
      </div>
    </Div>
  );
}

const Div = styled.div`
display:flex;
flex-directive:column;
justify-content:center;
align-items:center;
padding:50px;
box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px;
border-radius:2%;
transition:.4s;
}
.icon{
  display:flex;
  justify-content:center;
  align-items: center;
  width:75px;
  height:75px;
  margin:0 auto;
  color:#FFFFFF;
  background-color:#2AA275;
  border-radius:50%;
}
.faIcon{
  font-size:48px;
  line-height:75px;
}
:hover{
  background-color:#2AA275;
  transform: translateY(-5px);
  color:white;
  .icon{
    background-color:white;
  }
  .faIcon{
    color:#2AA275;
  }
}`;
export default CircleIconCard;
