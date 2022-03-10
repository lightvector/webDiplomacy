import { RootStateOrAny } from "react-redux";
import { GameAction } from "../action-types";
import { GameActionType } from "../actions";

const gameReducer = (
  state: RootStateOrAny,
  action: GameActionType,
): RootStateOrAny => {
  switch (action.type) {
    case GameAction.GET_GAME_OVERVIEW:
      return { ...state, overview: action.payload };
    case GameAction.GET_GAME_STATUS:
      return { ...state, status: action.payload };
    default:
      return {};
  }
};

export default gameReducer;
