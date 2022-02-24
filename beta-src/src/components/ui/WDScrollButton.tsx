import * as React from "react";
import Button from "@mui/material/Button";
import { scrollButtonProps } from "../../interfaces/PhaseScroll";
import leftArrow from "../../assets/svg-svgr/phaseLeftIcon.svg";
import rightArrow from "../../assets/svg-svgr/phaseRightIcon.svg";
import enabledArrow from "../../assets/svg-svgr/phaseIconEnabled.svg";
import { ScrollButtonState } from "../../enums/UIState";
import WDPhaseArrowIcon from "../svgr-components/WDPhaseArrowIcon";

const WDScrollButton: React.FC<scrollButtonProps> = function ({
  onClick = undefined,
  direction,
  disabled = false,
}): React.ReactElement {
  return (
    <Button
      // color="secondary"
      disabled={disabled}
      disableRipple
      onClick={onClick}
      variant="contained"
      sx={{
        bgcolor: "#fff",
        boxShadow: "none",
        "&:hover,:focus": { bgcolor: "#fff", boxShadow: "none" },
      }}
    >
      <WDPhaseArrowIcon direction={direction} />
    </Button>
  );
};

export default WDScrollButton;
