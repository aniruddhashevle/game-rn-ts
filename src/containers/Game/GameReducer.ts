import {
  SET_STEP_COUNT,
  SET_CARD_PAIRS,
} from "./constants";

interface PayloadJson {
  [key: string]: any;
}

export interface GameState {
  stepCount: number;
  cardPairs: null | Array<Array<number>>;
}

const initialState: GameState = {
  stepCount: 0,
  cardPairs: null,
}

type Action = { payload: PayloadJson; type: string };
export default (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_STEP_COUNT:
      return {
        ...state,
        stepCount: action.payload,
      };
    case SET_CARD_PAIRS:
      return {
        ...state,
        cardPairs: action.payload,
      }
    default:
      return state;
  }
};