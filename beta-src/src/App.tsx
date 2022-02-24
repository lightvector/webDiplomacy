import * as React from "react";
import "./assets/css/App.css";
import Box from "@mui/material/Box";
import WDMain from "./components/ui/WDMain";
import WDPillScroller from "./components/ui/WDPillScroller";
import WDScrollButton from "./components/ui/WDScrollButton";
import WDGamePhaseIcon from "./components/svgr-components/WDGamePhaseIcon";
import WDPhaseScroll from "./components/ui/WDPhaseScroll";
import { ScrollButtonState } from "./enums/UIState";
import WDPhaseArrowIcon from "./components/svgr-components/WDPhaseArrowIcon";

const App: React.FC = function (): React.ReactElement {
  return (
    <Box className="App">
      {/* <WDMain /> */}
      {/* <WDPillScroller /> */}
      {/* <WDGamePhaseIcon iconState="autumn" year={1901} /> */}
      {/* <WDScrollButton direction={ScrollButtonState.FORWARD} /> */}
      {/* <WDPhaseArrowIcon direction={ScrollButtonState.BACK} disabled /> */}
      <WDPhaseScroll />
    </Box>
  );
};

export default App;
