import { RootState } from "../../store";
import { GameState } from "./GameReducer";

export const stepCountSelector = (state: RootState) => (state.gameReducers as GameState).stepCount;

export const cardPairsSelector = (state: RootState) => (state.gameReducers as GameState).cardPairs;