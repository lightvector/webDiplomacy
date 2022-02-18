import * as React from "react";
import Grid from "@mui/material/Grid";
import WDInfoPanelButton from "./WDInfoPanelButton";

const WDInfoPanelButtons = function (): React.ReactElement {
  return (
    <Grid container spacing={1}>
      <Grid item xs={4}>
        <WDInfoPanelButton name="Draw" />
      </Grid>
      <Grid item xs={4}>
        <WDInfoPanelButton name="Pause" />
      </Grid>
      <Grid item xs={8}>
        <WDInfoPanelButton name="Cancel" />
      </Grid>
    </Grid>
  );
};

export default WDInfoPanelButtons;
