import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { GameOverviewResponse } from "../interfaces/GameOverviewResponse";
import { GameStatusResponse } from "../interfaces/GameStatusResponse";
import { GameActionType } from "./actions";
import reducers from "./reducers";

export interface StoreState {
  game: {
    overview: GameOverviewResponse;
    status: GameStatusResponse;
  };
}

const initialState = {
  game: {
    overview: {
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
    status: {
      gameID: 2,
      countryID: 0,
      variantID: 1,
      potType: "Unranked",
      turn: 0,
      phase: "Pre-game",
      gameOver: "No",
      pressType: "NoPress",
      phases: [],
      standoffs: [],
      occupiedFrom: [],
      votes: null,
      orderStatus: "None,Completed,Ready",
      status: "Playing",
    },
  },
};

export default createStore<StoreState, GameActionType, unknown, unknown>(
  reducers,
  initialState,
  applyMiddleware(thunk),
);
