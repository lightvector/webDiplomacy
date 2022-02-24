import * as React from "react";
import { Box } from "@mui/material";
import WDPillScroller from "./WDPillScroller";
import WDGamePhaseIcon from "../svgr-components/WDGamePhaseIcon";
import { gameStateProps } from "../../interfaces/PhaseScroll";

const WDPhaseScroll: React.FC = function (): React.ReactElement {
  const gameState: {
    currentSeason: string;
    currentYear: number;
    seasons: string[];
  } = {
    currentSeason: "winter",
    currentYear: 1901,
    seasons: [
      "Spring 1901, Autumn 1901, Winter 1901, Spring 1902, Autumn 1902",
    ],
  };
  const changeSeason = (season) => {
    // loop through array to find position of current season.
    //
    console.log("hello");
  };
  return (
    <Box sx={{ display: "flex", alignItems: "flex-start" }}>
      <WDGamePhaseIcon iconState="winter" year={gameState.currentYear} />
      <WDPillScroller gameState={gameState} onChangeSeason={changeSeason} />
    </Box>
  );
};

export default WDPhaseScroll;
