import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ITodoState } from "./todos.reducers";

export const selectTodosState = createFeatureSelector<ITodoState>('todos');

export const selectTodos = createSelector(
    selectTodosState,
    state => state.todos
)