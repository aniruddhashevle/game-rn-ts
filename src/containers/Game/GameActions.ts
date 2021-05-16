import {
  SET_STEP_COUNT,
  SET_CARD_PAIRS
} from "./constants";

export const setStepCount = (data: any) => ({
  type: SET_STEP_COUNT,
  payload: data,
});

export const setCardPairs = (data: any) => ({
  type: SET_CARD_PAIRS,
  payload: data,
});