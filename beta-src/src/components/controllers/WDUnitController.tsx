import * as React from "react";
import { GameIconProps } from "../../interfaces/Icons";
import UIState from "../../enums/UIState";
import debounce from "../../utils/debounce";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { gameApiSliceActions } from "../../state/game/game-api-slice";
import processNextCommand from "../../utils/processNextCommand";

interface UnitControllerProps {
  meta: GameIconProps["meta"];
  setIconState: React.Dispatch<UIState>;
}

const WDUnitController: React.FC<UnitControllerProps> = function ({
  children,
  setIconState,
  meta,
}): React.ReactElement {
  const dispatch = useAppDispatch();

  const commands = useAppSelector(
    (state) => state.game.commands.unitCommands[meta.unit.id],
  );

  const commandActions = {
    DISLODGED: (command) => {
      const [key] = command;
      setIconState(UIState.DISLODGED);
    },
    DESTROY: (command) => {
      const [key] = command;
      setIconState(UIState.DESTROY);
    },
    HOLD: (command) => {
      const [key] = command;
      setIconState(UIState.HOLD);
    },
    NONE: (command) => {
      const [key] = command;
      setIconState(UIState.NONE);
    },
    SELECTED: (command) => {
      const [key] = command;
      setIconState(UIState.SELECTED);
    },
    DISBAND: (command) => {
      const [key] = command;
      setIconState(UIState.DISBANDED);
    },
  };

  processNextCommand(commands, commandActions);

  const clickAction = (e, method) => {
    dispatch(
      gameApiSliceActions.processUnitClick({
        method,
        onTerritory: meta.mappedTerritory.territory,
        unitID: meta.unit.id,
      }),
    );
  };

  const handleClick = debounce((e) => {
    clickAction(e, "click");
  }, 200);

  const handleSingleClick = (e) => {
    handleClick[0](e);
  };

  const handleDoubleClick = (e) => {
    handleClick[1]();
    clickAction(e, "dblClick");
  };

  return (
    <g onClick={handleSingleClick} onDoubleClick={handleDoubleClick}>
      {children}
    </g>
  );
};

export default WDUnitController;
