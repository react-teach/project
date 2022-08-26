import React from "react";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import { Typography } from "@mui/material";
import styled from "styled-components";

function IconCard() {
  return (
    <Div>
      <div align="center">
        <A className="icon">
          <AvTimerIcon className="faIcon" />
        </A>
        <B>
          <Typography variant="h4" component="h2" my={2}>
            Sıfırlanmayan Dakikalar
          </Typography>
          <Typography variant="body1" fontSize={16}>
            Aldığın dakikaların son kullanma tarihi yok. Dakikaların bitene
            kadar senin, istediğin zaman kullanabilirsin!
          </Typography>
        </B>
      </div>
    </Div>
  );
}

const Div = styled.div`
  padding: 0;
  flex-direction: row;
`;
export default IconCard;
