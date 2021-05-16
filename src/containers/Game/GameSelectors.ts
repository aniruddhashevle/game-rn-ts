import { RootState } from "../../store";
import { GameState } from "./GameReducer";

export const countSelector = (state: RootState) => (state.gameReducers as GameState).count;