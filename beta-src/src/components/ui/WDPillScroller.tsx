import * as React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Box } from "@mui/material";
import WDScrollButton from "./WDScrollButton";
import { gameStateProps } from "../../interfaces/PhaseScroll";
import { ScrollButtonState } from "../../enums/UIState";

const WDPillScroller: React.FC<gameStateProps> = function ({
  onChangeSeason,
  gameState,
  disabled = false,
}): React.ReactElement {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <ButtonGroup>
        <WDScrollButton
          direction={ScrollButtonState.BACK}
          disabled={disabled}
        />
        <Box
          sx={{
            alignItems: "center",
            bgcolor: "white",
            display: "flex",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          {gameState.currentSeason}
        </Box>
        <WDScrollButton
          direction={ScrollButtonState.FORWARD}
          disabled={disabled}
        />
      </ButtonGroup>
    </Box>
  );
};

export default WDPillScroller;
