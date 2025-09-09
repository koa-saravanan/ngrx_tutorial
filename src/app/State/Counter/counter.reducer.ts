import { createReducer, on } from "@ngrx/store";
import { addCustomCounter, decrement, increment, removeCustomCounter, reset} from "./counter.action";

export const initialState = 0;

export const counterReducer = createReducer(
    initialState,
    on(increment, (state) => state + 1),
    on(decrement, (state) => state - 1),
    on(reset, () => initialState),
    on(addCustomCounter, (state,action) => state + action.addValue),
    on(removeCustomCounter, (state,action) => state - action.removeValue),
)