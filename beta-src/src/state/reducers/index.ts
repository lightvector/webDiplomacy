import { combineReducers } from "redux";
import gameReducer from "./game-reducer";

export default combineReducers({ game: gameReducer });
