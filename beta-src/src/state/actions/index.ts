import { GameOverviewResponse } from "../../interfaces/GameOverviewResponse";
import { GameAction } from "../action-types";

interface GameOverviewAction {
  payload: GameOverviewResponse | null;
  type: GameAction.GET_GAME_OVERVIEW;
}

export type GameActionType = GameOverviewAction;
