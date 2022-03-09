import { GameOverviewResponse } from "../../interfaces/GameOverviewResponse";
import { GameAction } from "../action-types";
import { GameActionType } from "../actions";

const gameReducer = (state: GameOverviewResponse, action: GameActionType) => {
  switch (action.type) {
    case GameAction.GET_GAME_OVERVIEW:
      return { gameOverview: { ...action.payload } };
    default:
      return state;
  }
};

export default gameReducer;
