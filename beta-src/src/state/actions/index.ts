import { GameOverviewResponse } from "../../interfaces/GameOverviewResponse";
import { GameStatusResponse } from "../../interfaces/GameStatusResponse";
import { GameAction } from "../action-types";

interface GameOverviewAction {
  payload: GameOverviewResponse;
  type: GameAction.GET_GAME_OVERVIEW;
}

interface GameStatusAction {
  payload: GameStatusResponse;
  type: GameAction.GET_GAME_STATUS;
}

export type GameActionType = GameOverviewAction | GameStatusAction;
