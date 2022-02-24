import * as React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import GameVote from "../../enums/GameVote";
import WDButton from "./WDButton";
import WDCheckmarkIcon from "../svgr-components/WDCheckmarkIcon";

const WDGameVoteButtons = function (): React.ReactElement {
  const [drawSelected, setDrawSelected] = useState(false);
  const [pauseSelected, setPauseSelected] = useState(false);
  const [cancelSelected, setCancelSelected] = useState(false);

  return (
    <Grid container spacing={1}>
      <Grid item xs={8}>
        <WDButton
          color={drawSelected ? "secondary" : "primary"}
          onClick={() => setDrawSelected(!drawSelected)}
          startIcon={drawSelected && <WDCheckmarkIcon />}
        >
          <span>{GameVote.DRAW}</span>
        </WDButton>
      </Grid>
      <Grid item xs={8}>
        <WDButton
          color={pauseSelected ? "secondary" : "primary"}
          onClick={() => setPauseSelected(!pauseSelected)}
          startIcon={pauseSelected && <WDCheckmarkIcon />}
        >
          <span>{GameVote.PAUSE}</span>
        </WDButton>
      </Grid>
      <Grid item xs={8}>
        <WDButton
          color={cancelSelected ? "secondary" : "primary"}
          onClick={() => setCancelSelected(!cancelSelected)}
          startIcon={cancelSelected && <WDCheckmarkIcon />}
        >
          <span>{GameVote.CANCEL}</span>
        </WDButton>
      </Grid>
    </Grid>
  );
};

export default WDGameVoteButtons;
