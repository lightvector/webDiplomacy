// http://localhost/api.php?route=game/overview&gameID=2

import axios from "axios";
import { Dispatch } from "redux";
import { GAME } from "./types";

export interface GameOverviewResponse {
  anon: string;
  drawType: string;
  excusedMissedTurns: number;
  gameOver: string;
  members: [
    {
      country: string;
      countryID: number;
      id: number;
      online: boolean;
      userID: number;
    },
  ];
  minimumBet: number;
  name: string;
  pauseTimeRemaining: number | null | undefined;
  phase: string;
  phaseMinutes: number;
  playerTypes: string;
  pot: number;
  potType: string;
  processStatus: string;
  processTime: number | null | undefined;
  startTime: number;
  turn: number;
  variant: {
    id: number;
    mapID: number;
    name: string;
    fullName: string;
    description: string;
    author: string;
    countries: string[];
    variantClasses: { drawMap: string; adjudicatorPreGame: string };
    codeVersion: number | null | undefined;
    cacheVersion: number | null | undefined;
    coastParentIDByChildID: { [key: string]: number };
    coastChildIDsByParentID: { [key: string]: number[] };
    terrIDByName: string | null | undefined;
    supplyCenterCount: number;
    supplyCenterTarget: number;
  };
  variantID: number;
}

export interface GameOverviewAction {
  payload: GameOverviewResponse;
  type: GAME.GET_GAME_OVERVIEW;
}

export const getGameOverview =
  (gameID: string) => async (dispatch: Dispatch) => {
    try {
      const { data: payload } = await axios.get<GameOverviewResponse>(
        `http://localhost/api.php?route=game/overview&gameID=${gameID}`,
      );
      dispatch<GameOverviewAction>({
        payload,
        type: GAME.GET_GAME_OVERVIEW,
      });
    } catch (error) {
      console.log(error);
    }
  };

export default { getGameOverview };
