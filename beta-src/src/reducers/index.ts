import { combineReducers } from "redux";
import { GameOverviewResponse } from "../actions";
import gameReducer from "./game-reducer";

// export interface StoreState {
//   gameOverview: GameOverviewResponse;
// }

export default combineReducers({ gameOverview: gameReducer });

// export default combineReducers<StoreState>({ gameOverview: gameReducer });
