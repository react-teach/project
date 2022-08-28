import React from "react";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import { Typography } from "@mui/material";
import styled from "styled-components";

function IconCard() {
  return (
    <Div>
      <div className="icon">
        <AvTimerIcon className="faIcon" />
      </div>
      <div className="content">
        <Typography className="title" variant="h5" component="h2" mb={3}>
          Sıfırlanmayan Dakikalar
        </Typography>
        <Typography variant="body1" fontSize={16}>
          Aldığın dakikaların son kullanma tarihi yok. Dakikaların bitene kadar
          senin, istediğin zaman kullanabilirsin!
        </Typography>
      </div>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  align-items: flex-start;
  padding-bottom: 50px;
  .faIcon {
    font-size: 64px;
    line-height: 56px;
    color: #2aa275;
    margin-right: 15px;
  }
  .title {
    font-size: 24px;
    font-weight: 500;
    transition: 0.4s;
  }
  :hover {
    .title {
      color: #2aa275;
    }
  }
`;
export default IconCard;
