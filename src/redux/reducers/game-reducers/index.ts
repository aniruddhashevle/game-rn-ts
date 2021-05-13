interface PayloadJson {
  [key: string]: any;
}

type Action = { payload: PayloadJson; type: string };
export default (state = { count: 0 }, action: Action) => {
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