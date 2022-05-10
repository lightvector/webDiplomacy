import * as React from "react";
import { Coordinates } from "../../../interfaces";
import TerritoryName from "../../../types/TerritoryName";

interface WDUnitSlotProps extends Coordinates {
  name: string;
  territoryName: TerritoryName;
}

const WDUnitSlot: React.FC<WDUnitSlotProps> = function ({
  children,
  name,
  territoryName,
  x,
  y,
}): React.ReactElement {
  return (
    <svg
      className="unit-slot"
      data-unit-slot={territoryName}
      id={`${territoryName}-${name}-unit-slot`}
      x={x}
      y={y}
    >
      {children}
    </svg>
  );
};

export default WDUnitSlot;