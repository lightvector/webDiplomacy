import axios from "axios";
import { Dispatch } from "redux";
import { GameOverviewResponse } from "../../interfaces/GameOverviewResponse";
import { GameActionType } from "../actions";
import { GameAction } from "../action-types";

export const getGameOverview =
  (gameID: string) => async (dispatch: Dispatch) => {
    try {
      const { data: payload } = await axios.get<GameOverviewResponse>(
        `http://localhost/api.php?route=game/overview&gameID=${gameID}`,
      );
      dispatch<GameActionType>({
        payload,
        type: GameAction.GET_GAME_OVERVIEW,
      });
    } catch (error) {
      dispatch<GameActionType>({
        payload: {
          anon: "Yes",
          drawType: "draw-votes-public",
          excusedMissedTurns: 4,
          gameOver: "No",
          members: [
            {
              country: "Unassigned",
              countryID: 0,
              id: 855,
              online: false,
              userID: 6,
            },
            {
              country: "Unassigned",
              countryID: 0,
              id: 856,
              online: true,
              userID: 5,
            },
          ],
          minimumBet: 5,
          name: "test game 1",
          pauseTimeRemaining: null,
          phase: "Pre-game",
          phaseMinutes: 14400,
          playerTypes: "Mixed",
          pot: 10,
          potType: "Unranked",
          processStatus: "Crashed",
          processTime: null,
          startTime: 0,
          turn: 0,
          variant: {
            id: 1,
            mapID: 1,
            name: "Classic",
            fullName: "Classic",
            description: "The standard Diplomacy map of Europe.",
            author: "Avalon Hill",
            countries: [
              "England",
              "France",
              "Italy",
              "Germany",
              "Austria",
              "Turkey",
              "Russia",
            ],
            variantClasses: {
              drawMap: "Classic",
              adjudicatorPreGame: "Classic",
            },
            codeVersion: null,
            cacheVersion: null,
            coastParentIDByChildID: {
              "76": 8,
              "77": 8,
              "78": 32,
              "79": 32,
              "80": 20,
              "81": 20,
            },
            coastChildIDsByParentID: {
              "8": [76, 77],
              "32": [78, 79],
              "20": [80, 81],
            },
            terrIDByName: null,
            supplyCenterCount: 34,
            supplyCenterTarget: 18,
          },
          variantID: 1,
        },
        type: GameAction.GET_GAME_OVERVIEW,
      });
      console.log(error);
    }
  };

export default { getGameOverview };
