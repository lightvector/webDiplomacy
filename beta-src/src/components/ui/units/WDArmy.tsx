import * as React from "react";
import { useTheme } from "@mui/material/styles";
import UIState from "../../../enums/UIState";
import WDUnitController from "../../controllers/WDUnitController";
import { GameIconProps } from "../../../interfaces/Icons";
import WDArmyIcon from "./WDArmyIcon";
import { useAppSelector } from "../../../state/hooks";
import { gameUnitState } from "../../../state/game/game-api-slice";

const WDArmy: React.FC<GameIconProps> = function ({
  height = 50,
  iconState = UIState.NONE,
  id = undefined,
  meta,
  viewBox,
  width = 50,
}): React.ReactElement {
  const theme = useTheme();
  const unitState = useAppSelector(gameUnitState);
  const thisUnitState = unitState[meta.unit.id];

  return (
    <svg
      filter={theme.palette.svg.filters.dropShadows[1]}
      height={height}
      id={id}
      width={width}
      viewBox={viewBox}
    >
      <WDUnitController meta={meta}>
        <WDArmyIcon country={meta.country} iconState={thisUnitState} />
      </WDUnitController>
    </svg>
  );
};

export default WDArmy;
