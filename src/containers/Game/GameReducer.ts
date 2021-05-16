interface PayloadJson {
  [key: string]: any;
}

export interface GameState {
  count: number;
}

const initialState: GameState = {
  count: 0,
}

type Action = { payload: PayloadJson; type: string };
export default (state = initialState, action: Action) => {
  switch (action.type) {
    case "SIMPLE_ACTION":
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};