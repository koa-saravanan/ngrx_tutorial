import { createAction, props } from "@ngrx/store";

export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const reset = createAction('[Counter] Reset');
export const addCustomCounter = createAction('[Counter] Add Custom Counter', props<{addValue : number}>());
export const removeCustomCounter = createAction('[Counter] Remove Custom Counter', props<{removeValue : number}>());