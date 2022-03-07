import { GameOverviewAction, GameOverviewResponse } from "../actions";
import { GAME } from "../actions/types";

const gameReducer = (
  state: GameOverviewResponse,
  action: GameOverviewAction,
) => {
  switch (action.type) {
    case GAME.GET_GAME_OVERVIEW:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

gameReducer.defaultProps = {
  state: {},
};

export default gameReducer;
